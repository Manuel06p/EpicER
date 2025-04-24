package epicer.common.dto.recipe

import epicer.common.dto.ingredientInRecipe.FullIngredientInRecipeDTO
import epicer.common.dto.section.FullSectionDTO
import kotlinx.serialization.Serializable

@Serializable
data class FullRecipeDTO(
    val id: Int,
    val name: String,
    val description: String?,
    val portions: Int?,
    val owner: Int,
    val imageId: Int?,
    val isPublic: Boolean,

    val ingredientsInRecipe: List<FullIngredientInRecipeDTO>,
    val sections: List<FullSectionDTO>,
)
