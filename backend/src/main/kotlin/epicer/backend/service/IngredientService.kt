package epicer.backend.service

import epicer.backend.model.IngredientsTable
import epicer.backend.service.ImageService.Companion.createImage
import epicer.backend.service.ImageService.Companion.deleteImage
import epicer.backend.service.ImageService.Companion.deleteImageFile
import epicer.backend.suspendTransaction
import epicer.common.dto.ingredient.CreateIngredientDTO
import epicer.common.dto.ingredient.FullIngredientDTO
import org.jetbrains.exposed.sql.SqlExpressionBuilder.eq
import org.jetbrains.exposed.sql.deleteWhere
import org.jetbrains.exposed.sql.insert
import org.jetbrains.exposed.sql.selectAll

class IngredientService {
    companion object {
        suspend fun getIngredients(): List<FullIngredientDTO> = suspendTransaction {
            IngredientsTable
                .selectAll()
                .map { rows ->
                    FullIngredientDTO(
                        id = rows[IngredientsTable.id].value,
                        nameSingular = rows[IngredientsTable.name_singular],
                        namePlural = rows[IngredientsTable.name_plural],
                        imageId = rows[IngredientsTable.image]?.value,
                    )
                }
        }

        suspend fun deleteIngredient(id: Int): Boolean = suspendTransaction {
            try {
                val ingredient = IngredientsTable.selectAll().where(IngredientsTable.id eq id).singleOrNull()
                    ?: return@suspendTransaction false

                val imageId = ingredient[IngredientsTable.image]

                // Delete the ingredient
                val deleted = IngredientsTable.deleteWhere { IngredientsTable.id eq id } > 0

                // Clean up associated image if exists
                if (imageId != null) {
                    deleteImage(imageId.value)
                }

                deleted
            } catch (e: Exception) {
                println("Failed to remove ingredient: ${e.message}")
                false
            }
        }


        suspend fun createIngredient(createIngredientDTO: CreateIngredientDTO): Boolean = suspendTransaction {
            val imageFileDTO = try {
                // Create the image and get the path (if successful)
                createImage(createIngredientDTO.imageBase64)
            } catch (e: Exception) {
                // Handle errors in image creation, but proceed with the ingredient creation
                null
            }

            try {
                // Insert the ingredient into the database
                IngredientsTable.insert {
                    it[IngredientsTable.name_singular] = createIngredientDTO.nameSingular
                    it[IngredientsTable.name_plural] = createIngredientDTO.namePlural
                    it[IngredientsTable.image] = imageFileDTO?.id
                }

                // If the ingredient insert is successful, return true
                true
            } catch (e: Exception) {
                // If the insert fails, cleanup the image (if it was written)
                println("Failed to create ingredient: ${e.message}")

                // If the image was created and inserted correctly into the file system but not into DB, delete it
                if (imageFileDTO != null) {
                    deleteImageFile(imageFileDTO.path)
                }

                throw e // Rollback transaction
            }
        }


    }
}