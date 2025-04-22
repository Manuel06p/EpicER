package epicer.common.dto.unit

import kotlinx.serialization.Serializable

@Serializable
data class UpdateUnitDTO(
    val id: Int,
    val name: String?,
    val shortName: String?,
    val conversionFactor: Double?,
    val unitType: Int?,
)