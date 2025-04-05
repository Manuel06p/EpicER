package epicer.frontend.data

import epicer.common.dto.TokenDTO
import epicer.common.dto.user.LoginUserDTO
import io.kvision.rest.RestClient
import io.kvision.rest.post
import io.kvision.rest.request
import kotlinx.browser.localStorage
import kotlinx.browser.window
import kotlinx.coroutines.await
import kotlinx.serialization.json.Json
import org.w3c.fetch.RequestInit
import kotlin.js.Promise
import kotlin.js.json

const val backend_url: String = "http://localhost:8080"


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
