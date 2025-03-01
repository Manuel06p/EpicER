package epicer.backend.db.tables

import org.jetbrains.exposed.dao.id.IntIdTable
import org.jetbrains.exposed.sql.ReferenceOption

object RecipesTable : IntIdTable("recipes") {
    val name = varchar("name", 255)
    val description = text("description").nullable()
    val portions = integer("portions").nullable()
    val is_public = bool("is_public").default(true)
    val owner = reference("owner", UsersTable, onUpdate = ReferenceOption.CASCADE, onDelete = ReferenceOption.CASCADE)

}
