package epicer.backend.service

import epicer.backend.model.ImagesTable
import epicer.common.dto.ImageFileDTO
import java.io.File
import org.jetbrains.exposed.sql.SqlExpressionBuilder.eq
import org.jetbrains.exposed.sql.and
import org.jetbrains.exposed.sql.deleteWhere
import org.jetbrains.exposed.sql.insertAndGetId
import org.jetbrains.exposed.sql.or
import org.jetbrains.exposed.sql.selectAll
import org.jetbrains.exposed.sql.transactions.transaction
import java.util.Base64


class ImageService {
    companion object {
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
        suspend fun getAccessibleImageById(imageId: Int, myId: Int): File? {
            return transaction {
                ImagesTable
                    .select(ImagesTable.id, ImagesTable.extension)
                    .where {
                        (ImagesTable.id eq imageId) and
                                ((ImagesTable.owner eq myId) or (ImagesTable.isPublic eq true))
                    }
                    .singleOrNull()
                    ?.let { result ->

                        val path = result[ImagesTable.id]
                        val extension = result[ImagesTable.extension]

                        // Check if path is null or if the file doesn't exist
                        val file = File("uploads/images/$path.$extension")
                        if (file.exists()) {
                            file
                        } else {
                            null
                        }
                    }
            }
        }

        fun deleteImage(idImage: Int): Boolean {
            try {
                println(idImage)
                val row = ImagesTable
                    .selectAll()
                    .where(ImagesTable.id eq idImage)
                    .singleOrNull() ?: return false

                val extension = row[ImagesTable.extension]
                val file = File("uploads/images/$idImage.$extension")

                if (file.exists()) {
                    file.delete()
                }

                return ImagesTable
                    .deleteWhere { ImagesTable.id eq idImage } > 0
            } catch (e: Exception) {
                println("Failed to delete image: ${e.message}")
                throw e
            }
        }



        fun createImage(imageBase64: String?, owner: Int? = null, isPublic: Boolean = true): ImageFileDTO? {
            try {
                val imageBytes: ByteArray? = try {
                    imageBase64
                        ?.takeIf { it.isNotBlank() }
                        ?.substringAfter("base64,", "")
                        ?.let { base64Str: String -> Base64.getDecoder().decode(base64Str) }
                } catch (e: IllegalArgumentException) {
                    println("Invalid base64 image: ${e.message}")
                    return null
                }

                val extension = imageBase64?.substringBefore(";")  // e.g., data:image/jpeg
                    ?.substringAfter("/")                           // → "jpeg"
                    ?.let {
                        when (it) {
                            "jpeg", "jpg" -> "jpg"
                            "png" -> "png"
                            "gif" -> "gif"
                            else -> "bin"
                        }
                    } ?: "bin"

                if (imageBytes != null) {
                    // Insert image metadata into the database (before writing the file)
                    val id = ImagesTable.insertAndGetId {
                        it[ImagesTable.isPublic] = isPublic
                        it[ImagesTable.owner] = owner
                        it[ImagesTable.extension] = extension
                    }

                    // Define the path where the image will be saved
                    val imagePath = "uploads/images/$id.$extension"

                    try {
                        // Write the image file to disk
                        File(imagePath).writeBytes(imageBytes)
                    } catch (e: Exception) {
                        // Rollback and cleanup file if writing fails
                        println("Failed to write image file: ${e.message}")
                        deleteImageFile(imagePath)
                        throw e // Ensure rollback of DB transaction
                    }

                    // Return the image path (to use in ingredient)
                    return ImageFileDTO(id.value, imagePath)
                } else {
                    return null
                }
            } catch (e: Exception) {
                // If anything fails here, propagate the error
                throw e
            }
        }

        fun deleteImageFile(imagePath: String) {
            val file = File(imagePath)
            if (file.exists()) {
                if (!file.delete()) {
                    println("Failed to delete image file: $imagePath")
                }
            }
        }
    }
}