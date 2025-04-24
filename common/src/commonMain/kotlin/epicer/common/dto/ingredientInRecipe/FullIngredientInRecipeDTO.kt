package epicer.common.dto.ingredientInRecipe

import epicer.common.dto.ingredient.FullIngredientDTO
import epicer.common.dto.unit.BaseUnitDTO
import kotlinx.serialization.Serializable

@Serializable
data class FullIngredientInRecipeDTO(
    val id: Int,
    val notes: String?,
    val quantity: Double?,
    val unit: BaseUnitDTO?,
    val ingredient: FullIngredientDTO,
)