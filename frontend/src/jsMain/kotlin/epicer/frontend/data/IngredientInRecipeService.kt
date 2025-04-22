package epicer.frontend.data

import epicer.common.dto.ingredient.CreateIngredientDTO
import epicer.common.dto.ingredientInRecipe.CreateIngredientInRecipeDTO
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
    }
}