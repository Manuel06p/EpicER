package epicer.common.dto.user

import kotlinx.serialization.Serializable

@Serializable
data class UpdateUserDTO(
    val id: Int,
    val username: String?,
    val password: String?,
    val name: String?,
    val roles: List<Int>?,
)