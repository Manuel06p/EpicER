package epicer.common.dto.recipe

import kotlinx.serialization.Serializable

@Serializable
data class FullStepDTO(
    val id: Int,
    val index: Int,
    val name: String,
    val description: String,

    val images: List<Int>,
    val ingredientsDTO: List<FullIngredientInRecipeDTO>,
)
