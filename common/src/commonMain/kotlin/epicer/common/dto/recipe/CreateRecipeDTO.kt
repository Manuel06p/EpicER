package epicer.common.dto.recipe

import kotlinx.serialization.Serializable

@Serializable
data class CreateRecipeDTO(
    val name: String,
    val description: String?,
    val portions: Int?,
    val isPublic: Boolean,
    val imageBase64: String?
)