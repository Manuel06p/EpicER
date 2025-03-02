package epicer.backend.services.interfaces

import epicer.backend.dto.BaseUserDTO
import epicer.backend.dto.NewUserDTO
import epicer.backend.dto.UpdateUserDTO
import epicer.backend.dto.UserDTO

interface IUserService {
    suspend fun getUsers(): List<UserDTO>
    suspend fun getUserByUsername(username: String): BaseUserDTO?
    suspend fun createUser(newUser: NewUserDTO)
    suspend fun deleteUser(username: String)
    suspend fun updateUser(username: String, updateUser: UpdateUserDTO)
}