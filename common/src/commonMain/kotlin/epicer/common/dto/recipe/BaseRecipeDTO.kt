package epicer.common.dto.recipe

import kotlinx.serialization.Serializable

@Serializable
data class BaseRecipeDTO(
    val id: Int,
    val name: String,
    val imageId: Int?,

)
