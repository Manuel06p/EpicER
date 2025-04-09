package epicer.backend.service.`interface`

import epicer.common.dto.recipe.BaseRecipeDTO
import epicer.common.dto.recipe.FullRecipeDTO

interface IRecipeService {
    suspend fun getBaseRecipesById(id: Int): List<BaseRecipeDTO>
    suspend fun getAccessibleRecipeById(recipeId: Int, userId: Int): FullRecipeDTO?
}