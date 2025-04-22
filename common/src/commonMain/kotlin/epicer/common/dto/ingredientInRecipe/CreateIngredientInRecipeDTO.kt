package epicer.common.dto.ingredientInRecipe

import epicer.common.dto.ingredient.FullIngredientDTO
import epicer.common.dto.unit.BaseUnitDTO
import kotlinx.serialization.Serializable

@Serializable
data class CreateIngredientInRecipeDTO(
    val recipe: Int,
    val ingredient: Int,
    val quantity: Double?,
    val unit: Int?,
    val notes: String?,
)
