package epicer.common.dto.ingredient

import kotlinx.serialization.Serializable

@Serializable
data class CreateIngredientDTO(
    val nameSingular: String,
    val namePlural: String? = null,
    val imageBase64: String? = null
)