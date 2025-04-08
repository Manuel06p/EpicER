package epicer.backend.service.`interface`

import epicer.common.dto.recipe.BaseRecipeDTO
import java.io.File

interface IImageService {
    suspend fun getAccessibleImageById(imageId: Int, myId: Int): File?
}