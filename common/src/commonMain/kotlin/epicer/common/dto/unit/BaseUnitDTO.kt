package epicer.common.dto.unit

import kotlinx.serialization.Serializable

@Serializable
data class BaseUnitDTO(
    val id: Int,
    val name: String,
    val shortName: String,
)