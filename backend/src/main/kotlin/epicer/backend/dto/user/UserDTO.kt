package epicer.backend.dto.user

import kotlinx.datetime.LocalDateTime
import kotlinx.serialization.Serializable

@Serializable
data class UserDTO(
    val username: String,
    val hashed_password: String,
    val name: String,
    val is_admin: Boolean,
    val created_at: LocalDateTime,
)
