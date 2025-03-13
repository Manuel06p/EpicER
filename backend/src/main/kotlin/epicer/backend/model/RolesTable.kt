package epicer.backend.model

import org.jetbrains.exposed.dao.id.IntIdTable
import org.jetbrains.exposed.sql.javatime.datetime
import java.time.LocalDateTime

object RolesTable: IntIdTable("roles") {
    val role = varchar("role", 255).uniqueIndex()
}