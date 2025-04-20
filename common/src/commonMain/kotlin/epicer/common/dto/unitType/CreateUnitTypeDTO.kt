package epicer.common.dto.unitType

import kotlinx.serialization.Serializable

@Serializable
data class CreateUnitTypeDTO(
    val name: String,
)