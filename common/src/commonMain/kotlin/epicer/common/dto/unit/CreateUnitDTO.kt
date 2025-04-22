package epicer.common.dto.unit

import kotlinx.serialization.Serializable

@Serializable
data class CreateUnitDTO(
    val name: String,
    val shortName: String,
    val conversionFactor: Double,
    val unitType: Int,
)