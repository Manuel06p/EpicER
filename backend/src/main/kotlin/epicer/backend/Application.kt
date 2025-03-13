package epicer.backend


import com.auth0.jwt.JWT
import com.auth0.jwt.algorithms.Algorithm
import epicer.backend.service.UsersService
import io.ktor.server.application.*
import io.ktor.server.auth.Authentication
import io.ktor.server.auth.jwt.JWTPrincipal
import io.ktor.server.auth.jwt.jwt

fun main(args: Array<String>) {
    io.ktor.server.netty.EngineMain.main(args)
}

fun Application.module() {
    configureDatabases()
    configureAuthentication()
    authRoutes(userService = UsersService())
    configureSerialization(userService = UsersService())

    configureMonitoring()
    configureRouting()

}

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
