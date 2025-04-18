package epicer.backend.model

import org.jetbrains.exposed.dao.id.IntIdTable
import org.jetbrains.exposed.sql.ReferenceOption

object ImagesTable : IntIdTable("images") {
    val owner = reference("owner", UsersTable, onUpdate = ReferenceOption.CASCADE, onDelete = ReferenceOption.CASCADE).nullable()
    val isPublic = bool("isPublic")
    val extension = varchar("extension", 255)
}