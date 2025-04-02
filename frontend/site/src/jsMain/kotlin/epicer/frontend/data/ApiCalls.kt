package epicer.frontend.data

import com.varabyte.kobweb.browser.api
import com.varabyte.kobweb.browser.http.fetch
import com.varabyte.kobweb.browser.http.http
import epicer.common.dto.TokenDTO
import epicer.common.dto.user.BaseUserDTO
import epicer.common.dto.user.LoginUserDTO
import kotlinx.browser.localStorage
import kotlinx.browser.window
import kotlinx.coroutines.await
import kotlinx.serialization.json.Json
import kotlinx.serialization.json.jsonObject
import org.w3c.fetch.Headers
import org.w3c.fetch.RequestInit
import kotlin.js.json
import kotlin.math.log

const val backend_url: String = "http://localhost:8080/"

suspend fun login(loginUserDTO: LoginUserDTO): TokenDTO? {
    val response = window.http.tryPost(
        resource = backend_url + "login",
        headers = mapOf("Content-Type" to "application/json"),
        body = Json.encodeToString(loginUserDTO).encodeToByteArray()
    )?.decodeToString().toString()

    try {
        val tokenDTO = Json.decodeFromString<TokenDTO>(response)
        return tokenDTO
    } catch (e: Exception) {
        return null
    }
}

suspend fun isLogged(): Boolean {
    val token = localStorage.getItem("jwtToken") ?: return false

    try {
        val response = window.fetch(
            backend_url + "me",
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
        println("Error checking login status: ${e.message}")
    }

    return false
}



suspend fun getMyBaseUserDTO(): BaseUserDTO? {
    val token = localStorage.getItem("jwtToken") ?: return null

    val response = window.http.tryGet(
        resource = backend_url + "me/user",
        headers = mapOf(
            "Content-Type" to "application/json",
            "Authorization" to "Bearer $token",
        ),

    )?.decodeToString().toString()

    try {
        val baseUserDTO = Json.decodeFromString<BaseUserDTO>(response)
        return baseUserDTO
    } catch (e: Exception) {
        return null
    }
}