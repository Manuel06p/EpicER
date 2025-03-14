package epicer.backend

import epicer.backend.dto.user.NewUserDTO
import epicer.backend.dto.user.UpdateUserDTO
import epicer.backend.service.`interface`.IUserService
import io.ktor.http.*
import io.ktor.serialization.*
import io.ktor.serialization.kotlinx.json.*
import io.ktor.server.application.*
import io.ktor.server.auth.*
import io.ktor.server.auth.jwt.JWTPrincipal
import io.ktor.server.plugins.contentnegotiation.*
import io.ktor.server.request.*
import io.ktor.server.response.*
import io.ktor.server.routing.*

fun Application.configureSerialization(userService: IUserService) {
    install(ContentNegotiation) {
        json()

    }
    routing {
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