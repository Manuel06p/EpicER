package epicer.backend.model

import epicer.backend.db.mapping.TaskDAO
import epicer.backend.db.mapping.TaskTable
import epicer.backend.db.mapping.UserEntity
import epicer.backend.db.mapping.daoToModel
import epicer.backend.db.mapping.entityToUserModel
import epicer.backend.db.mapping.suspendTransaction
import org.jetbrains.exposed.sql.deleteWhere

class UsersFunctions : InterfaceUsersFunctions {
    override suspend fun allUsers(): List<UserModel> = suspendTransaction {
        UserEntity.all().map(::entityToUserModel)
    }
}