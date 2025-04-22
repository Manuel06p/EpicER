package epicer.backend.service

import epicer.backend.model.IngredientsInRecipesTable
import epicer.backend.model.RecipesTable
import epicer.backend.model.UnitsTable
import epicer.backend.model.UnitsTable.conversion_factor
import epicer.backend.model.UnitsTable.name
import epicer.backend.model.UnitsTable.short_name
import epicer.backend.model.UnitsTable.unit_type
import epicer.backend.suspendTransaction
import epicer.common.dto.ingredientInRecipe.CreateIngredientInRecipeDTO
import epicer.common.dto.unit.CreateUnitDTO
import org.jetbrains.exposed.sql.SqlExpressionBuilder.eq
import org.jetbrains.exposed.sql.insert

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
    }
}