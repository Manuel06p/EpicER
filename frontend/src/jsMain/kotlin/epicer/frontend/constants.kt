package epicer.frontend

const val backend_url: String = "http://localhost:8080"
const val assets: String = "/assets"
const val image_not_found: String = "$assets/image_not_found.png"

const val administrationRoute: String = "/administration"
const val usersRoute: String = "$administrationRoute/users"
const val createUserRoute: String = "$usersRoute/create"

const val maintenanceRoute: String = "/maintenance"
const val ingredientsRoute: String = "$maintenanceRoute/ingredients"
const val createIngredientsRoute: String = "$ingredientsRoute/create"