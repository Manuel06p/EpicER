package epicer.backend.model

import org.jetbrains.exposed.dao.id.IntIdTable
import org.jetbrains.exposed.sql.ReferenceOption

object RecipesTable : IntIdTable("recipes") {
    val name = varchar("name", 255)
    val description = text("description").nullable()
    val portions = integer("portions").nullable()
    val is_public = bool("is_public")
    val owner = reference("owner", UsersTable, onUpdate = ReferenceOption.CASCADE, onDelete = ReferenceOption.CASCADE)
    val image = reference("image", ImagesTable, onUpdate = ReferenceOption.CASCADE, onDelete = ReferenceOption.SET_NULL).nullable()
}
