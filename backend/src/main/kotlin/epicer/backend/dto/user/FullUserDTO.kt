package epicer.backend.dto.user

import kotlinx.datetime.LocalDateTime
import kotlinx.serialization.Serializable

@Serializable
data class FullUserDTO(
    val id: Int,
    val username: String,
    val hashed_password: String,
    val name: String,
    val roles: List<String>,
    val created_at: LocalDateTime,
)
