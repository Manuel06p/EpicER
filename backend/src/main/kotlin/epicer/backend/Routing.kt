package epicer.backend

import com.auth0.jwt.JWT
import com.auth0.jwt.algorithms.Algorithm
import epicer.backend.service.ImageService
import epicer.backend.service.IngredientService
import epicer.backend.service.RecipeService
import epicer.backend.service.RoleService
import epicer.backend.service.UnitService
import epicer.backend.service.UserService
import epicer.common.dto.user.LoginUserDTO
import epicer.common.dto.user.CreateUserDTO
import epicer.common.dto.user.UpdateUserDTO
import epicer.backend.utils.verifyPassword
import epicer.common.dto.TokenDTO
import epicer.common.administratorRole
import epicer.common.dto.ingredient.CreateIngredientDTO
import epicer.common.dto.unitType.UpdateUnitTypeDTO
import epicer.common.dto.user.BaseUserDTO
import epicer.common.maintainerRole
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




                call.respond(TokenDTO(token, BaseUserDTO(user.id, user.username, user.name, user.roles, user.created_at)))
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
        route("/ingredients") {
            authenticate("auth-jwt") {
                get {
                    val ingredients = IngredientService.getIngredients()
                    call.respond(HttpStatusCode.OK, ingredients)
                }
            }
        }
        route("/maintenance") {
            authenticate("auth-jwt") {
                withRoles(maintainerRole) {
                    route("units") {
                        get {
                            val units = UnitService.getUnits()
                            call.respond(HttpStatusCode.OK, units)
                        }
                    }
                    route("unit_types") {
                        get {
                            val unitTypes = UnitService.getUnitTypes()
                            call.respond(HttpStatusCode.OK, unitTypes)
                        }
                        patch() {
                            val updateUnitType = call.receive<UpdateUnitTypeDTO>()
                            UnitService.updateUnitType(updateUnitType)
                            call.respond(HttpStatusCode.NoContent)
                        }
                        route("/{unitTypeId}") {
                            delete() {
                                val unitTypeId = call.parameters["unitTypeId"]?.toIntOrNull()

                                if (unitTypeId != null) {
                                    UnitService.deleteUnitType(unitTypeId)
                                    call.respond(HttpStatusCode.NoContent)
                                }
                            }
                            get() {
                                val unitTypeId = call.parameters["unitTypeId"]?.toIntOrNull()
                                if (unitTypeId != null) {
                                    val unitTypeDTO = UnitService.getUnitTypeById(unitTypeId)
                                    if (unitTypeDTO != null) {
                                        call.respond(HttpStatusCode.OK, unitTypeDTO)
                                    } else {
                                        call.respond(HttpStatusCode.NotFound, "Unit type not found")
                                    }
                                }
                                call.respond(message = HttpStatusCode.BadRequest)
                            }
                            get("reference_units") {
                                val unitTypeId = call.parameters["unitTypeId"]?.toIntOrNull()
                                if (unitTypeId != null) {
                                    val unitsDTO = UnitService.getReferenceUnits(unitTypeId)
                                    call.respond(HttpStatusCode.OK, unitsDTO)
                                }
                                call.respond(message = HttpStatusCode.BadRequest)
                            }
                        }


                    }
                    route("/ingredients") {
                        post {
                            val createIngredientDTO = try {
                                call.receive<CreateIngredientDTO>()
                            } catch (e: Exception) {
                                call.respond(HttpStatusCode.BadRequest, "Invalid request body: ${e.message}")
                                return@post
                            }

                            val success = IngredientService.createIngredient(createIngredientDTO)

                            if (success) {
                                call.respond(HttpStatusCode.NoContent)
                            } else {
                                call.respond(HttpStatusCode.BadRequest, "Failed to create ingredient")
                            }
                        }
                        delete("/{ingredientId}") {
                            val ingredientId = call.parameters["ingredientId"]?.toIntOrNull()

                            if (ingredientId != null) {
                                IngredientService.deleteIngredient(ingredientId)
                                call.respond(HttpStatusCode.NoContent)
                            }
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
                        post {
                            try {
                                val newUser = call.receive<CreateUserDTO>()
                                UserService.createUser(newUser)
                                call.respond(HttpStatusCode.NoContent)
                            } catch (ex: IllegalStateException) {
                                call.respond(HttpStatusCode.BadRequest)
                            } catch (ex: JsonConvertException) {
                                call.respond(HttpStatusCode.BadRequest)
                            }
                        }
                        get("/{userId}") {
                            val userId = call.parameters["userId"]?.toIntOrNull()
                            if (userId != null) {
                                val baseUserDTO = UserService.getBaseUserById(userId)
                                if (baseUserDTO != null) {
                                    call.respond(HttpStatusCode.OK, baseUserDTO)
                                } else {
                                    call.respond(HttpStatusCode.NotFound, "User not found")
                                }
                            }
                            call.respond(message = HttpStatusCode.BadRequest)
                        }
                        delete("/{userId}") {
                            val userId = call.parameters["userId"]?.toIntOrNull()

                            if (userId != null) {
                                UserService.deleteUserById(userId)
                                call.respond(HttpStatusCode.NoContent)
                            }
                        }
                        patch() {
                            val updateUser = call.receive<UpdateUserDTO>()
                            UserService.updateUser(updateUser)
                            call.respond(HttpStatusCode.NoContent)
                        }
                    }
                    route("/roles") {
                        get {
                            val roles = RoleService.getRoles()
                            call.respond(HttpStatusCode.OK, roles)
                        }
                    }
                }
            }
        }
    }
}

