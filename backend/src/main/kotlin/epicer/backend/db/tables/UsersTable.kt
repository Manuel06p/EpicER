package epicer.backend.db.tables

import org.jetbrains.exposed.dao.id.IntIdTable

object UsersTable : IntIdTable("users") {
    val username = varchar("username", 255).uniqueIndex()
    val hashed_password = varchar("hashed_password", 255)
    val name = varchar("name", 255)
    val is_admin = bool("is_admin").default(false)
}