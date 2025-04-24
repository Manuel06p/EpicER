package epicer.frontend.data

import epicer.common.dto.ingredient.CreateIngredientDTO
import epicer.common.dto.ingredient.FullIngredientDTO
import epicer.common.dto.ingredient.UpdateIngredientDTO
import epicer.common.dto.ingredientInRecipe.CreateIngredientInRecipeDTO
import epicer.common.dto.ingredientInRecipe.UpdateIngredientInRecipeDTO
import epicer.common.dto.ingredientInRecipe.FullIngredientInRecipeDTO
import epicer.common.dto.section.CreateSectionDTO
import epicer.common.dto.section.UpdateSectionDTO
import epicer.frontend.backend_url
import kotlinx.browser.localStorage
import kotlinx.browser.window
import kotlinx.coroutines.await
import kotlinx.serialization.json.Json
import org.w3c.fetch.RequestInit
import kotlin.js.json

class SectionService {
    companion object {
        suspend fun createSection(createSectionDTO: CreateSectionDTO): Boolean {
            return try {
                val token = localStorage.getItem("jwtToken") ?: return false

                val response = window.fetch(
                    "$backend_url/me/recipes/sections",
                    RequestInit(
                        method = "POST",
                        headers = json(
                            "Content-Type" to "application/json",
                            "Authorization" to "Bearer $token",
                        ),
                        body = Json.encodeToString(createSectionDTO)
                    )
                ).await()

                response.status.toInt() == 204 // HttpStatusCode.NoContent
            } catch (e: Exception) {
                console.error("Section creation failed:", e)
                false
            }
        }

        suspend fun deleteSection(sectionId: Int): Boolean {
            return try {
                val token = localStorage.getItem("jwtToken") ?: return false

                val response = window.fetch(
                    "$backend_url/me/recipes/sections/$sectionId",
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
                console.error("Section deletion failed:", e)
                false
            }
        }

        suspend fun updateSection(updateSectionDTO: UpdateSectionDTO): Boolean {
            return try {
                val token = localStorage.getItem("jwtToken") ?: return false

                val response = window.fetch(
                    "$backend_url/me/recipes/sections",
                    RequestInit(
                        method = "PUT",
                        headers = json(
                            "Content-Type" to "application/json",
                            "Authorization" to "Bearer $token",
                        ),
                        body = Json.encodeToString(updateSectionDTO)
                    )
                ).await()

                response.status.toInt() == 204 // HttpStatusCode.NoContent
            } catch (e: Exception) {
                console.error("Section update failed:", e)
                false
            }
        }
    }
}