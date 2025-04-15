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
import epicer.backend.service.UserService
import epicer.backend.utils.hashPassword
import epicer.common.dto.administratorPassword
import epicer.common.dto.administratorRole
import epicer.common.dto.maintainerRole
import epicer.common.dto.user.NewUserDTO
import epicer.common.dto.userRole
import io.ktor.server.application.*
import kotlinx.coroutines.Dispatchers
import org.jetbrains.exposed.sql.*
import org.jetbrains.exposed.sql.transactions.experimental.newSuspendedTransaction
import org.jetbrains.exposed.sql.transactions.transaction
import org.jetbrains.exposed.sql.SqlExpressionBuilder.eq

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

        createDefaultRoles()
        createDefaultAdministrator()
    }




}

suspend fun <T> suspendTransaction(block: Transaction.() -> T): T =
    newSuspendedTransaction(Dispatchers.IO, statement = block)

fun createDefaultRoles() {
    val defaultRoles = listOf(administratorRole, maintainerRole, userRole)

    defaultRoles.forEach { role ->
        val exists = RolesTable
            .select(RolesTable.role)
            .where(RolesTable.role eq role)
            .count() > 0

        if (!exists) {
            RolesTable.insert {
                it[RolesTable.role] = role
            }
        }
    }
}

fun createDefaultAdministrator() {
    transaction {
        val adminExists = UsersRolesTable
            .join(RolesTable, JoinType.LEFT, UsersRolesTable.role, RolesTable.id)
            .select(RolesTable.role)
            .where(RolesTable.role eq administratorRole)
            .count() > 0

        if (!adminExists) {

            var adminId = UsersTable
                .select(UsersTable.id)
                .where(UsersTable.username eq administratorRole)
                .map {
                    it[UsersTable.id].value
                }
                .singleOrNull()


            val adminRoleId = RolesTable
                .select(RolesTable.id)
                .where(RolesTable.role eq administratorRole)
                .map {
                    it[RolesTable.id].value
                }
                .singleOrNull()

            if (adminId == null) {
                UsersTable.insert {
                    it[username] = administratorRole
                    it[hashed_password] = hashPassword(administratorPassword)
                    it[name] = administratorRole
                }

                adminId = UsersTable
                    .select(UsersTable.id)
                    .where(UsersTable.username eq administratorRole)
                    .map {
                        it[UsersTable.id].value
                    }
                    .singleOrNull()
            }

            if (adminId != null && adminRoleId != null) {
                UsersRolesTable.insert {
                    it[user] = adminId
                    it[role] = adminRoleId
                }
            }
        }
    }
}
