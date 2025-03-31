package epicer.backend

import com.auth0.jwt.JWT
import com.auth0.jwt.algorithms.Algorithm
import epicer.common.dto.user.LoginUserDTO
import epicer.common.dto.user.NewUserDTO
import epicer.common.dto.user.UpdateUserDTO
import epicer.backend.service.`interface`.IUserService
import epicer.backend.utils.verifyPassword
import io.ktor.http.*
import io.ktor.serialization.JsonConvertException
import io.ktor.server.application.*
import io.ktor.server.auth.authenticate
import io.ktor.server.auth.jwt.JWTPrincipal
import io.ktor.server.auth.principal
import io.ktor.server.request.*
import io.ktor.server.response.respond
import io.ktor.server.routing.*
import java.util.Date


fun Application.configureRouting(userService: IUserService) {
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

        route("/me") {
            authenticate("auth-jwt") {
                route("/user") {
                    get() {
                        val principal = call.principal<JWTPrincipal>()
                        val userId = principal?.payload?.getClaim("id")?.asInt()

                        if (userId != null) {
                            val baseUserDTO = userService.getBaseUserById(userId)
                            if (baseUserDTO != null) {
                                call.respond(HttpStatusCode.OK, baseUserDTO)
                            } else {
                                call.respond(HttpStatusCode.NotFound, "User not found")
                            }
                        }
                    }
                    patch() {
                        val principal = call.principal<JWTPrincipal>()
                        val userId = principal?.payload?.getClaim("id")?.asInt()

                        val updateUser = call.receive<UpdateUserDTO>()

                        if (userId != null) {
                            userService.updateUserById(userId, updateUser)
                            call.respond(HttpStatusCode.NoContent)
                        }
                    }
                    delete() {
                        val principal = call.principal<JWTPrincipal>()
                        val userId = principal?.payload?.getClaim("id")?.asInt()

                        if (userId != null) {
                            userService.deleteUserById(userId)
                            call.respond(HttpStatusCode.NoContent)
                        }
                    }
                }

            }
        }
        route("/users") {
            authenticate("auth-jwt") {
                withRoles("administrator") {
                    get {
                        val users = userService.getBaseUsers()
                        call.respond(HttpStatusCode.OK, users)
                    }
                }
            }

            post {
                try {
                    val newUser = call.receive<NewUserDTO>()
                    userService.createUser(newUser)
                    call.respond(HttpStatusCode.NoContent)
                } catch (ex: IllegalStateException) {
                    call.respond(HttpStatusCode.BadRequest)
                } catch (ex: JsonConvertException) {
                    call.respond(HttpStatusCode.BadRequest)
                }
            }
        }
    }
}

