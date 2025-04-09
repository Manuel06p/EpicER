package epicer.common.dto.recipe

import kotlinx.serialization.Serializable

@Serializable
data class FullIngredientInRecipeDTO(
    val id: Int,
    val notes: String?,
    val quantity: Double?,
    val unit: FullUnitDTO?,
    val ingredient: FullIngredientDTO,
)
