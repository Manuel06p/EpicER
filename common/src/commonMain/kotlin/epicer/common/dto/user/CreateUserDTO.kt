package epicer.common.dto.user

import kotlinx.serialization.Serializable

@Serializable
data class CreateUserDTO(
    val username: String,
    val password: String,
    val name: String,
)