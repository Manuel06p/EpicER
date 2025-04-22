package epicer.common.dto.ingredient

import kotlinx.serialization.Serializable

@Serializable
data class UpdateIngredientDTO(
    val id: Int,
    val nameSingular: String?,
    val namePlural: String?,
    val imageBase64: String? = null
)