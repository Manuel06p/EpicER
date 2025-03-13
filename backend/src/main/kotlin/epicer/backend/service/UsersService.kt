package epicer.backend.service

import epicer.backend.dto.user.*
import epicer.backend.model.RolesTable
import epicer.backend.model.UsersRolesTable
import epicer.backend.model.UsersTable
import epicer.backend.service.`interface`.IUserService
import epicer.backend.suspendTransaction
import epicer.backend.utils.hashPassword
import kotlinx.datetime.toKotlinLocalDateTime
import org.jetbrains.exposed.sql.*
import org.jetbrains.exposed.sql.SqlExpressionBuilder.eq

class UsersService : IUserService {
    override suspend fun getUsers(): List<UserDTO> = suspendTransaction {
        UsersTable.selectAll().map { row ->
            UserDTO(
                id = row[UsersTable.id].value,
                username = row[UsersTable.username],
                hashed_password = row[UsersTable.hashed_password],
                name = row[UsersTable.name],
                created_at = row[UsersTable.created_at].toKotlinLocalDateTime()
            )
        }
    }

    override suspend fun getBaseUserByUsername(username: String): BaseUserDTO? = suspendTransaction {
        UsersTable
            .select(UsersTable.username, UsersTable.name)
            .where(UsersTable.username eq username)
            .singleOrNull()
            ?.let { row ->
                BaseUserDTO(
                    username = row[UsersTable.username],
                    name = row[UsersTable.name],
                    created_at = row[UsersTable.created_at].toKotlinLocalDateTime()
                )
            }
    }

    override suspend fun getUserByUsername(username: String): UserDTO? = suspendTransaction {
        UsersTable
            .selectAll()
            .where(UsersTable.username eq username)
            .singleOrNull()
            ?.let { row ->
                UserDTO(
                    id = row[UsersTable.id].value,
                    username = row[UsersTable.username],
                    hashed_password = row[UsersTable.hashed_password],
                    name = row[UsersTable.name],
                    created_at = row[UsersTable.created_at].toKotlinLocalDateTime()
                )
            }
    }

    override suspend fun getFullUserByUsername(username: String): FullUserDTO? = suspendTransaction {
        val query = UsersTable.join(
            UsersRolesTable,
            JoinType.LEFT,
            UsersTable.id,
            UsersRolesTable.user
        ).join(
            RolesTable,
            JoinType.LEFT,
            UsersRolesTable.role,
            RolesTable.id
        )
            .selectAll()
            .where { UsersTable.username eq username }

        query
            .firstOrNull()
            ?.let { row ->
            FullUserDTO(
                id = row[UsersTable.id].value,
                username = row[UsersTable.username],
                hashed_password = row[UsersTable.hashed_password],
                name = row[UsersTable.name],
//                roles = query.map { it[RolesTable.role] },
                roles = query.mapNotNull { it[RolesTable.role] }.distinct(),
                created_at = row[UsersTable.created_at].toKotlinLocalDateTime()
            )
        }
    }


    override suspend fun createUser(newUser: NewUserDTO): Unit = suspendTransaction {
        UsersTable.insert {
            it[username] = newUser.username
            it[hashed_password] = hashPassword(newUser.password)
            it[name] = newUser.name
        }
    }

    override suspend fun deleteUser(username: String): Unit = suspendTransaction {
        UsersTable.deleteWhere { UsersTable.username eq username }
    }

    override suspend fun updateUser(updateUsername: String, updateUser: UpdateUserDTO): Unit = suspendTransaction {
        UsersTable.update({ UsersTable.username eq updateUsername }) {
            updateUser.username?.let { new -> it[username] = new }
            updateUser.password?.let { new -> it[hashed_password] = hashPassword(new) }
            updateUser.name?.let { new -> it[name] = new }
        }
    }
}