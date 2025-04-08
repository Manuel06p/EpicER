package epicer.common.dto.recipe

import kotlinx.serialization.Serializable

@Serializable
data class FullUnitDTO(
    val id: Int,
    val name: String,
    val shortName: String,
)
