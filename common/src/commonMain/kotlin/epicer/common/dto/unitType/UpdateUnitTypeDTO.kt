package epicer.common.dto.unitType

import kotlinx.serialization.Serializable

@Serializable
data class UpdateUnitTypeDTO(
    val id: Int,
    val name: String?,
    val updateReferenceUnit: Boolean,
    val referenceUnit: Int?,
)