package epicer.backend.model

import org.jetbrains.exposed.dao.id.CompositeIdTable
import org.jetbrains.exposed.sql.ReferenceOption

object UsersRolesTable: CompositeIdTable("users_roles") {
    val user = reference("user", UsersTable, onUpdate = ReferenceOption.CASCADE, onDelete = ReferenceOption.CASCADE)
    val role = reference("role", RolesTable, onUpdate = ReferenceOption.CASCADE, onDelete = ReferenceOption.CASCADE)

    override val primaryKey = PrimaryKey(user, role)
}