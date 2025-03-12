package epicer.backend.model

import org.jetbrains.exposed.dao.id.IntIdTable
import org.jetbrains.exposed.sql.ReferenceOption

object UnitsTable : IntIdTable("units") {
    val name = varchar("name", 255)
    val short_name = varchar("short_name", 255)
    val conversion_factor = double("conversion_factor")
    val unit_type = reference("unit_type", UnitTypesTable, onUpdate = ReferenceOption.CASCADE, onDelete = ReferenceOption.CASCADE)
}
