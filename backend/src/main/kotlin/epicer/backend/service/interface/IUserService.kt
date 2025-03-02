package epicer.backend.service.`interface`

import epicer.backend.dto.user.*

interface IUserService {
    suspend fun getUsers(): List<UserDTO>
    suspend fun getUserByUsername(username: String): BaseUserDTO?
    suspend fun createUser(newUser: NewUserDTO)
    suspend fun deleteUser(username: String)
    suspend fun updateUser(username: String, updateUser: UpdateUserDTO)
}