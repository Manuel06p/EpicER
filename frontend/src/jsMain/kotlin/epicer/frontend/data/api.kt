package epicer.frontend.data

import epicer.common.dto.TokenDTO
import epicer.common.dto.recipe.BaseRecipeDTO
import epicer.common.dto.recipe.FullRecipeDTO
import epicer.common.dto.role.RoleDTO
import epicer.common.dto.user.BaseUserDTO
import epicer.common.dto.user.LoginUserDTO
import epicer.common.dto.user.NewUserDTO
import epicer.common.dto.user.UpdateUserDTO
import epicer.frontend.backend_url
import io.kvision.remote.HttpMethod
import kotlinx.browser.localStorage
import kotlinx.browser.window
import kotlinx.coroutines.await
import kotlinx.serialization.json.Json
import org.w3c.dom.url.URL
import org.w3c.fetch.RequestInit
import kotlin.js.json



//private val restClient = RestClient()

//// RestClient version, more limited
//suspend fun login(loginUserDTO: LoginUserDTO): TokenDTO? {
//    return restClient.post<TokenDTO, LoginUserDTO>(
//        "$backend_url/login",
//        data = loginUserDTO
//    ).await()
//}

// Working fetch version with more options available on the response
suspend fun login(loginUserDTO: LoginUserDTO): TokenDTO? {
    try {
        val response = window.fetch(
            "$backend_url/login",
            RequestInit(
                method = "POST",
                headers = json(
                    "Content-Type" to "application/json"
                ),
                body = Json.encodeToString(loginUserDTO)
            )
        ).await()

        if (response.status.toInt() == 200) {
            val responseBody = response.text().await()

            // Decode the response body into TokenDTO
            val tokenDTO = Json.decodeFromString<TokenDTO>(responseBody)
            return tokenDTO
        } else {
            return null
        }
    } catch (e: Exception) {
        return null
    }
}

suspend fun getRecipe(recipeId: Int): FullRecipeDTO? {
    try {
        val token = localStorage.getItem("jwtToken") ?: return null

        val response = window.fetch(
            "$backend_url/recipes/$recipeId",
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

            return Json.decodeFromString<FullRecipeDTO>(responseBody)
        } else {
            // Optionally log or handle errors
            return null
        }
    } catch (e: Exception) {
        console.error("Failed to fetch recipes", e)
        return null
    }
}

suspend fun getMyRecipes(): List<BaseRecipeDTO>? {
    try {
        val token = localStorage.getItem("jwtToken") ?: return null

        val response = window.fetch(
            "$backend_url/me/recipes",
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
            return Json.decodeFromString<List<BaseRecipeDTO>>(responseBody)
        } else {
            // Optionally log or handle errors
            return null
        }
    } catch (e: Exception) {
        console.error("Failed to fetch recipes", e)
        return null
    }
}




suspend fun isLogged(): Boolean {
    try {
        val token = localStorage.getItem("jwtToken") ?: return false

        val response = window.fetch(
            "$backend_url/me",
            RequestInit(
                method = "GET",
                headers = json(
                    "Content-Type" to "application/json",
                    "Authorization" to "Bearer $token"
                )
            )
        ).await()

        return response.status.toInt() == 200
    } catch (e: Exception) {
        return false
    }
}

suspend fun getImage(imageId: Int?): String? {
    try {
        // Get the JWT token from local storage
        val token = localStorage.getItem("jwtToken") ?: return null

        // Send the request to fetch the image from the backend
        val response = window.fetch(
            "$backend_url/images/$imageId",  // Ensure the imageId is part of the URL
            RequestInit(
                method = "GET",
                headers = json(
                    "Authorization" to "Bearer $token"
                )
            )
        ).await()

        // If the response status is OK, convert the response to a Blob (binary data)
        if (response.status.toInt() == 200) {
            val blob = response.blob().await()

            // Create a URL for the image blob that can be used in an <img> tag
            return URL.createObjectURL(blob)
        } else {
            // Handle the case where the image is not found or an error occurs
            return null
        }
    } catch (e: Exception) {
        console.error("Failed to fetch image", e)
        return null
    }
}

//
// ADMINISTRATION
//

// Get user by id
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
suspend fun createUser(newUserDTO: NewUserDTO): Boolean {
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
                body = Json.encodeToString(newUserDTO)
            )
        ).await()

        response.status.toInt() == 204 // HttpStatusCode.NoContent
    } catch (e: Exception) {
        console.error("User registration failed:", e)
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