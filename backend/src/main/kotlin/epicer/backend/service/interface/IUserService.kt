package epicer.backend.service.`interface`

import epicer.backend.dto.user.*

interface IUserService {
    suspend fun getBaseUsers(): List<BaseUserDTO>
    suspend fun getBaseUserById(id: Int): BaseUserDTO?
    suspend fun getUserByUsername(username: String): UserDTO?
    suspend fun getFullUserByUsername(username: String): FullUserDTO?
    suspend fun createUser(newUser: NewUserDTO)
    suspend fun deleteUserById(id: Int)
    suspend fun updateUserById(id: Int, updateUser: UpdateUserDTO)
}