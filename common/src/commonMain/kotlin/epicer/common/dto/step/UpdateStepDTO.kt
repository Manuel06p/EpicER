package epicer.common.dto.step

import epicer.common.dto.ingredientInRecipe.FullIngredientInRecipeDTO
import kotlinx.serialization.Serializable

@Serializable
data class UpdateStepDTO(
    val id: Int,
    val index: Int,
    val name: String?,
    val description: String?,
    val section: Int,
    val ingredientsInStep: List<Int>,
)