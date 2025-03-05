package epicer.backend.model


import org.jetbrains.exposed.dao.id.IntIdTable
import org.jetbrains.exposed.sql.javatime.datetime
import java.time.LocalDateTime


object UsersTable : IntIdTable("users") {
    val username = varchar("username", 255).uniqueIndex()
    val hashed_password = varchar("hashed_password", 255)
    val name = varchar("name", 255)
    val is_admin = bool("is_admin")
    val created_at = datetime("created_at").default(LocalDateTime.now())
}