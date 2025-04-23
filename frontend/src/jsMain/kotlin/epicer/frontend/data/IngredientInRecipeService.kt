package epicer.frontend.data

import epicer.common.dto.ingredient.CreateIngredientDTO
import epicer.common.dto.ingredient.FullIngredientDTO
import epicer.common.dto.ingredient.UpdateIngredientDTO
import epicer.common.dto.ingredientInRecipe.CreateIngredientInRecipeDTO
import epicer.common.dto.ingredientInRecipe.UpdateIngredientInRecipeDTO
import epicer.common.dto.recipe.FullIngredientInRecipeDTO
import epicer.frontend.backend_url
import kotlinx.browser.localStorage
import kotlinx.browser.window
import kotlinx.coroutines.await
import kotlinx.serialization.json.Json
import org.w3c.fetch.RequestInit
import kotlin.js.json

class IngredientInRecipeService {
    companion object {
        suspend fun createIngredientInRecipe(createIngredientInRecipeDTO: CreateIngredientInRecipeDTO): Boolean {
            return try {
                val token = localStorage.getItem("jwtToken") ?: return false

                val response = window.fetch(
                    "$backend_url/me/recipes/ingredients",
                    RequestInit(
                        method = "POST",
                        headers = json(
                            "Content-Type" to "application/json",
                            "Authorization" to "Bearer $token",
                        ),
                        body = Json.encodeToString(createIngredientInRecipeDTO)
                    )
                ).await()

                response.status.toInt() == 204 // HttpStatusCode.NoContent
            } catch (e: Exception) {
                console.error("Ingredient in recipe creation failed:", e)
                false
            }
        }
        suspend fun updateIngredientInRecipe(updateIngredientInRecipeDTO: UpdateIngredientInRecipeDTO): Boolean {
            return try {
                val token = localStorage.getItem("jwtToken") ?: return false

                val response = window.fetch(
                    "$backend_url/me/recipes/ingredients",
                    RequestInit(
                        method = "PUT",
                        headers = json(
                            "Content-Type" to "application/json",
                            "Authorization" to "Bearer $token",
                        ),
                        body = Json.encodeToString(updateIngredientInRecipeDTO)
                    )
                ).await()

                response.status.toInt() == 204 // HttpStatusCode.NoContent
            } catch (e: Exception) {
                console.error("Ingredient in recipe update failed:", e)
                false
            }
        }
        suspend fun deleteIngredientInRecipe(ingredientInRecipeId: Int, recipeId: Int): Boolean {
            return try {
                val token = localStorage.getItem("jwtToken") ?: return false

                val response = window.fetch(
                    "$backend_url/me/recipes/ingredients/$recipeId/$ingredientInRecipeId",
                    RequestInit(
                        method = "DELETE",
                        headers = json(
                            "Content-Type" to "application/json",
                            "Authorization" to "Bearer $token",
                        ),
                    )
                ).await()

                response.status.toInt() == 204 // HttpStatusCode.NoContent
            } catch (e: Exception) {
                console.error("Ingredient in recipe deletion failed:", e)
                false
            }
        }
        suspend fun getIngredientsInRecipe(recipeId: Int): List<FullIngredientInRecipeDTO>? {
            try {
                val token = localStorage.getItem("jwtToken") ?: return null

                val response = window.fetch(
                    "$backend_url/me/recipes/ingredients/$recipeId",
                    RequestInit(
                        method = "GET",
                        headers = json(
                            "Content-Type" to "application/json",
                            "Authorization" to "Bearer $token"
                        )
                    )
                ).await()

                if (response.status.toInt() == 200) {
                    val responseBody = response.text().await()

                    // Decode the response body into list of BaseRecipeDTO
                    return Json.decodeFromString<List<FullIngredientInRecipeDTO>>(responseBody)
                } else {
                    // Optionally log or handle errors
                    return null
                }
            } catch (e: Exception) {
                console.error("Failed to fetch ingredients in recipe", e)
                return null
            }
        }
    }
}