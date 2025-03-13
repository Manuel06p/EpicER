package epicer.backend

import io.ktor.http.*
import io.ktor.serialization.kotlinx.json.*
import io.ktor.server.application.*
import io.ktor.server.auth.AuthenticationChecked
import io.ktor.server.auth.jwt.JWTPrincipal
import io.ktor.server.auth.principal
import io.ktor.server.plugins.calllogging.*
import io.ktor.server.plugins.contentnegotiation.*
import io.ktor.server.request.*
import io.ktor.server.response.*
import io.ktor.server.routing.*
import io.ktor.util.pipeline.PipelineContext
import org.jetbrains.exposed.sql.*
import org.jetbrains.exposed.sql.transactions.transaction
import org.slf4j.event.*


fun Application.configureRouting() {
    routing {
        post("/") {

        }
    }
}

fun Route.withRoles(vararg roles: String, build: Route.() -> Unit) {
    val route = createChild(object : RouteSelector() {
        override suspend fun evaluate(context: RoutingResolveContext, segmentIndex: Int): RouteSelectorEvaluation {
            return RouteSelectorEvaluation.Transparent
        }

    })
    route.install(RoleAuthorizationPlugin) {
        roles(roles.toSet())
    }

    route.build()
}


class RoleBaseConfiguration {
    val requiredRoles = mutableSetOf<String>()
    fun roles(roles: Set<String>) {
        requiredRoles.addAll(roles)
    }
}

val RoleAuthorizationPlugin = createRouteScopedPlugin("RoleAuthorizationPlugin", ::RoleBaseConfiguration) {
    on(AuthenticationChecked) { call ->
        val principal = call.principal<JWTPrincipal>() ?: return@on
        val roles = principal.payload.getClaim("roles").asList(String::class.java).toSet()

        if (pluginConfig.requiredRoles.isNotEmpty() && roles.intersect(pluginConfig.requiredRoles).isEmpty()) {
            call.respondText("You don`t have access to this resource.", status = HttpStatusCode.Unauthorized)
        }
    }
}

