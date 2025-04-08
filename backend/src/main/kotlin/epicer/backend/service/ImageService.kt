package epicer.backend.service

import epicer.backend.model.ImagesTable
import epicer.backend.model.RecipesTable
import epicer.backend.service.`interface`.IImageService
import epicer.backend.service.`interface`.IRecipeService
import epicer.backend.suspendTransaction
import epicer.common.dto.recipe.BaseRecipeDTO
import org.jetbrains.exposed.sql.selectAll
import java.io.File
import org.jetbrains.exposed.sql.SqlExpressionBuilder.eq
import org.jetbrains.exposed.sql.and
import org.jetbrains.exposed.sql.or
import org.jetbrains.exposed.sql.transactions.transaction


class ImageService : IImageService {
    //    override suspend fun getBaseRecipesById(id: Int): List<BaseRecipeDTO> = suspendTransaction {
//        RecipesTable
//            .select(
//                RecipesTable.name,
//                RecipesTable.image,
//            )
//            .where(RecipesTable.owner eq id)
//            .map { row ->
//                BaseRecipeDTO(
//                    name = row[RecipesTable.name],
//                    id_image = row[RecipesTable.image]?.value,
//                )
//            }
//    }
    override suspend fun getAccessibleImageById(imageId: Int, myId: Int): File? {
        return transaction {
            ImagesTable
                .select(ImagesTable.id)
                .where {
                    (ImagesTable.id eq imageId) and
                            ((ImagesTable.owner eq myId) or (ImagesTable.isPublic eq true))
                }
                .singleOrNull()
                ?.let { result ->

                    val path = result[ImagesTable.id]

                    // Check if path is null or if the file doesn't exist
                    val file = File("uploads/images/$path.jpg")
                    if (file.exists()) {
                        file
                    } else {
                        null
                    }
                }
        }
    }

}