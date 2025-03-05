package epicer.backend

import epicer.backend.model.ImagesTable
import epicer.backend.model.IngredientsRecipesTable
import epicer.backend.model.IngredientsTable
import epicer.backend.model.RecipesTable
import epicer.backend.model.UsersTable
import io.ktor.server.application.*
import kotlinx.coroutines.Dispatchers
import org.jetbrains.exposed.sql.*
import org.jetbrains.exposed.sql.transactions.experimental.newSuspendedTransaction
import org.jetbrains.exposed.sql.transactions.transaction

fun Application.configureDatabases() {
    Database.connect(
        "jdbc:mariadb://192.168.1.100:3306/epicer",
        driver = "org.mariadb.jdbc.Driver",
        user = "epicer",
        password = "epicerpass"
    )

    transaction {
        SchemaUtils.create(UsersTable)
        SchemaUtils.create(ImagesTable)
        SchemaUtils.create(RecipesTable)
        SchemaUtils.create(IngredientsTable)
        SchemaUtils.create(IngredientsRecipesTable)
    }
}

suspend fun <T> suspendTransaction(block: Transaction.() -> T): T =
    newSuspendedTransaction(Dispatchers.IO, statement = block)
