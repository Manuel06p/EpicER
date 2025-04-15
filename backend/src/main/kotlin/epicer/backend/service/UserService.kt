package epicer.backend.service

import epicer.backend.model.ImagesTable
import epicer.backend.model.RecipesTable
import epicer.backend.model.RolesTable
import epicer.backend.model.UsersRolesTable
import epicer.backend.model.UsersTable
import epicer.backend.suspendTransaction
import epicer.backend.utils.hashPassword
import epicer.common.dto.recipe.BaseRecipeDTO
import epicer.common.dto.user.BaseUserDTO
import epicer.common.dto.user.FullUserDTO
import epicer.common.dto.user.NewUserDTO
import epicer.common.dto.user.UpdateUserDTO
import epicer.common.dto.user.*
import kotlinx.datetime.toKotlinLocalDateTime
import org.jetbrains.exposed.sql.*
import org.jetbrains.exposed.sql.SqlExpressionBuilder.eq
import kotlin.collections.component1
import kotlin.collections.component2
import kotlin.collections.map

class UserService {
    companion object {
        suspend fun getBaseUserById(id: Int): BaseUserDTO? = suspendTransaction {
            UsersTable
                .join(UsersRolesTable, JoinType.LEFT, UsersTable.id, UsersRolesTable.user)
                .join(RolesTable, JoinType.LEFT, UsersRolesTable.role, RolesTable.id)
                .select(
                    UsersTable.id,
                    UsersTable.username,
                    UsersTable.name,
                    UsersTable.created_at,
                    RolesTable.role
                )
                .where(UsersTable.id eq id)
                .groupBy { it[UsersTable.id] }
                .map { (userId, rows) ->
                    BaseUserDTO(
                        username = rows.first()[UsersTable.username],
                        name = rows.first()[UsersTable.name],
                        created_at = rows.first()[UsersTable.created_at].toKotlinLocalDateTime(),
                        roles = rows.mapNotNull { it[RolesTable.role] }.distinct() // Collect roles per user
                    )
                }
                .singleOrNull()
        }

        suspend fun getFullUserByUsername(username: String): FullUserDTO? = suspendTransaction {
            UsersTable
                .join(UsersRolesTable, JoinType.LEFT, UsersTable.id, UsersRolesTable.user)
                .join(RolesTable, JoinType.LEFT, UsersRolesTable.role, RolesTable.id)
                .select(
                    UsersTable.id,
                    UsersTable.username,
                    UsersTable.name,
                    UsersTable.hashed_password,
                    UsersTable.created_at,
                    RolesTable.role
                )
                .where(UsersTable.username eq username)
                .groupBy { it[UsersTable.id] }
                .map { (userId, rows) ->
                    FullUserDTO(
                        id = rows.first()[UsersTable.id].value,
                        username = rows.first()[UsersTable.username],
                        hashed_password = rows.first()[UsersTable.hashed_password],
                        name = rows.first()[UsersTable.name],
                        created_at = rows.first()[UsersTable.created_at].toKotlinLocalDateTime(),
                        roles = rows.mapNotNull { it[RolesTable.role] }.distinct() // Collect roles per user
                    )
                }
                .singleOrNull()
        }

        suspend fun getUserByUsername(username: String): UserDTO? = suspendTransaction {
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

        suspend fun updateUserById(updateId: Int, updateUser: UpdateUserDTO): Unit = suspendTransaction {
            UsersTable.update({ UsersTable.id eq updateId }) {
                updateUser.username?.let { new -> it[username] = new }
                updateUser.password?.let { new -> it[hashed_password] = hashPassword(new) }
                updateUser.name?.let { new -> it[name] = new }
            }
        }


        suspend fun deleteUserById(id: Int): Unit = suspendTransaction {
            UsersTable.deleteWhere { UsersTable.id eq id }
        }

        suspend fun getBaseUsers(): List<BaseUserDTO> = suspendTransaction {
            UsersTable
                .join(UsersRolesTable, JoinType.LEFT, UsersTable.id, UsersRolesTable.user)
                .join(RolesTable, JoinType.LEFT, UsersRolesTable.role, RolesTable.id)
                .select(
                    UsersTable.id,
                    UsersTable.username,
                    UsersTable.name,
                    UsersTable.created_at,
                    RolesTable.role
                )
                .groupBy { it[UsersTable.id] }
                .map { (userId, rows) ->
                    BaseUserDTO(
                        username = rows.first()[UsersTable.username],
                        name = rows.first()[UsersTable.name],
                        created_at = rows.first()[UsersTable.created_at].toKotlinLocalDateTime(),
                        roles = rows.mapNotNull { it[RolesTable.role] }.distinct() // Collect roles per user
                    )
                }
        }

//    override suspend fun getBaseUsers(): List<BaseUserDTO> = suspendTransaction {
//        UsersTable.selectAll().map { row ->
//            BaseDTO(
//                id = row[UsersTable.id].value,
//                username = row[UsersTable.username],
//                hashed_password = row[UsersTable.hashed_password],
//                name = row[UsersTable.name],
//                created_at = row[UsersTable.created_at].toKotlinLocalDateTime()
//            )
//        }
//    }


        suspend fun createUser(newUser: NewUserDTO): Unit = suspendTransaction {
            UsersTable.insert {
                it[username] = newUser.username
                it[hashed_password] = hashPassword(newUser.password)
                it[name] = newUser.name
            }
        }


    }

}