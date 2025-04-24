package epicer.backend.service

import epicer.backend.model.IngredientsInRecipesTable
import epicer.backend.model.IngredientsInRecipesTable.ingredient
import epicer.backend.model.IngredientsInRecipesTable.notes
import epicer.backend.model.IngredientsInRecipesTable.quantity
import epicer.backend.model.IngredientsInRecipesTable.recipe
import epicer.backend.model.IngredientsInRecipesTable.unit
import epicer.backend.model.RecipesTable
import epicer.backend.model.SectionsTable
import epicer.backend.suspendTransaction
import epicer.common.dto.ingredientInRecipe.CreateIngredientInRecipeDTO
import epicer.common.dto.section.CreateSectionDTO
import epicer.common.dto.section.FullSectionDTO
import epicer.common.dto.section.UpdateSectionDTO
import org.jetbrains.exposed.sql.JoinType
import org.jetbrains.exposed.sql.SqlExpressionBuilder.eq
import org.jetbrains.exposed.sql.deleteWhere
import org.jetbrains.exposed.sql.insert
import org.jetbrains.exposed.sql.update

class SectionService {
    companion object {
        suspend fun createSection(createSectionDTO: CreateSectionDTO, owner: Int): Unit = suspendTransaction {
            val isOwner = RecipesTable
                .select(RecipesTable.owner)
                .where(RecipesTable.id eq createSectionDTO.recipe)
                .singleOrNull()
                ?.get(RecipesTable.owner)?.value == owner

            if (isOwner) {
                SectionsTable.insert {
                    it[index] = createSectionDTO.index
                    it[name] = createSectionDTO.name
                    it[description] = createSectionDTO.description
                    it[recipe] = createSectionDTO.recipe
                }
            } else {
                throw Exception("Section creation failed, the recipe isn't owned by the logged user")
            }
        }

        suspend fun deleteSection(sectionId: Int, owner: Int): Unit = suspendTransaction {
            val isOwner = RecipesTable
                .join(SectionsTable, JoinType.LEFT, SectionsTable.recipe, RecipesTable.id)
                .select(RecipesTable.owner)
                .where(SectionsTable.id eq sectionId)
                .singleOrNull()
                ?.get(RecipesTable.owner)?.value == owner

            if (!isOwner) {
                throw Exception("Delete failed: Section does not belong to the user")
            }

            // Delete the ingredient in recipe
            val deletedRows = SectionsTable.deleteWhere { SectionsTable.id eq sectionId }

            if (deletedRows == 0) {
                throw Exception("Delete failed: No record deleted")
            }
        }

        suspend fun updateSection(updateSectionDTO: UpdateSectionDTO, owner: Int): Unit = suspendTransaction {
            val sectionRow = SectionsTable
                .join(RecipesTable, JoinType.INNER, SectionsTable.recipe, RecipesTable.id)
                .select(SectionsTable.id, RecipesTable.owner)
                .where(SectionsTable.id eq updateSectionDTO.id)
                .singleOrNull()

            val isOwner = sectionRow?.get(RecipesTable.owner)?.value == owner

            if (!isOwner) {
                throw Exception("Update failed: Section does not belong to the logged-in user")
            }

            val updatedRows = SectionsTable.update({ SectionsTable.id eq updateSectionDTO.id }) {
                it[index] = updateSectionDTO.index
                it[name] = updateSectionDTO.name
                it[description] = updateSectionDTO.description
            }

            if (updatedRows == 0) {
                throw Exception("Update failed: No rows updated")
            }
        }

    }



}