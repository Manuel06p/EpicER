package epicer.backend

import com.auth0.jwt.JWT
import com.auth0.jwt.algorithms.Algorithm
import epicer.backend.service.ImageService
import epicer.backend.service.RecipeService
import epicer.backend.service.UserService
import epicer.common.dto.user.LoginUserDTO
import epicer.common.dto.user.NewUserDTO
import epicer.common.dto.user.UpdateUserDTO
import epicer.backend.utils.verifyPassword
import epicer.common.dto.TokenDTO
import epicer.common.dto.administratorRole
import epicer.common.dto.user.BaseUserDTO
import io.ktor.http.*
import io.ktor.serialization.JsonConvertException
import io.ktor.server.application.*
import io.ktor.server.auth.authenticate
import io.ktor.server.auth.jwt.JWTPrincipal
import io.ktor.server.auth.principal
import io.ktor.server.http.content.staticFiles
import io.ktor.server.request.*
import io.ktor.server.response.respond
import io.ktor.server.response.respondFile
import io.ktor.server.routing.*
import java.io.File
import java.util.Date


fun Application.configureRouting() {

    routing {


        post("/login") {
            val loginUserDTO = call.receive<LoginUserDTO>()

            val user = UserService.getFullUserByUsername(loginUserDTO.username)

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




                call.respond(TokenDTO(token, BaseUserDTO(user.username, user.name, user.roles, user.created_at)))
            }
        }
        route("/images") {
            authenticate("auth-jwt") {
                get("/{imageId}") {
                    val principal = call.principal<JWTPrincipal>()
                    val userId = principal?.payload?.getClaim("id")?.asInt()

                    val imageId = call.parameters["imageId"]?.toIntOrNull()

                    if (imageId == null || userId == null) {
                        call.respond(HttpStatusCode.BadRequest)
                        return@get
                    }

                    val imageFile = ImageService.getAccessibleImageById(imageId, userId)
                    if (imageFile == null || !imageFile.exists()) {
                        call.respond(HttpStatusCode.NotFound)
                        return@get
                    }

                    call.respondFile(imageFile)
                }
            }
        }

        route("/recipes") {
            authenticate("auth-jwt") {
                get("/{id}") {
                    val principal = call.principal<JWTPrincipal>()
                    val userId = principal?.payload?.getClaim("id")?.asInt()

                    val recipeId = call.parameters["id"]?.toIntOrNull()

                    if (recipeId != null && userId != null) {
                        val recipe = RecipeService.getAccessibleRecipeById(recipeId, userId)
                        if (recipe != null) {
                            call.respond(HttpStatusCode.OK, recipe)
                        }
                    }
                    call.respond(HttpStatusCode.NoContent)
                }
            }
        }
        route("/me") {
            authenticate("auth-jwt") {
                staticFiles("/images", File("uploads/images/"))
                get {
                    call.respond(HttpStatusCode.OK)
                }

                route("/recipes") {
                    get() {
                        val principal = call.principal<JWTPrincipal>()
                        val userId = principal?.payload?.getClaim("id")?.asInt()
                        if (userId != null) {
                            val recipes = RecipeService.getBaseRecipesById(userId)
                            call.respond(recipes)
                        } else {
                            call.respond(HttpStatusCode.BadRequest)
                        }
                    }
                }

                route("/user") {
                    get() {
                        val principal = call.principal<JWTPrincipal>()
                        val userId = principal?.payload?.getClaim("id")?.asInt()

                        if (userId != null) {
                            val baseUserDTO = UserService.getBaseUserById(userId)
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
                            UserService.updateUserById(userId, updateUser)
                            call.respond(HttpStatusCode.NoContent)
                        }
                    }
                    delete() {
                        val principal = call.principal<JWTPrincipal>()
                        val userId = principal?.payload?.getClaim("id")?.asInt()

                        if (userId != null) {
                            UserService.deleteUserById(userId)
                            call.respond(HttpStatusCode.NoContent)
                        }
                    }
                }

            }
        }
        route("/administration") {
            authenticate("auth-jwt") {
                withRoles(administratorRole) {
                    route("/users") {
                        get {
                            val users = UserService.getBaseUsers()
                            call.respond(HttpStatusCode.OK, users)
                        }
                    }
                }
            }
        }
        route("/users") {
            authenticate("auth-jwt") {
                withRoles("administrator") {

                }
            }

            post {
                try {
                    val newUser = call.receive<NewUserDTO>()
                    UserService.createUser(newUser)
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

