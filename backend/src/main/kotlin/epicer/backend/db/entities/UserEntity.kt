package epicer.backend.db.entities

import epicer.backend.db.tables.UsersTable
import epicer.backend.model.UserModel
import org.jetbrains.exposed.dao.IntEntity
import org.jetbrains.exposed.dao.IntEntityClass
import org.jetbrains.exposed.dao.id.EntityID

class UserEntity(id: EntityID<Int>) : IntEntity(id) {
    companion object : IntEntityClass<UserEntity>(UsersTable)

    var username by UsersTable.username
    var hashed_password by UsersTable.hashed_password
    var name by UsersTable.name
    var is_admin by UsersTable.is_admin
}

fun entityToUserModel(entity: UserEntity) = UserModel(
    entity.username,
    entity.hashed_password,
    entity.name,
    entity.is_admin,
)


