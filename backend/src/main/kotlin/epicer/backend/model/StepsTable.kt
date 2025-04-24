package epicer.backend.model

import org.jetbrains.exposed.dao.id.IntIdTable
import org.jetbrains.exposed.sql.ReferenceOption

object StepsTable: IntIdTable("steps") {
    val index = integer("index")
    val name = varchar("name", 255).nullable()
    val description = text("description").nullable()
    val section = reference("section", SectionsTable, onUpdate = ReferenceOption.CASCADE, onDelete = ReferenceOption.CASCADE)
    init {
        uniqueIndex("unique_index_section", index, section)
    }
}