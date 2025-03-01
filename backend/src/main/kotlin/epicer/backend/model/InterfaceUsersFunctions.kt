package epicer.backend.model

interface InterfaceUsersFunctions {
    suspend fun allUsers(): List<UserModel>
}