package epicer.backend.service.`interface`

import epicer.common.dto.recipe.BaseRecipeDTO
import epicer.common.dto.user.BaseUserDTO
import epicer.common.dto.user.FullUserDTO
import epicer.common.dto.user.NewUserDTO
import epicer.common.dto.user.UpdateUserDTO
import epicer.common.dto.user.UserDTO

interface IRecipeService {
    suspend fun getBaseRecipesById(id: Int): List<BaseRecipeDTO>
    suspend fun getRecipeById(id: Int): BaseRecipeDTO?
}