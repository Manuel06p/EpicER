package epicer.backend.dto.user

import kotlinx.serialization.Serializable

@Serializable
data class NewUserDTO(
    val username: String,
    val password: String,
    val name: String,
    val is_admin: Boolean,
)