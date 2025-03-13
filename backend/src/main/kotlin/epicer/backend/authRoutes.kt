package epicer.backend

import com.auth0.jwt.JWT
import com.auth0.jwt.algorithms.Algorithm
import epicer.backend.dto.user.LoginUserDTO
import epicer.backend.utils.verifyPassword
import io.ktor.http.HttpStatusCode
import io.ktor.server.auth.authenticate
import io.ktor.server.request.receive
import io.ktor.server.response.respond
import io.ktor.server.routing.post
import java.util.Date
import epicer.backend.dto.user.*
import epicer.backend.service.`interface`.IUserService
import epicer.backend.utils.verifyPassword
import io.ktor.http.*
import io.ktor.serialization.*
import io.ktor.serialization.kotlinx.json.*
import io.ktor.server.application.*
import io.ktor.server.auth.authenticate
import io.ktor.server.plugins.contentnegotiation.*
import io.ktor.server.request.*
import io.ktor.server.response.*
import io.ktor.server.routing.*

fun Application.authRoutes(userService: IUserService) {
    routing {
        post("/login") {
            val loginUserDTO = call.receive<LoginUserDTO>()

            val user = userService.getFullUserByUsername(loginUserDTO.username)

            // Controllo credenziali
            if (user == null) {
                call.respond(HttpStatusCode.Unauthorized, "User doesn't exist")
                return@post
            } else if (!verifyPassword(loginUserDTO.password, user.hashed_password)) {
                call.respond(HttpStatusCode.Unauthorized, "Wrong password")
                return@post
            } else {
                // Generazione JWT
                val token = JWT.create()
                    .withIssuer("epicer-backend")
                    .withClaim("id", user.id)
                    .withClaim("username", user.username)
                    .withClaim("roles", user.roles) // Admin flag
                    .withExpiresAt(Date(System.currentTimeMillis() + 600000)) // Scadenza: 10 minuti
                    .sign(Algorithm.HMAC256("supersegreto"))

                call.respond(mapOf("token" to token))
            }
        }
    }
}