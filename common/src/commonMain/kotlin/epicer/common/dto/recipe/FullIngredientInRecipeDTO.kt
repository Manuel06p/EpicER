package epicer.common.dto.recipe

import epicer.common.dto.ingredient.FullIngredientDTO
import kotlinx.serialization.Serializable

@Serializable
data class FullIngredientInRecipeDTO(
    val id: Int,
    val notes: String?,
    val quantity: Double?,
    val unit: FullUnitDTO?,
    val ingredient: FullIngredientDTO,
)
