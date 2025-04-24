package epicer.common.dto.section

import kotlinx.serialization.Serializable


@Serializable
data class UpdateSectionDTO(
    val id: Int,
    val index: Int,
    val name: String?,
    val description: String?,
    val recipe: Int,
)