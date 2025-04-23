package epicer.common.dto.ingredientInRecipe

import kotlinx.serialization.Serializable

@Serializable
data class UpdateIngredientInRecipeDTO(
    val id: Int,
    val recipe: Int,
    val ingredient: Int,
    val quantity: Double?,
    val unit: Int?,
    val notes: String?,
)
