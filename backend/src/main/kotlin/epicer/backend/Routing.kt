package epicer.backend

import com.auth0.jwt.JWT
import com.auth0.jwt.algorithms.Algorithm
import epicer.backend.service.ImageService
import epicer.backend.service.IngredientInRecipeService
import epicer.backend.service.IngredientInRecipeService.Companion.getIngredientsInRecipe
import epicer.backend.service.IngredientService
import epicer.backend.service.RecipeService
import epicer.backend.service.RoleService
import epicer.backend.service.SectionService
import epicer.backend.service.StepService
import epicer.backend.service.UnitService
import epicer.backend.service.UnitTypeService
import epicer.backend.service.UserService
import epicer.common.dto.user.LoginUserDTO
import epicer.common.dto.user.CreateUserDTO
import epicer.common.dto.user.UpdateUserDTO
import epicer.backend.utils.verifyPassword
import epicer.common.dto.TokenDTO
import epicer.common.administratorRole
import epicer.common.dto.ingredient.CreateIngredientDTO
import epicer.common.dto.ingredient.UpdateIngredientDTO
import epicer.common.dto.ingredientInRecipe.CreateIngredientInRecipeDTO
import epicer.common.dto.ingredientInRecipe.UpdateIngredientInRecipeDTO
import epicer.common.dto.recipe.CreateRecipeDTO
import epicer.common.dto.recipe.UpdateRecipeDTO
import epicer.common.dto.section.CreateSectionDTO
import epicer.common.dto.section.UpdateSectionDTO
import epicer.common.dto.step.CreateStepDTO
import epicer.common.dto.step.UpdateStepDTO
import epicer.common.dto.unit.CreateUnitDTO
import epicer.common.dto.unit.UpdateUnitDTO
import epicer.common.dto.unitType.CreateUnitTypeDTO
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
                    patch() {
                        val principal = call.principal<JWTPrincipal>()
                        val userId = principal?.payload?.getClaim("id")?.asInt()
                        val updateRecipe = call.receive<UpdateRecipeDTO>()
                        if (userId != null) {
                            RecipeService.updateRecipe(updateRecipe, userId)
                            call.respond(HttpStatusCode.NoContent)
                        }
                        call.respond(HttpStatusCode.BadRequest)
                    }
                    route("/{recipeId}") {
                        delete {
                            val recipeId = call.parameters["recipeId"]?.toIntOrNull()

                            val principal = call.principal<JWTPrincipal>()
                            val userId = principal?.payload?.getClaim("id")?.asInt()

                            if (userId != null && recipeId != null) {
                                RecipeService.deleteRecipe(
                                    recipeId = recipeId,
                                    owner = userId,
                                )
                                call.respond(HttpStatusCode.NoContent)
                            }
                        }
                    }
                    route("/ingredients") {
                        put {
                            val principal = call.principal<JWTPrincipal>()
                            val userId = principal?.payload?.getClaim("id")?.asInt()
                            if (userId != null) {
                                val updateIngredientInRecipe = call.receive<UpdateIngredientInRecipeDTO>()
                                IngredientInRecipeService.updateIngredientInRecipe(updateIngredientInRecipe, userId)
                                call.respond(HttpStatusCode.NoContent)
                            }
                            call.respond(HttpStatusCode.BadRequest)
                        }
                        route("/{recipeId}") {
                            get() {
                                val recipeId = call.parameters["recipeId"]?.toIntOrNull()
                                val principal = call.principal<JWTPrincipal>()
                                val userId = principal?.payload?.getClaim("id")?.asInt()

                                if (recipeId != null && userId != null) {
                                    val ingredientsInRecipe = getIngredientsInRecipe(recipeId, userId)
                                    call.respond(HttpStatusCode.OK, ingredientsInRecipe)
                                }
                                call.respond(message = HttpStatusCode.BadRequest)
                            }
                            route("/{ingredientInRecipeId}") {
                                delete {
                                    val recipeId = call.parameters["recipeId"]?.toIntOrNull()
                                    val ingredientInRecipeId = call.parameters["ingredientInRecipeId"]?.toIntOrNull()

                                    val principal = call.principal<JWTPrincipal>()
                                    val userId = principal?.payload?.getClaim("id")?.asInt()

                                    if (userId != null && recipeId != null && ingredientInRecipeId != null) {
                                        IngredientInRecipeService.deleteIngredientInRecipe(
                                            ingredientInRecipeId,
                                            recipeId,
                                            userId
                                        )
                                        call.respond(HttpStatusCode.NoContent)
                                    }
                                }

                            }
                        }
                        post {
                            try {
                                val principal = call.principal<JWTPrincipal>()
                                val userId = principal?.payload?.getClaim("id")?.asInt()

                                val createIngredientInRecipeDTO = call.receive<CreateIngredientInRecipeDTO>()
                                if (userId != null) {
                                    IngredientInRecipeService.createIngredientInRecipe(
                                        createIngredientInRecipeDTO,
                                        userId
                                    )
                                } else {
                                    call.respond(HttpStatusCode.BadRequest)
                                }

                                call.respond(HttpStatusCode.NoContent)
                            } catch (ex: IllegalStateException) {
                                call.respond(HttpStatusCode.BadRequest)
                            } catch (ex: JsonConvertException) {
                                call.respond(HttpStatusCode.BadRequest)
                            }
                        }
                    }
                    route("/sections") {
                        post {
                            try {
                                val principal = call.principal<JWTPrincipal>()
                                val userId = principal?.payload?.getClaim("id")?.asInt()

                                val createSectionDTO = call.receive<CreateSectionDTO>()
                                if (userId != null) {
                                    SectionService.createSection(createSectionDTO, userId)
                                } else {
                                    call.respond(HttpStatusCode.BadRequest)
                                }

                                call.respond(HttpStatusCode.NoContent)
                            } catch (ex: IllegalStateException) {
                                call.respond(HttpStatusCode.BadRequest)
                            } catch (ex: JsonConvertException) {
                                call.respond(HttpStatusCode.BadRequest)
                            }
                        }
                        put {
                            val principal = call.principal<JWTPrincipal>()
                            val userId = principal?.payload?.getClaim("id")?.asInt()
                            if (userId != null) {
                                val updateSectionDTO = call.receive<UpdateSectionDTO>()
                                SectionService.updateSection(updateSectionDTO, userId)
                                call.respond(HttpStatusCode.NoContent)
                            }
                            call.respond(HttpStatusCode.BadRequest)
                        }
                        route("/{sectionId}") {
                            delete {
                                val sectionId = call.parameters["sectionId"]?.toIntOrNull()

                                val principal = call.principal<JWTPrincipal>()
                                val userId = principal?.payload?.getClaim("id")?.asInt()

                                if (userId != null && sectionId != null) {
                                    SectionService.deleteSection(
                                        sectionId = sectionId,
                                        owner = userId
                                    )
                                    call.respond(HttpStatusCode.NoContent)
                                }
                            }

                        }
                    }
                    route("/steps") {
                        post {
                            try {
                                val principal = call.principal<JWTPrincipal>()
                                val userId = principal?.payload?.getClaim("id")?.asInt()

                                val createStepDTO = call.receive<CreateStepDTO>()
                                if (userId != null) {
                                    StepService.createStep(createStepDTO, userId)
                                } else {
                                    call.respond(HttpStatusCode.BadRequest)
                                }

                                call.respond(HttpStatusCode.NoContent)
                            } catch (ex: IllegalStateException) {
                                call.respond(HttpStatusCode.BadRequest)
                            } catch (ex: JsonConvertException) {
                                call.respond(HttpStatusCode.BadRequest)
                            }
                        }
                        put {
                            val principal = call.principal<JWTPrincipal>()
                            val userId = principal?.payload?.getClaim("id")?.asInt()
                            if (userId != null) {
                                val updateStepDTO = call.receive<UpdateStepDTO>()
                                StepService.updateStep(updateStepDTO, userId)
                                call.respond(HttpStatusCode.NoContent)
                            }
                            call.respond(HttpStatusCode.BadRequest)
                        }
                        route("/{stepId}") {
                            delete {
                                val stepId = call.parameters["stepId"]?.toIntOrNull()

                                val principal = call.principal<JWTPrincipal>()
                                val userId = principal?.payload?.getClaim("id")?.asInt()

                                if (userId != null && stepId != null) {
                                    StepService.deleteStep(
                                        stepId = stepId,
                                        owner = userId
                                    )
                                    call.respond(HttpStatusCode.NoContent)
                                }
                            }
                        }
                    }
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
                    post {
                        val createRecipeDTO = try {
                            call.receive<CreateRecipeDTO>()
                        } catch (e: Exception) {
                            call.respond(HttpStatusCode.BadRequest, "Invalid request body: ${e.message}")
                            return@post
                        }
                        val principal = call.principal<JWTPrincipal>()
                        val userId = principal?.payload?.getClaim("id")?.asInt()
                        if (userId != null) {
                            RecipeService.createRecipe(createRecipeDTO, userId)
                            call.respond(HttpStatusCode.NoContent)
                        }
                        call.respond(HttpStatusCode.BadRequest, "Failed to create ingredient")

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
                withRoles(maintainerRole) {
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
                    patch() {
                        val updateIngredient = call.receive<UpdateIngredientDTO>()
                        IngredientService.updateIngredient(updateIngredient)
                        call.respond(HttpStatusCode.NoContent)
                    }
                    route("/{ingredientId}") {
                        delete() {
                            val ingredientId = call.parameters["ingredientId"]?.toIntOrNull()

                            if (ingredientId != null) {
                                IngredientService.deleteIngredient(ingredientId)
                                call.respond(HttpStatusCode.NoContent)
                            }
                        }
                    }
                }
                get {
                    val ingredients = IngredientService.getIngredients()
                    call.respond(HttpStatusCode.OK, ingredients)
                }
                route("/{ingredientId}") {
                    get() {
                        val ingredientId = call.parameters["ingredientId"]?.toIntOrNull()
                        if (ingredientId != null) {
                            val fullIngredientDTO = IngredientService.getIngredientById(ingredientId)
                            if (fullIngredientDTO != null) {
                                call.respond(HttpStatusCode.OK, fullIngredientDTO)
                            } else {
                                call.respond(HttpStatusCode.NotFound, "Ingredient not found")
                            }
                        }
                        call.respond(message = HttpStatusCode.BadRequest)
                    }
                }
            }
        }
        route("/units") {
            authenticate("auth-jwt") {
                withRoles(maintainerRole) {
                    patch() {
                        val updateUnit = call.receive<UpdateUnitDTO>()
                        UnitService.updateUnit(updateUnit)
                        call.respond(HttpStatusCode.NoContent)
                    }
                    post {
                        try {
                            val createUnitDTO = call.receive<CreateUnitDTO>()
                            UnitService.createUnit(createUnitDTO)
                            call.respond(HttpStatusCode.NoContent)
                        } catch (ex: IllegalStateException) {
                            call.respond(HttpStatusCode.BadRequest)
                        } catch (ex: JsonConvertException) {
                            call.respond(HttpStatusCode.BadRequest)
                        }
                    }
                    route("/{unitId}") {
                        delete() {
                            val unitId = call.parameters["unitId"]?.toIntOrNull()

                            if (unitId != null) {
                                UnitService.deleteUnit(unitId)
                                call.respond(HttpStatusCode.NoContent)
                            }
                        }
                    }
                }
                get {
                    val units = UnitService.getUnits()
                    call.respond(HttpStatusCode.OK, units)
                }
                route("/{unitId}") {
                    get() {
                        val unitId = call.parameters["unitId"]?.toIntOrNull()
                        if (unitId != null) {
                            val fullUnitDTO = UnitService.getUnitById(unitId)
                            if (fullUnitDTO != null) {
                                call.respond(HttpStatusCode.OK, fullUnitDTO)
                            } else {
                                call.respond(HttpStatusCode.NotFound, "Unit not found")
                            }
                        }
                        call.respond(message = HttpStatusCode.BadRequest)
                    }
                }
            }
        }
        route("unit_types") {
            withRoles(maintainerRole) {
                patch() {
                    val updateUnitType = call.receive<UpdateUnitTypeDTO>()
                    UnitTypeService.updateUnitType(updateUnitType)
                    call.respond(HttpStatusCode.NoContent)
                }
                post {
                    try {
                        val createUnitTypeDTO = call.receive<CreateUnitTypeDTO>()
                        UnitTypeService.createUnitType(createUnitTypeDTO)
                        call.respond(HttpStatusCode.NoContent)
                    } catch (ex: IllegalStateException) {
                        call.respond(HttpStatusCode.BadRequest)
                    } catch (ex: JsonConvertException) {
                        call.respond(HttpStatusCode.BadRequest)
                    }
                }
                route("/{unitTypeId}") {
                    delete() {
                        val unitTypeId = call.parameters["unitTypeId"]?.toIntOrNull()

                        if (unitTypeId != null) {
                            UnitTypeService.deleteUnitType(unitTypeId)
                            call.respond(HttpStatusCode.NoContent)
                        }
                    }
                }
            }

            get {
                val unitTypes = UnitTypeService.getUnitTypes()
                call.respond(HttpStatusCode.OK, unitTypes)
            }

            route("/{unitTypeId}") {
                get() {
                    val unitTypeId = call.parameters["unitTypeId"]?.toIntOrNull()
                    if (unitTypeId != null) {
                        val unitTypeDTO = UnitTypeService.getUnitTypeById(unitTypeId)
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
                        val unitsDTO = UnitTypeService.getReferenceUnits(unitTypeId)
                        call.respond(HttpStatusCode.OK, unitsDTO)
                    }
                    call.respond(message = HttpStatusCode.BadRequest)
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

