package epicer.backend.model


import org.jetbrains.exposed.dao.id.IntIdTable
import org.jetbrains.exposed.sql.ReferenceOption

object IngredientsTable : IntIdTable("ingredients") {
    val name_singular = varchar("name_singular", 255)
    val name_plural = varchar("name_plural", 255).nullable()
    val image = reference("image", ImagesTable, onUpdate = ReferenceOption.CASCADE, onDelete = ReferenceOption.SET_NULL).nullable()
}
