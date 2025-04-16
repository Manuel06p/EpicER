package epicer.common.dto.user

import kotlinx.datetime.LocalDateTime
import kotlinx.serialization.Serializable

@Serializable
data class BaseUserDTO(
    val id: Int,
    val username: String,
    val name: String,
    val roles: List<String>,
    val created_at: LocalDateTime,
)