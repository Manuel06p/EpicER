package epicer.backend.service

import epicer.backend.model.RolesTable
import epicer.backend.model.UsersRolesTable
import epicer.backend.model.UsersTable
import epicer.backend.suspendTransaction
import epicer.common.dto.role.RoleDTO
import epicer.common.dto.user.BaseUserDTO
import kotlinx.datetime.toKotlinLocalDateTime
import org.jetbrains.exposed.sql.JoinType
import org.jetbrains.exposed.sql.selectAll
import kotlin.collections.component1
import kotlin.collections.component2

class RoleService {
    companion object {
        suspend fun getRoles(): List<RoleDTO> = suspendTransaction {
            RolesTable
                .selectAll()
                .map { rows ->
                    RoleDTO(
                        id = rows[RolesTable.id].value.toInt(),
                        role = rows[RolesTable.role]
                    )
                }
        }
    }
}