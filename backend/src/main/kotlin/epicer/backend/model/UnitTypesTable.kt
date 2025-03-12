package epicer.backend.model

import org.jetbrains.exposed.dao.id.IntIdTable
import org.jetbrains.exposed.sql.ReferenceOption

object UnitTypesTable : IntIdTable("unit_types") {
    val name = varchar("name", 255)
    val reference_unit = reference("reference_unit", UnitsTable, onUpdate = ReferenceOption.CASCADE, onDelete = ReferenceOption.SET_NULL).nullable()
}