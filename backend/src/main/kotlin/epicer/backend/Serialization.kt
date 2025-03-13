package epicer.backend

import epicer.backend.dto.user.NewUserDTO
import epicer.backend.dto.user.UpdateUserDTO
import epicer.backend.service.`interface`.IUserService
import io.ktor.http.*
import io.ktor.serialization.*
import io.ktor.serialization.kotlinx.json.*
import io.ktor.server.application.*
import io.ktor.server.auth.*
import io.ktor.server.plugins.contentnegotiation.*
import io.ktor.server.request.*
import io.ktor.server.response.*
import io.ktor.server.routing.*

fun Application.configureSerialization(userService: IUserService) {
    install(ContentNegotiation) {
        json()

    }
    routing {
        route("/users") {
            authenticate("auth-jwt") {
                withRoles("administrator") {
                    get {
                        val users = userService.getUsers()
                        call.respond(HttpStatusCode.OK, users)
                    }

                    get("/{username}") {
                        val username = call.parameters["username"]  // Get the username from the path parameter
                        if (username != null) {
                            println(username)
                            val user = userService.getFullUserByUsername(username)  // Get user by username
                            if (user != null) {
                                print(user)
                                call.respond(HttpStatusCode.OK, user)
                            } else {
                                call.respond(HttpStatusCode.NotFound, "User not found")
                            }
                        } else {
                            call.respond(HttpStatusCode.BadRequest, "Username parameter is missing")
                        }
                    }
                }

                delete("/{username}") {
                    val username = call.parameters["username"]
                    if (username != null) {
                        userService.deleteUser(username)
                        call.respond(HttpStatusCode.NoContent)
                    } else {
                        call.respond(HttpStatusCode.BadRequest, "Username parameter is missing")
                    }
                }

                patch("/{username}") {
                    val updateUsername = call.parameters["username"]
                    val updateUser = call.receive<UpdateUserDTO>()
                    println(updateUser)
                    if (updateUsername != null) {
                        userService.updateUser(updateUsername, updateUser)
                        call.respond(HttpStatusCode.NoContent)
                    } else {
                        call.respond(HttpStatusCode.BadRequest, "Username parameter is missing")
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