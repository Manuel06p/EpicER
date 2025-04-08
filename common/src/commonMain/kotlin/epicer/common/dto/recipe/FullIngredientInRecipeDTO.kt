package epicer.common.dto.recipe

import kotlinx.serialization.Serializable

@Serializable
data class FullIngredientInRecipeDTO(
    val id: Int,
    val name: String,
    val notes: String,
    val quantity: Double,
    val unitDTO: FullUnitDTO
)
