package epicer.backend


import epicer.backend.service.UsersService
import io.ktor.server.application.*

fun main(args: Array<String>) {
    io.ktor.server.netty.EngineMain.main(args)
}

fun Application.module() {
    configureDatabases()
    configureSerialization(userService = UsersService())

    configureMonitoring()
    configureRouting()


}
