package epicer.backend.service

import epicer.backend.model.IngredientsInRecipesTable
import epicer.backend.model.IngredientsInRecipesTable.ingredient
import epicer.backend.model.IngredientsInRecipesTable.notes
import epicer.backend.model.IngredientsInRecipesTable.quantity
import epicer.backend.model.IngredientsInRecipesTable.recipe
import epicer.backend.model.IngredientsInRecipesTable.unit
import epicer.backend.model.RecipesTable
import epicer.backend.model.SectionsTable
import epicer.backend.model.StepsIngredientsInRecipe
import epicer.backend.model.StepsTable
import epicer.backend.suspendTransaction
import epicer.common.dto.ingredientInRecipe.CreateIngredientInRecipeDTO
import epicer.common.dto.section.CreateSectionDTO
import epicer.common.dto.section.FullSectionDTO
import epicer.common.dto.step.CreateStepDTO
import epicer.common.dto.step.UpdateStepDTO
import org.jetbrains.exposed.sql.JoinType
import org.jetbrains.exposed.sql.SqlExpressionBuilder.eq
import org.jetbrains.exposed.sql.SqlExpressionBuilder.inList
import org.jetbrains.exposed.sql.and
import org.jetbrains.exposed.sql.deleteWhere
import org.jetbrains.exposed.sql.insert
import org.jetbrains.exposed.sql.insertAndGetId
import org.jetbrains.exposed.sql.update

class StepService {
    companion object {

        suspend fun createStep(createStepDTO: CreateStepDTO, owner: Int): Unit = suspendTransaction {
            val recipe = RecipesTable
                .join(SectionsTable, JoinType.LEFT, RecipesTable.id, SectionsTable.recipe)
                .select(RecipesTable.id, RecipesTable.owner)
                .where(SectionsTable.id eq createStepDTO.section)
                .singleOrNull()

            val isOwner = recipe?.get(RecipesTable.owner)?.value == owner
            val recipeId = recipe?.get(RecipesTable.id)?.value

            if (!isOwner || recipeId == null) {
                throw Exception("Step creation failed, the recipe isn't owned by the logged user")
            }

            // Fetch ingredients and check their linkage to the recipe
            val ingredientCount = IngredientsInRecipesTable
                .join(RecipesTable, JoinType.INNER, IngredientsInRecipesTable.recipe, RecipesTable.id)
                .select(IngredientsInRecipesTable.id)
                .where(
                    (IngredientsInRecipesTable.id inList createStepDTO.ingredientsInStep) and
                    (RecipesTable.id eq recipeId)
                )
                .count().toInt()

            if (ingredientCount != createStepDTO.ingredientsInStep.size) {
                throw Exception("Some ingredients are not part of the specified recipe")
            }

            // Insert the step into the StepsTable
            val stepId = StepsTable.insertAndGetId {
                it[index] = createStepDTO.index
                it[name] = createStepDTO.name
                it[description] = createStepDTO.description
                it[section] = createStepDTO.section
            }

            createStepDTO.ingredientsInStep.forEach { ingredientId ->
                StepsIngredientsInRecipe.insert {
                    it[step] = stepId
                    it[ingredient_in_recipe] = ingredientId
                }
            }

        }

        suspend fun deleteStep(stepId: Int, owner: Int): Unit = suspendTransaction {
            val isOwner = RecipesTable
                .join(SectionsTable, JoinType.LEFT, SectionsTable.recipe, RecipesTable.id)
                .join(StepsTable, JoinType.LEFT, StepsTable.section, SectionsTable.id)
                .select(RecipesTable.owner)
                .where(StepsTable.id eq stepId)
                .singleOrNull()
                ?.get(RecipesTable.owner)?.value == owner

            if (!isOwner) {
                throw Exception("Delete failed: Step does not belong to the user")
            }

            // Delete the ingredient in recipe
            val deletedRows = StepsTable.deleteWhere { StepsTable.id eq stepId }

            if (deletedRows == 0) {
                throw Exception("Delete failed: No record deleted")
            }
        }

        suspend fun updateStep(updateStepDTO: UpdateStepDTO, owner: Int): Unit = suspendTransaction {
            // Check step exists and user is owner
            val stepRow = RecipesTable
                .join(SectionsTable, JoinType.INNER, RecipesTable.id, SectionsTable.recipe)
                .join(StepsTable, JoinType.INNER, StepsTable.section, SectionsTable.id)
                .select(RecipesTable.id, RecipesTable.owner)
                .where(StepsTable.id eq updateStepDTO.id)
                .singleOrNull()

            val recipeId = stepRow?.get(RecipesTable.id)?.value
            val isOwner = stepRow?.get(RecipesTable.owner)?.value == owner

            if (!isOwner || recipeId == null) {
                throw Exception("Update failed: Step does not belong to the logged-in user")
            }

            // Validate that all ingredientInStep IDs belong to the same recipe
            val ingredientCount = IngredientsInRecipesTable
                .select(IngredientsInRecipesTable.id)
                .where(
                    (IngredientsInRecipesTable.id inList updateStepDTO.ingredientsInStep) and
                            (IngredientsInRecipesTable.recipe eq recipeId)
                )
                .count().toInt()

            if (ingredientCount != updateStepDTO.ingredientsInStep.size) {
                throw Exception("Update failed: Some ingredients do not belong to the recipe")
            }

            // Perform the step update
            val updatedRows = StepsTable.update({ StepsTable.id eq updateStepDTO.id }) {
                it[index] = updateStepDTO.index
                it[name] = updateStepDTO.name
                it[description] = updateStepDTO.description
                it[section] = updateStepDTO.section
            }

            if (updatedRows == 0) {
                throw Exception("Update failed: No rows updated")
            }

            // Clear old ingredient links
            StepsIngredientsInRecipe.deleteWhere { StepsIngredientsInRecipe.step eq updateStepDTO.id }

            // Insert updated ingredient links
            updateStepDTO.ingredientsInStep.forEach { ingredientId ->
                StepsIngredientsInRecipe.insert {
                    it[step] = updateStepDTO.id
                    it[ingredient_in_recipe] = ingredientId
                }
            }
        }

    }
}