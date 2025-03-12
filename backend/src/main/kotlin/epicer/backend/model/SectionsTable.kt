package epicer.backend.model

import org.jetbrains.exposed.dao.id.IntIdTable
import org.jetbrains.exposed.sql.ReferenceOption

object SectionsTable: IntIdTable("sections") {
    val index = integer("index")
    val title = varchar("name", 255).nullable()
    val description = text("description").nullable()
    val recipe = reference("recipe", RecipesTable, onUpdate = ReferenceOption.CASCADE, onDelete = ReferenceOption.CASCADE)
    init {
        uniqueIndex("unique_index_recipe", index, recipe)
    }
}