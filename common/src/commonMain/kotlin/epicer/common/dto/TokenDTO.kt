package epicer.common.dto

import epicer.common.dto.user.BaseUserDTO
import kotlinx.serialization.Serializable

@Serializable
data class TokenDTO(
    val token: String,
    val baseUserDTO: BaseUserDTO,
)