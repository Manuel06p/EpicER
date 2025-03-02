package epicer.backend.dto.user

import kotlinx.datetime.LocalDateTime
import kotlinx.serialization.Serializable

@Serializable
data class BaseUserDTO(
    val username: String,
    val name: String,
    val is_admin: Boolean,
    val created_at: LocalDateTime,
)