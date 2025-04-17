package epicer.common.dto.role

import kotlinx.serialization.Serializable

@Serializable
data class RoleDTO(
    val id: Int,
    val role: String
)
