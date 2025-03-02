package epicer.backend.services

import epicer.backend.dto.BaseUserDTO
import epicer.backend.services.interfaces.IUserService
import epicer.backend.dto.NewUserDTO
import epicer.backend.dto.UpdateUserDTO
import epicer.backend.dto.UserDTO
import epicer.backend.models.UsersTable
import epicer.backend.suspendTransaction
import epicer.backend.utils.hashPassword
import kotlinx.datetime.toKotlinLocalDateTime
import org.jetbrains.exposed.sql.insert
import org.jetbrains.exposed.sql.selectAll
import org.jetbrains.exposed.sql.SqlExpressionBuilder.eq
import org.jetbrains.exposed.sql.deleteWhere
import org.jetbrains.exposed.sql.update

class UsersService : IUserService {
    override suspend fun getUsers(): List<UserDTO> = suspendTransaction {
        UsersTable.selectAll().map{ row ->
            UserDTO(
                username = row[UsersTable.username],
                hashed_password = row[UsersTable.hashed_password],
                name = row[UsersTable.name],
                is_admin = row[UsersTable.is_admin],
                created_at = row[UsersTable.created_at].toKotlinLocalDateTime()
            )
        }
    }

    override suspend fun getUserByUsername(username: String): BaseUserDTO? = suspendTransaction {
        UsersTable
            .select(UsersTable.username, UsersTable.name, UsersTable.is_admin)
            .where(UsersTable.username eq username)
            .singleOrNull()
            ?.let { row ->
                BaseUserDTO(
                    username = row[UsersTable.username],
                    name = row[UsersTable.name],
                    is_admin = row[UsersTable.is_admin],
                    created_at = row[UsersTable.created_at].toKotlinLocalDateTime()
                )
            }

    }


    override suspend fun createUser(newUser: NewUserDTO): Unit = suspendTransaction {
        UsersTable.insert {
            it[username] = newUser.username
            it[hashed_password] = hashPassword(newUser.password)
            it[name] = newUser.name
            it[is_admin] = newUser.is_admin
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
            updateUser.is_admin?.let { new -> it[is_admin] = new }
        }
    }
}