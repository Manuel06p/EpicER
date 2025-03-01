package epicer.backend.db.mapping

import epicer.backend.UserService.Users
import org.jetbrains.exposed.dao.id.IdTable
import org.jetbrains.exposed.dao.id.IntIdTable
import org.jetbrains.exposed.sql.ReferenceOption
import org.jetbrains.exposed.sql.Table

object UsersTable : IntIdTable("users") {
    val username = varchar("username", 255).uniqueIndex()
    val hashed_password = varchar("hashed_password", 255)
    val name = varchar("name", 255)
    val is_admin = bool("is_admin").default(false)
}

object RecipesTable : IntIdTable("recipes") {
    val name = varchar("name", 255)
    val description = text("description").nullable()
    val portions = integer("portions").nullable()
    val is_public = bool("is_public").default(true)
    val owner = reference("owner", UsersTable, onUpdate = ReferenceOption.CASCADE, onDelete = ReferenceOption.CASCADE)

}

