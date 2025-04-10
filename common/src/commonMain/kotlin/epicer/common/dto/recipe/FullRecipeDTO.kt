package epicer.common.dto.recipe

import kotlinx.serialization.Serializable

@Serializable
data class FullRecipeDTO(
    val id: Int,
    val name: String,
    val description: String?,
    val portions: Int?,

    val imageId: Int?,

    val ingredientsInRecipe: List<FullIngredientInRecipeDTO>,
    val sections: List<FullSectionDTO>,
)
