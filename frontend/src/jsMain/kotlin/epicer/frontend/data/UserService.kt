package epicer.frontend.data

import epicer.common.dto.role.RoleDTO
import epicer.common.dto.user.BaseUserDTO
import epicer.common.dto.user.CreateUserDTO
import epicer.common.dto.user.UpdateUserDTO
import epicer.frontend.backend_url
import kotlinx.browser.localStorage
import kotlinx.browser.window
import kotlinx.coroutines.await
import kotlinx.serialization.json.Json
import org.w3c.fetch.RequestInit
import kotlin.js.json

class UserService {
    companion object {
        suspend fun getUser(userId: Int): BaseUserDTO? {
            try {
                val token = localStorage.getItem("jwtToken") ?: return null

                val response = window.fetch(
                    "$backend_url/administration/users/$userId",
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

                    return Json.decodeFromString<BaseUserDTO>(responseBody)
                } else {
                    // Optionally log or handle errors
                    return null
                }
            } catch (e: Exception) {
                console.error("Failed to fetch the user", e)
                return null
            }
        }

        // Get all users base dto
        suspend fun getUsers(): List<BaseUserDTO>? {
            try {
                val token = localStorage.getItem("jwtToken") ?: return null

                val response = window.fetch(
                    "$backend_url/administration/users",
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
                    return Json.decodeFromString<List<BaseUserDTO>>(responseBody)
                } else {
                    // Optionally log or handle errors
                    return null
                }
            } catch (e: Exception) {
                console.error("Failed to fetch users", e)
                return null
            }
        }

        // Creates a new user
        suspend fun createUser(createUserDTO: CreateUserDTO): Boolean {
            return try {
                val token = localStorage.getItem("jwtToken") ?: return false

                val response = window.fetch(
                    "$backend_url/administration/users",
                    RequestInit(
                        method = "POST",
                        headers = json(
                            "Content-Type" to "application/json",
                            "Authorization" to "Bearer $token",
                        ),
                        body = Json.encodeToString(createUserDTO)
                    )
                ).await()

                response.status.toInt() == 204 // HttpStatusCode.NoContent
            } catch (e: Exception) {
                console.error("User registration failed:", e)
                false
            }
        }

        // Delete a user
        suspend fun deleteUser(userId: Int): Boolean {
            return try {
                val token = localStorage.getItem("jwtToken") ?: return false

                val response = window.fetch(
                    "$backend_url/administration/users/$userId",
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
                console.error("User deletion failed:", e)
                false
            }
        }

        // Updates a new user
        suspend fun updateUser(updateUserDTO: UpdateUserDTO): Boolean {
            return try {
                val token = localStorage.getItem("jwtToken") ?: return false

                val response = window.fetch(
                    "$backend_url/administration/users",
                    RequestInit(
                        method = "PATCH",
                        headers = json(
                            "Content-Type" to "application/json",
                            "Authorization" to "Bearer $token",
                        ),
                        body = Json.encodeToString(updateUserDTO)
                    )
                ).await()

                response.status.toInt() == 204 // HttpStatusCode.NoContent
            } catch (e: Exception) {
                console.error("User update failed:", e)
                false
            }
        }

        // Get all roles
        suspend fun getRoles(): List<RoleDTO>? {
            try {
                val token = localStorage.getItem("jwtToken") ?: return null

                val response = window.fetch(
                    "$backend_url/administration/roles",
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
                    return Json.decodeFromString<List<RoleDTO>>(responseBody)
                } else {
                    // Optionally log or handle errors
                    return null
                }
            } catch (e: Exception) {
                console.error("Failed to fetch roles", e)
                return null
            }
        }
    }
}