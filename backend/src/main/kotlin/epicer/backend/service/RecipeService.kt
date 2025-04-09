package epicer.backend.service

import epicer.backend.model.IngredientsInRecipesTable
import epicer.backend.model.IngredientsTable
import epicer.backend.model.RecipesTable
import epicer.backend.model.UnitsTable
import epicer.backend.service.`interface`.IRecipeService
import epicer.backend.suspendTransaction
import epicer.common.dto.recipe.BaseRecipeDTO
import epicer.common.dto.recipe.FullIngredientDTO
import epicer.common.dto.recipe.FullIngredientInRecipeDTO
import epicer.common.dto.recipe.FullRecipeDTO
import epicer.common.dto.recipe.FullUnitDTO
import org.jetbrains.exposed.sql.JoinType
import org.jetbrains.exposed.sql.SqlExpressionBuilder.eq
import org.jetbrains.exposed.sql.and
import org.jetbrains.exposed.sql.or
import org.jetbrains.exposed.sql.selectAll
import kotlin.collections.map

class RecipeService : IRecipeService {
    override suspend fun getBaseRecipesById(id: Int): List<BaseRecipeDTO> = suspendTransaction {
        RecipesTable
            .select(
                RecipesTable.id,
                RecipesTable.name,
                RecipesTable.image,
            )
            .where(RecipesTable.owner eq id)
            .map { row ->
                BaseRecipeDTO(
                    id = row[RecipesTable.id].value,
                    name = row[RecipesTable.name],
                    imageId = row[RecipesTable.image]?.value,
                )
            }
    }

    override suspend fun getAccessibleRecipeById(recipeId: Int, userId: Int): FullRecipeDTO? = suspendTransaction {
        val rows = RecipesTable
            .join(IngredientsInRecipesTable, JoinType.LEFT, RecipesTable.id, IngredientsInRecipesTable.recipe)
            .join(UnitsTable, JoinType.LEFT, IngredientsInRecipesTable.unit, UnitsTable.id)
            .join(IngredientsTable, JoinType.LEFT, IngredientsInRecipesTable.ingredient, IngredientsTable.id)
            .selectAll()
            .where(
                (RecipesTable.id eq recipeId) and
                ((RecipesTable.owner eq userId) or (RecipesTable.is_public eq true))
            )
            .toList()

        if (rows.isNotEmpty()) {
            val firstRow = rows.first()

            val ingredients = rows.map { row ->
                FullIngredientInRecipeDTO(
                    id = row[IngredientsInRecipesTable.id].value,
                    notes = row[IngredientsInRecipesTable.notes],
                    quantity = row[IngredientsInRecipesTable.quantity],
                    unit = FullUnitDTO(
                        id = row[UnitsTable.id].value,
                        name = row[UnitsTable.name],
                        shortName = row[UnitsTable.short_name]
                    ),
                    ingredient = FullIngredientDTO(
                        id = row[IngredientsTable.id].value,
                        nameSingular = row[IngredientsTable.name_singular],
                        namePlural = row[IngredientsTable.name_plural],
                        imageId = row[IngredientsTable.image]?.value
                    )
                )
            }

            FullRecipeDTO(
                id = firstRow[RecipesTable.id].value,
                name = firstRow[RecipesTable.name],
                description = firstRow[RecipesTable.description],
                portions = firstRow[RecipesTable.portions],
                imageId = firstRow[RecipesTable.image]?.value,
                ingredientsDTO = ingredients
            )
        }
        else {
            null
        }
    }
}