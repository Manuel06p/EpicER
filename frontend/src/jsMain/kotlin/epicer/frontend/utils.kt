package epicer.frontend

import epicer.common.administratorRole
import epicer.common.dto.user.BaseUserDTO
import epicer.frontend.data.LoginService.Companion.isLogged
import io.kvision.core.BsColor
import io.kvision.routing.Routing
import io.kvision.toast.ToastContainer
import kotlinx.browser.localStorage
import kotlinx.coroutines.launch
import kotlinx.datetime.LocalDateTime
import kotlinx.datetime.format.char
import kotlinx.serialization.json.Json

fun isRole(role: String) : Boolean {
    val roles = localStorage.getItem("baseUserDTO")
        ?.let { Json.decodeFromString<BaseUserDTO>(it).roles }

    return (roles != null && roles.contains(role))
}

fun getMyUser(): BaseUserDTO? {
    val myUserDTO = localStorage.getItem("baseUserDTO")?.let { Json.decodeFromString<BaseUserDTO>(it) }

    return myUserDTO
}

fun getMyId(): Int? {
    val id = localStorage.getItem("baseUserDTO")
        ?.let { Json.decodeFromString<BaseUserDTO>(it).id }

    return id
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

val formatDateTime = LocalDateTime.Format {
    year()
    char('-')
    monthNumber()
    char('-')
    dayOfMonth()

    char(' ')

    hour()
    char(':')
    minute()
    char(':')
    second()
}