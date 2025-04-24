package epicer.common.dto.section

import kotlinx.serialization.Serializable


@Serializable
data class CreateSectionDTO(
    val index: Int,
    val name: String?,
    val description: String?,
    val recipe: Int,
)