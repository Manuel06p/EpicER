package epicer.common.dto.ingredient

import kotlinx.serialization.Serializable

@Serializable
data class FullIngredientDTO(
    val id: Int,
    val nameSingular: String,
    val namePlural: String?,
    val imageId: Int?,
)