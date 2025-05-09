package epicer.common.dto.section

import epicer.common.dto.step.FullStepDTO
import kotlinx.serialization.Serializable

@Serializable
data class FullSectionDTO(
    val id: Int,
    val index: Int,
    val name: String?,
    val description: String?,

    val steps: List<FullStepDTO>,
)
