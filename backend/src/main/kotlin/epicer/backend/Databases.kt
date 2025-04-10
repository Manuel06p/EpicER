package epicer.backend

import epicer.backend.model.ImagesTable
import epicer.backend.model.IngredientsInRecipesTable
import epicer.backend.model.IngredientsRecipesTable
import epicer.backend.model.IngredientsTable
import epicer.backend.model.RecipesTable
import epicer.backend.model.RolesTable
import epicer.backend.model.SectionsTable
import epicer.backend.model.StepsImagesTable
import epicer.backend.model.StepsIngredientsInRecipe
import epicer.backend.model.StepsTable
import epicer.backend.model.UnitTypesTable
import epicer.backend.model.UnitsTable
import epicer.backend.model.UsersRolesTable
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
        SchemaUtils.create(UnitTypesTable)
        SchemaUtils.create(UnitsTable)
        SchemaUtils.create(IngredientsInRecipesTable)
        SchemaUtils.create(SectionsTable)
        SchemaUtils.create(StepsTable)
        SchemaUtils.create(StepsIngredientsInRecipe)
        SchemaUtils.create(StepsImagesTable)
        SchemaUtils.create(RolesTable)
        SchemaUtils.create(UsersRolesTable)
    }
}

suspend fun <T> suspendTransaction(block: Transaction.() -> T): T =
    newSuspendedTransaction(Dispatchers.IO, statement = block)
