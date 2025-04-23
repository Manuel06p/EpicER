package epicer.backend.service

import epicer.backend.model.IngredientsInRecipesTable
import epicer.backend.model.IngredientsTable
import epicer.backend.model.RecipesTable
import epicer.backend.model.UnitsTable
import epicer.backend.model.UnitsTable.conversion_factor
import epicer.backend.model.UnitsTable.name
import epicer.backend.model.UnitsTable.short_name
import epicer.backend.model.UnitsTable.unit_type
import epicer.backend.suspendTransaction
import epicer.common.dto.ingredient.FullIngredientDTO
import epicer.common.dto.ingredientInRecipe.CreateIngredientInRecipeDTO
import epicer.common.dto.ingredientInRecipe.UpdateIngredientInRecipeDTO
import epicer.common.dto.recipe.FullIngredientInRecipeDTO
import epicer.common.dto.unit.BaseUnitDTO
import epicer.common.dto.unit.CreateUnitDTO
import org.jetbrains.exposed.sql.JoinType
import org.jetbrains.exposed.sql.SqlExpressionBuilder.eq
import org.jetbrains.exposed.sql.and
import org.jetbrains.exposed.sql.deleteWhere
import org.jetbrains.exposed.sql.insert
import org.jetbrains.exposed.sql.or
import org.jetbrains.exposed.sql.selectAll
import org.jetbrains.exposed.sql.update

class IngredientInRecipeService {
    companion object {
        suspend fun createIngredientInRecipe(createIngredientInRecipeDTO: CreateIngredientInRecipeDTO, owner: Int): Unit = suspendTransaction {
            val isOwner = RecipesTable
                .select(RecipesTable.owner)
                .where(RecipesTable.id eq createIngredientInRecipeDTO.recipe)
                .singleOrNull()
                ?.get(RecipesTable.owner)?.value == owner

            if (isOwner) {
                IngredientsInRecipesTable.insert {
                    it[ingredient] = createIngredientInRecipeDTO.ingredient
                    it[quantity] = createIngredientInRecipeDTO.quantity
                    it[unit] = createIngredientInRecipeDTO.unit
                    it[notes] = createIngredientInRecipeDTO.notes
                    it[recipe] = createIngredientInRecipeDTO.recipe
                }
            } else {
                throw Exception("Ingredient in recipe creation failed, the recipe isn't owned by the logged user")
            }

        }

        suspend fun updateIngredientInRecipe(
            updateDTO: UpdateIngredientInRecipeDTO,
            ownerId: Int
        ): Unit = suspendTransaction {
            val isOwner = RecipesTable
                .select(RecipesTable.owner)
                .where(RecipesTable.id eq updateDTO.recipe)
                .singleOrNull()
                ?.get(RecipesTable.owner)?.value == ownerId

            if (!isOwner) {
                throw Exception("Update failed: Recipe does not belong to the user.")
            }

            val updatedRows = IngredientsInRecipesTable.update({ IngredientsInRecipesTable.id eq updateDTO.id }) {
                it[ingredient] = updateDTO.ingredient
                it[quantity] = updateDTO.quantity
                it[unit] = updateDTO.unit
                it[notes] = updateDTO.notes
                it[recipe] = updateDTO.recipe
            }

            if (updatedRows == 0) {
                throw Exception("Update failed: No record found with ID ${updateDTO.id}")
            }
        }

        suspend fun deleteIngredientInRecipe(ingredientInRecipeId: Int, recipeId: Int, ownerId: Int): Unit = suspendTransaction {
            // Check if the recipe belongs to the current user
            val isOwner = RecipesTable
                .select(RecipesTable.owner)
                .where(RecipesTable.id eq recipeId)
                .singleOrNull()
                ?.get(RecipesTable.owner)?.value == ownerId

            if (!isOwner) {
                throw Exception("Delete failed: Recipe does not belong to the user")
            }

            // Delete the ingredient in recipe
            val deletedRows = IngredientsInRecipesTable.deleteWhere { IngredientsInRecipesTable.id eq ingredientInRecipeId }

            if (deletedRows == 0) {
                throw Exception("Delete failed: No record deleted")
            }
        }


        suspend fun getIngredientsInRecipe(recipeId: Int, owner: Int): List<FullIngredientInRecipeDTO> = suspendTransaction {
            val rows = IngredientsInRecipesTable
                .join(IngredientsTable, JoinType.LEFT, IngredientsInRecipesTable.ingredient, IngredientsTable.id)
                .join(UnitsTable, JoinType.LEFT, IngredientsInRecipesTable.unit, UnitsTable.id)
                .join(RecipesTable, JoinType.INNER, IngredientsInRecipesTable.recipe, RecipesTable.id)
                .selectAll()
                .where(
                    (RecipesTable.id eq recipeId) and
                    ((RecipesTable.owner eq owner) or (RecipesTable.is_public eq true))
                )
                .toList()
            rows.map {
                FullIngredientInRecipeDTO(
                    id = it[IngredientsInRecipesTable.id].value,
                    notes = it[IngredientsInRecipesTable.notes],
                    quantity = it[IngredientsInRecipesTable.quantity],
                    unit = it[UnitsTable.id]?.value?.let { unitId ->
                        BaseUnitDTO(
                            id = unitId,
                            name = it[name],
                            shortName = it[short_name]
                        )
                    },
                    ingredient = FullIngredientDTO(
                        id = it[IngredientsTable.id].value,
                        nameSingular = it[IngredientsTable.name_singular],
                        namePlural = it[IngredientsTable.name_plural],
                        imageId = it[IngredientsTable.image]?.value
                    )
                )
            }
        }


    }
}