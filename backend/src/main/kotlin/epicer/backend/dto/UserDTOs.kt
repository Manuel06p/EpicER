package epicer.backend.dto

import kotlinx.serialization.Serializable
import kotlinx.datetime.LocalDateTime

@Serializable
data class UserDTO(
    val username: String,
    val hashed_password: String,
    val name: String,
    val is_admin: Boolean,
    val created_at: LocalDateTime,
)

@Serializable
data class NewUserDTO(
    val username: String,
    val password: String,
    val name: String,
    val is_admin: Boolean,
)

@Serializable
data class BaseUserDTO(
    val username: String,
    val name: String,
    val is_admin: Boolean,
    val created_at: LocalDateTime,
)

@Serializable
data class UpdateUserDTO(
    val username: String?,
    val password: String?,
    val name: String?,
    val is_admin: Boolean?,
)