package epicer.common.dto.step

import epicer.common.dto.ingredientInRecipe.FullIngredientInRecipeDTO
import kotlinx.serialization.Serializable

@Serializable
data class FullStepDTO(
    val id: Int,
    val index: Int,
    val name: String?,
    val description: String?,

    val images: List<Int>,
    val ingredientsInRecipe: List<FullIngredientInRecipeDTO>,
)