package epicer.backend

import epicer.backend.db.mapping.TaskTable

import epicer.backend.model.MariadbTaskRepository
import epicer.backend.model.UsersFunctions
import io.ktor.server.application.*
import org.jetbrains.exposed.sql.SchemaUtils
import org.jetbrains.exposed.sql.transactions.transaction

fun main(args: Array<String>) {
    io.ktor.server.netty.EngineMain.main(args)
}

fun Application.module() {
    val repository = MariadbTaskRepository()

    configureSerialization(repository, usersFunctions = UsersFunctions())
    configureDatabases()


    configureMonitoring()
    configureRouting()


}
