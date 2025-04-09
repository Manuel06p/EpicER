package epicer.common.dto.recipe

import kotlinx.serialization.Serializable

@Serializable
data class FullSectionDTO(
    val id: Int,
    val index: Int,
    val name: String?,
    val description: String?,

    val stepsDTO: List<FullStepDTO>,
)
