package epicer.common.dto.recipe

import kotlinx.serialization.Serializable

@Serializable
data class UpdateRecipeDTO(
    val id: Int,
    val name: String?,
    val description: String?,
    val updateDescription: Boolean,
    val portions: Int?,
    val updatePortions: Boolean,
    val isPublic: Boolean,
    val imageBase64: String?,
    val updateImageBase64: Boolean,
)