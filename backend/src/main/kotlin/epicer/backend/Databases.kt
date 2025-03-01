package epicer.backend

import epicer.backend.db.mapping.RecipesTable
import epicer.backend.db.mapping.UsersTable
import io.ktor.server.application.*
import org.jetbrains.exposed.sql.*
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
        SchemaUtils.create(RecipesTable)
    }
}
