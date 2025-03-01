package epicer.backend.model

import epicer.backend.db.entities.UserEntity
import epicer.backend.db.entities.entityToUserModel
import epicer.backend.suspendTransaction
import epicer.backend.utils.hashPassword

class UsersFunctions : InterfaceUsersFunctions {
    override suspend fun allUsers(): List<UserModel> = suspendTransaction {
        UserEntity.all().map(::entityToUserModel)
    }

    override suspend fun getUserById(id: Int): UserModel {
        TODO("Not yet implemented")
    }

    override suspend fun getUserByUsername(username: String): UserModel {
        TODO("Not yet implemented")
    }

    override suspend fun createUser(newUser: UserModel): Unit = suspendTransaction {
        UserEntity.new {
            username = newUser.username
            hashed_password = hashPassword(newUser.hashed_password);
            name = newUser.name
            is_admin = newUser.is_admin == true
        }
    }

//    override suspend fun createUser(username: String, password: String, name: String, is_admin: Boolean?) {
//        UserEntity.new {
//            username
//            password
//            name
//            is_admin
//        }
//    }

}