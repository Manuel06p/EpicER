package epicer.backend.service.`interface`

import epicer.common.dto.recipe.BaseRecipeDTO
import epicer.common.dto.user.BaseUserDTO
import epicer.common.dto.user.FullUserDTO
import epicer.common.dto.user.NewUserDTO
import epicer.common.dto.user.UpdateUserDTO
import epicer.common.dto.user.UserDTO

interface IUserService {
    suspend fun getBaseUsers(): List<BaseUserDTO>
    suspend fun getBaseUserById(id: Int): BaseUserDTO?
    suspend fun getUserByUsername(username: String): UserDTO?
    suspend fun getFullUserByUsername(username: String): FullUserDTO?
    suspend fun createUser(newUser: NewUserDTO)
    suspend fun deleteUserById(id: Int)
    suspend fun updateUserById(id: Int, updateUser: UpdateUserDTO)
}