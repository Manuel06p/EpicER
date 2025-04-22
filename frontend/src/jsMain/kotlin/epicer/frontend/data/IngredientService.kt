package epicer.frontend.data

import epicer.common.dto.ingredient.CreateIngredientDTO
import epicer.common.dto.ingredient.FullIngredientDTO
import epicer.common.dto.ingredient.UpdateIngredientDTO
import epicer.frontend.backend_url
import kotlinx.browser.localStorage
import kotlinx.browser.window
import kotlinx.coroutines.await
import kotlinx.serialization.json.Json
import org.w3c.fetch.RequestInit
import kotlin.js.json

class IngredientService {
    companion object {
        suspend fun updateIngredient(updateIngredientDTO: UpdateIngredientDTO): Boolean {
            return try {
                val token = localStorage.getItem("jwtToken") ?: return false

                val response = window.fetch(
                    "$backend_url/ingredients",
                    RequestInit(
                        method = "PATCH",
                        headers = json(
                            "Content-Type" to "application/json",
                            "Authorization" to "Bearer $token",
                        ),
                        body = Json.encodeToString(updateIngredientDTO)
                    )
                ).await()

                response.status.toInt() == 204 // HttpStatusCode.NoContent
            } catch (e: Exception) {
                console.error("Ingredient update failed:", e)
                false
            }
        }

        suspend fun getIngredients(): List<FullIngredientDTO>? {
            try {
                val token = localStorage.getItem("jwtToken") ?: return null

                val response = window.fetch(
                    "$backend_url/ingredients",
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
                    return Json.decodeFromString<List<FullIngredientDTO>>(responseBody)
                } else {
                    // Optionally log or handle errors
                    return null
                }
            } catch (e: Exception) {
                console.error("Failed to fetch ingredients", e)
                return null
            }
        }

        // Get unit type by id
        suspend fun getIngredient(ingredientId: Int): FullIngredientDTO? {
            try {
                val token = localStorage.getItem("jwtToken") ?: return null

                val response = window.fetch(
                    "$backend_url/ingredients/$ingredientId",
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

                    return Json.decodeFromString<FullIngredientDTO>(responseBody)
                } else {
                    // Optionally log or handle errors
                    return null
                }
            } catch (e: Exception) {
                console.error("Failed to fetch the ingredient", e)
                return null
            }
        }

        suspend fun createIngredient(createIngredientDTO: CreateIngredientDTO): Boolean {
            return try {
                val token = localStorage.getItem("jwtToken") ?: return false

                val response = window.fetch(
                    "$backend_url/ingredients",
                    RequestInit(
                        method = "POST",
                        headers = json(
                            "Content-Type" to "application/json",
                            "Authorization" to "Bearer $token",
                        ),
                        body = Json.encodeToString(createIngredientDTO)
                    )
                ).await()

                response.status.toInt() == 204 // HttpStatusCode.NoContent
            } catch (e: Exception) {
                console.error("Ingredient registration failed:", e)
                false
            }
        }

        suspend fun deleteIngredient(ingredientId: Int): Boolean {
            return try {
                val token = localStorage.getItem("jwtToken") ?: return false

                val response = window.fetch(
                    "$backend_url/ingredients/$ingredientId",
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
                console.error("Ingredient deletion failed:", e)
                false
            }
        }
    }
}