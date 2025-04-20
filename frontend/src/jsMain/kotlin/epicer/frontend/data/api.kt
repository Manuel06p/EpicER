package epicer.frontend.data

import epicer.common.dto.TokenDTO
import epicer.common.dto.ingredient.CreateIngredientDTO
import epicer.common.dto.recipe.BaseRecipeDTO
import epicer.common.dto.ingredient.FullIngredientDTO
import epicer.common.dto.recipe.FullRecipeDTO
import epicer.common.dto.role.RoleDTO
import epicer.common.dto.unit.BaseUnitDTO
import epicer.common.dto.unit.FullUnitDTO
import epicer.common.dto.unitType.CreateUnitTypeDTO
import epicer.common.dto.unitType.UnitTypeDTO
import epicer.common.dto.unitType.UpdateUnitTypeDTO
import epicer.common.dto.user.BaseUserDTO
import epicer.common.dto.user.LoginUserDTO
import epicer.common.dto.user.CreateUserDTO
import epicer.common.dto.user.UpdateUserDTO
import epicer.frontend.backend_url
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
                body = Json.encodeToString(userId)
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

//
// Ingredients
//

// Get all users base dto
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

suspend fun createIngredient(createIngredientDTO: CreateIngredientDTO): Boolean {
    return try {
        val token = localStorage.getItem("jwtToken") ?: return false

        val response = window.fetch(
            "$backend_url/maintenance/ingredients",
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
            "$backend_url/maintenance/ingredients/$ingredientId",
            RequestInit(
                method = "DELETE",
                headers = json(
                    "Content-Type" to "application/json",
                    "Authorization" to "Bearer $token",
                ),
                body = Json.encodeToString(ingredientId)
            )
        ).await()

        response.status.toInt() == 204 // HttpStatusCode.NoContent
    } catch (e: Exception) {
        console.error("Ingredient deletion failed:", e)
        false
    }
}

//
// Unit
//
suspend fun getUnits(): List<FullUnitDTO>? {
    try {
        val token = localStorage.getItem("jwtToken") ?: return null

        val response = window.fetch(
            "$backend_url/maintenance/units",
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
            return Json.decodeFromString<List<FullUnitDTO>>(responseBody)
        } else {
            // Optionally log or handle errors
            return null
        }
    } catch (e: Exception) {
        console.error("Failed to fetch units", e)
        return null
    }
}

suspend fun getUnitTypes(): List<UnitTypeDTO>? {
    try {
        val token = localStorage.getItem("jwtToken") ?: return null

        val response = window.fetch(
            "$backend_url/maintenance/unit_types",
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
            return Json.decodeFromString<List<UnitTypeDTO>>(responseBody)
        } else {
            // Optionally log or handle errors
            return null
        }
    } catch (e: Exception) {
        console.error("Failed to fetch unit types", e)
        return null
    }
}

suspend fun deleteUnitType(unitTypeId: Int): Boolean {
    return try {
        val token = localStorage.getItem("jwtToken") ?: return false

        val response = window.fetch(
            "$backend_url/maintenance/unit_types/$unitTypeId",
            RequestInit(
                method = "DELETE",
                headers = json(
                    "Content-Type" to "application/json",
                    "Authorization" to "Bearer $token",
                ),
                body = Json.encodeToString(unitTypeId)
            )
        ).await()

        response.status.toInt() == 204 // HttpStatusCode.NoContent
    } catch (e: Exception) {
        console.error("Unit type deletion failed:", e)
        false
    }
}

// Get unit type by id
suspend fun getUnitType(unitTypeId: Int): UnitTypeDTO? {
    try {
        val token = localStorage.getItem("jwtToken") ?: return null

        val response = window.fetch(
            "$backend_url/maintenance/unit_types/$unitTypeId",
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

            return Json.decodeFromString<UnitTypeDTO>(responseBody)
        } else {
            // Optionally log or handle errors
            return null
        }
    } catch (e: Exception) {
        console.error("Failed to fetch the unit type", e)
        return null
    }
}

suspend fun getReferenceUnits(unitTypeId: Int): List<BaseUnitDTO>? {
    try {
        val token = localStorage.getItem("jwtToken") ?: return null

        val response = window.fetch(
            "$backend_url/maintenance/unit_types/$unitTypeId/reference_units",
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
            return Json.decodeFromString<List<BaseUnitDTO>>(responseBody)
        } else {
            // Optionally log or handle errors
            return null
        }
    } catch (e: Exception) {
        console.error("Failed to fetch reference units", e)
        return null
    }
}

suspend fun updateUnitType(updateUnitTypeDTO: UpdateUnitTypeDTO): Boolean {
    return try {
        val token = localStorage.getItem("jwtToken") ?: return false

        val response = window.fetch(
            "$backend_url/maintenance/unit_types",
            RequestInit(
                method = "PATCH",
                headers = json(
                    "Content-Type" to "application/json",
                    "Authorization" to "Bearer $token",
                ),
                body = Json.encodeToString(updateUnitTypeDTO)
            )
        ).await()

        response.status.toInt() == 204 // HttpStatusCode.NoContent
    } catch (e: Exception) {
        console.error("Unit type update failed:", e)
        false
    }
}

suspend fun createUnitType(createUnitTypeDTO: CreateUnitTypeDTO): Boolean {
    return try {
        val token = localStorage.getItem("jwtToken") ?: return false

        val response = window.fetch(
            "$backend_url/maintenance/unit_types",
            RequestInit(
                method = "POST",
                headers = json(
                    "Content-Type" to "application/json",
                    "Authorization" to "Bearer $token",
                ),
                body = Json.encodeToString(createUnitTypeDTO)
            )
        ).await()

        response.status.toInt() == 204 // HttpStatusCode.NoContent
    } catch (e: Exception) {
        console.error("Unit type creation failed:", e)
        false
    }
}
