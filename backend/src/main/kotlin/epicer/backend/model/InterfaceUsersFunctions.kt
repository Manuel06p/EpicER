package epicer.backend.model

interface InterfaceUsersFunctions {
    suspend fun allUsers(): List<UserModel>
    suspend fun getUserById(id: Int): UserModel
    suspend fun getUserByUsername(username: String): UserModel
    suspend fun createUser(newUser: UserModel)
//    suspend fun createUser(username: String, password: String, name: String, is_admin: Boolean? = null)
}