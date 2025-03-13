package epicer.backend.service.`interface`

import epicer.backend.dto.user.*

interface IUserService {
    suspend fun getUsers(): List<UserDTO>
    suspend fun getBaseUserByUsername(username: String): BaseUserDTO?
    suspend fun getUserByUsername(username: String): UserDTO?
    suspend fun getFullUserByUsername(username: String): FullUserDTO?
    suspend fun createUser(newUser: NewUserDTO)
    suspend fun deleteUser(username: String)
    suspend fun updateUser(username: String, updateUser: UpdateUserDTO)
}