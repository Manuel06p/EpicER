package epicer.common.dto.user

import kotlinx.datetime.LocalDateTime
import kotlinx.serialization.Serializable

@Serializable
data class UserDTO(
    val id: Int,
    val username: String,
    val hashed_password: String,
    val name: String,
    val created_at: LocalDateTime,
)
