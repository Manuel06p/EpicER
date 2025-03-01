package epicer.backend

import epicer.backend.model.InterfaceUsersFunctions
import epicer.backend.model.UserModel
import io.ktor.http.*
import io.ktor.serialization.JsonConvertException
import io.ktor.serialization.kotlinx.json.*
import io.ktor.server.application.*
import io.ktor.server.plugins.contentnegotiation.*
import io.ktor.server.request.receive
import io.ktor.server.response.*
import io.ktor.server.routing.*

fun Application.configureSerialization(usersFunctions: InterfaceUsersFunctions) {
    install(ContentNegotiation) {
        json()
    }
    routing {
        route("/users") {
            get {
                val users = usersFunctions.allUsers()
                call.respond(HttpStatusCode.OK, users)
            }
            post {
                try {
                    val newUser = call.receive<UserModel>()
                    usersFunctions.createUser(newUser)
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