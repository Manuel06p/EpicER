package epicer.shared.dto.user

import kotlinx.serialization.Serializable


@Serializable
data class LoginUserDTO (
    val username: String,
    val password: String,
)