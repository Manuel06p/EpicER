package epicer.common.dto.unitType

import kotlinx.serialization.Serializable

@Serializable
data class UnitTypeDTO(
    val id: Int,
    val name: String,
    val referenceUnit: String?,
)