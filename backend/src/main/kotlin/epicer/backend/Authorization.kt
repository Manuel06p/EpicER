package epicer.backend

import com.auth0.jwt.JWT
import com.auth0.jwt.algorithms.Algorithm
import io.ktor.http.HttpStatusCode
import io.ktor.server.application.Application
import io.ktor.server.application.createRouteScopedPlugin
import io.ktor.server.application.install
import io.ktor.server.auth.Authentication
import io.ktor.server.auth.AuthenticationChecked
import io.ktor.server.auth.jwt.JWTPrincipal
import io.ktor.server.auth.jwt.jwt
import io.ktor.server.auth.principal
import io.ktor.server.response.respondText
import io.ktor.server.routing.Route
import io.ktor.server.routing.RouteSelector
import io.ktor.server.routing.RouteSelectorEvaluation
import io.ktor.server.routing.RoutingResolveContext

fun Application.configureAuthentication() {
    install(Authentication) {
        jwt("auth-jwt") {
            realm = "epicer"
            verifier(
                JWT.require(Algorithm.HMAC256("supersegreto")) // Chiave segreta
                    .withIssuer("epicer-backend")
                    .build()
            )
            validate { credential ->
                if (credential.payload.getClaim("username").asString() != null) JWTPrincipal(credential.payload) else null
            }
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

