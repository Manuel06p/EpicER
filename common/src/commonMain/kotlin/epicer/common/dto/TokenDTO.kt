package epicer.common.dto

import kotlinx.serialization.Serializable

@Serializable
data class TokenDTO(
    val token: String
)