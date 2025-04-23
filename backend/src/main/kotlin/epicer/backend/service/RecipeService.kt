package epicer.backend.service

import epicer.backend.model.IngredientsInRecipesTable
import epicer.backend.model.IngredientsTable
import epicer.backend.model.RecipesTable
import epicer.backend.model.SectionsTable
import epicer.backend.model.StepsImagesTable
import epicer.backend.model.StepsIngredientsInRecipe
import epicer.backend.model.StepsTable
import epicer.backend.model.UnitsTable
import epicer.backend.service.ImageService.Companion.createImage
import epicer.backend.service.ImageService.Companion.deleteImageFile
import epicer.backend.suspendTransaction
import epicer.common.dto.ingredient.CreateIngredientDTO
import epicer.common.dto.recipe.BaseRecipeDTO
import epicer.common.dto.ingredient.FullIngredientDTO
import epicer.common.dto.recipe.CreateRecipeDTO
import epicer.common.dto.recipe.FullIngredientInRecipeDTO
import epicer.common.dto.recipe.FullRecipeDTO
import epicer.common.dto.recipe.FullSectionDTO
import epicer.common.dto.recipe.FullStepDTO
import epicer.common.dto.unit.BaseUnitDTO
import org.jetbrains.exposed.sql.JoinType
import org.jetbrains.exposed.sql.SqlExpressionBuilder.eq
import org.jetbrains.exposed.sql.and
import org.jetbrains.exposed.sql.insert
import org.jetbrains.exposed.sql.or
import org.jetbrains.exposed.sql.selectAll
import kotlin.collections.map

class RecipeService {
    companion object {
        suspend fun createRecipe(createRecipeDTO: CreateRecipeDTO, ownerId: Int): Unit = suspendTransaction {
            val imageFileDTO = try {
                // Create the image and get the path (if successful)
                createImage(createRecipeDTO.imageBase64)
            } catch (e: Exception) {
                // Handle errors in image creation, but proceed with the ingredient creation
                throw Exception("Failed to create recipe")
            }

            try {
                // Insert the ingredient into the database
                RecipesTable.insert {
                    it[name] = createRecipeDTO.name
                    it[description] = createRecipeDTO.description
                    it[portions] = createRecipeDTO.portions
                    it[is_public] = createRecipeDTO.isPublic
                    it[owner] = ownerId
                    it[RecipesTable.image] = imageFileDTO?.id
                }

            } catch (e: Exception) {
                // If the insert fails, cleanup the image (if it was written)
                println("Failed to create recipe: ${e.message}")

                // If the image was created and inserted correctly into the file system but not into DB, delete it
                if (imageFileDTO != null) {
                    deleteImageFile(imageFileDTO.path)
                }

                throw e // Rollback transaction
            }
        }

        suspend fun getBaseRecipesById(id: Int): List<BaseRecipeDTO> = suspendTransaction {
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

        suspend fun getAccessibleRecipeById(recipeId: Int, userId: Int): FullRecipeDTO? = suspendTransaction {
            val rows = RecipesTable
                .join(IngredientsInRecipesTable, JoinType.LEFT, RecipesTable.id, IngredientsInRecipesTable.recipe)
                .join(UnitsTable, JoinType.LEFT, IngredientsInRecipesTable.unit, UnitsTable.id)
                .join(IngredientsTable, JoinType.LEFT, IngredientsInRecipesTable.ingredient, IngredientsTable.id)
                .join(SectionsTable, JoinType.LEFT, RecipesTable.id, SectionsTable.recipe)
                .join(StepsTable, JoinType.LEFT, SectionsTable.id, StepsTable.section)
                .join(StepsIngredientsInRecipe, JoinType.LEFT, StepsTable.id, StepsIngredientsInRecipe.step)
                .join(StepsImagesTable, JoinType.LEFT, StepsTable.id, StepsImagesTable.step)
                .selectAll()
                .where(
                    (RecipesTable.id eq recipeId) and
                            ((RecipesTable.owner eq userId) or (RecipesTable.is_public eq true))
                )
                .toList()

            val ingredientsInRecipe = rows.mapNotNull { row ->
                row[IngredientsInRecipesTable.id]?.value?.let { id ->
                    FullIngredientInRecipeDTO(
                        id = id,
                        notes = row[IngredientsInRecipesTable.notes],
                        quantity = row[IngredientsInRecipesTable.quantity],
                        unit = row[UnitsTable.id]?.value?.let { unitId ->
                            BaseUnitDTO(
                                id = unitId,
                                name = row[UnitsTable.name],
                                shortName = row[UnitsTable.short_name]
                            )
                        },
                        ingredient = FullIngredientDTO(
                            id = row[IngredientsTable.id].value,
                            nameSingular = row[IngredientsTable.name_singular],
                            namePlural = row[IngredientsTable.name_plural],
                            imageId = row[IngredientsTable.image]?.value
                        )
                    )
                }
            }.distinctBy { it.id } // 🚀 avoid duplicates!

            val sections = rows
                .groupBy { it[SectionsTable.id]?.value }
                .filterKeys { it != null }
                .map { (sectionId, sectionRows) ->
                    FullSectionDTO(
                        id = sectionId!!,
                        index = sectionRows.first()[SectionsTable.index],
                        name = sectionRows.first()[SectionsTable.title],
                        description = sectionRows.first()[SectionsTable.description],
                        steps = sectionRows
                            .groupBy { it[StepsTable.id]?.value }
                            .filterKeys { it != null }
                            .map { (stepId, stepRows) ->
                                FullStepDTO(
                                    id = stepId!!,
                                    index = stepRows.first()[StepsTable.index],
                                    name = stepRows.first()[StepsTable.title],
                                    description = stepRows.first()[StepsTable.description],
                                    images = stepRows.mapNotNull { it[StepsImagesTable.image]?.value }.distinct(),
                                    ingredientsInRecipe = stepRows.mapNotNull { row ->
                                        row[StepsIngredientsInRecipe.ingredient_in_recipe]?.value?.let { ingredientInRecipeId ->
                                            ingredientsInRecipe.find { it.id == ingredientInRecipeId }
                                        }
                                    }.distinctBy { it.id }
                                )
                            }
                    )
                }

            if (rows.isNotEmpty()) {
                val firstRow = rows.first()

                FullRecipeDTO(
                    id = firstRow[RecipesTable.id].value,
                    name = firstRow[RecipesTable.name],
                    description = firstRow[RecipesTable.description],
                    owner = firstRow[RecipesTable.owner].value,
                    portions = firstRow[RecipesTable.portions],
                    imageId = firstRow[RecipesTable.image]?.value,
                    ingredientsInRecipe = ingredientsInRecipe,
                    sections = sections
                )
            } else {
                null
            }
        }
    }
}