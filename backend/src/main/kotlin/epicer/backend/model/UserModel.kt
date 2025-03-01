package epicer.backend.model

import kotlinx.serialization.Serializable

@Serializable
data class UserModel(
    val username: String,
    val hashed_password: String,
    val name: String,
    val is_admin: Boolean,
)