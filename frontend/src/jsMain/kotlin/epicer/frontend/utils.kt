package epicer.frontend

import epicer.common.administratorRole
import epicer.common.dto.user.BaseUserDTO
import epicer.frontend.data.isLogged
import io.kvision.core.BsColor
import io.kvision.routing.Routing
import io.kvision.toast.ToastContainer
import kotlinx.browser.localStorage
import kotlinx.coroutines.launch
import kotlinx.serialization.json.Json

fun isRole(role: String) : Boolean {
    val roles = localStorage.getItem("baseUserDTO")
        ?.let { Json.decodeFromString<BaseUserDTO>(it).roles }

    return (roles != null && roles.contains(role))
}

fun authNavigate(
    routing: Routing,
    toastContainer: ToastContainer,
    onLoggedIn: () -> Unit
) {
    kotlinx.coroutines.GlobalScope.launch {
        if (!isLogged()) {
            routing.navigate("/login")
            toastContainer.showToast(
                "You are not logged in!",
                color = BsColor.DANGERBG
            )
        } else {
            onLoggedIn()
        }
    }
}

fun authRoleNavigate(
    role: String,
    routing: Routing,
    toastContainer: ToastContainer,
    onLoggedIn: () -> Unit
) {
    if(!isRole(role)) {
        routing.navigate("/")
        toastContainer.showToast(
            "You are not administrator!",
            color = BsColor.DANGERBG
        )
    } else {
        authNavigate(routing, toastContainer, onLoggedIn)
    }
}