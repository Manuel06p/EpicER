package epicer.backend

import epicer.backend.utils.createImagesUploadsDirectory
import io.ktor.http.*
import io.ktor.server.application.*
import io.ktor.server.plugins.cors.routing.*

fun main(args: Array<String>) {
    io.ktor.server.netty.EngineMain.main(args)
}

fun Application.module() {
    install(CORS) {
        allowMethod(HttpMethod.Options)
        allowMethod(HttpMethod.Put)
        allowMethod(HttpMethod.Post)
        allowMethod(HttpMethod.Delete)
        allowMethod(HttpMethod.Patch)
        allowHeader(HttpHeaders.Authorization)
        allowCredentials = true
        allowHeader(HttpHeaders.ContentType)

        anyHost() // @TODO: Don't do this in production if possible. Try to limit it.
    }

    createImagesUploadsDirectory()
    configureDatabases ()
    configureSerialization()
    configureMonitoring()

    configureAuthentication()
    configureRouting()
}
