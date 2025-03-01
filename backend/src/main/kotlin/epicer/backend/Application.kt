package epicer.backend


import epicer.backend.model.InterfaceUsersFunctions
import epicer.backend.model.UsersFunctions
import io.ktor.server.application.*
import org.jetbrains.exposed.sql.SchemaUtils
import org.jetbrains.exposed.sql.transactions.transaction

fun main(args: Array<String>) {
    io.ktor.server.netty.EngineMain.main(args)
}

fun Application.module() {
    configureDatabases()
    configureSerialization(usersFunctions = UsersFunctions())

    configureMonitoring()
    configureRouting()


}
