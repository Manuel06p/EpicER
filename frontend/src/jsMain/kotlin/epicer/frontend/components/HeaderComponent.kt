package epicer.frontend.components

import epicer.common.dto.administratorRole
import epicer.common.dto.user.BaseUserDTO
import epicer.frontend.data.isLogged
import epicer.frontend.isRole
import io.kvision.core.AlignItems
import io.kvision.core.BsColor
import io.kvision.core.onClick
import io.kvision.dropdown.dropDown
import io.kvision.form.check.checkBox
import io.kvision.form.text.text
import io.kvision.html.ButtonStyle
import io.kvision.html.button
import io.kvision.html.icon
import io.kvision.navbar.Navbar
import io.kvision.navbar.nav
import io.kvision.navbar.navForm
import io.kvision.navbar.navLink
import io.kvision.panel.vPanel
import io.kvision.routing.Routing
import io.kvision.toast.Toast
import io.kvision.toast.ToastContainer
import io.kvision.toast.ToastContainerPosition
import io.kvision.toast.ToastOptions
import io.kvision.toast.ToastPosition
import io.kvision.utils.perc
import io.kvision.utils.px
import kotlinx.browser.localStorage
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.serialization.json.Json

class HeaderComponent(private val routing: Routing): Navbar("navbar-header") {
    init {
        val toastContainer = ToastContainer(ToastContainerPosition.BOTTOMRIGHT)



        padding = 20.px
        nav {
            navLink("File", icon = "fas fa-file")
            navLink("Edit", icon = "fas fa-bars")
            if (isRole(administratorRole))
             {
                navLink("Administration", icon = "fas fa-bars")
                onClick {
                    routing.navigate("/administration")
                }
            }
            dropDown(
                "Favourites",
                listOf("HTML" to "#!/basic", "Forms" to "#!/forms"),
                icon = "fas fa-star",
                forNavbar = true
            )
        }
        navForm {
            text(label = "Search:")
            checkBox(label = "Search") {
                inline = true
            }
        }




        nav(rightAlign = true) {
            alignItems = AlignItems.CENTER

            dropDown(
                text = localStorage.getItem("baseUserDTO")
                    ?.let { Json.decodeFromString<BaseUserDTO>(it).username }
                    ?: "!UsernameNotFound",
                arrowVisible = false,
                forNavbar = true,
                rightAligned = true,
            ) {
                fontSize = 30.px
                marginRight = 10.px
                vPanel() {
                    alignItems = AlignItems.CENTER
                    button(
                        text = "Logout",
                        icon = "fas fa-right-from-bracket",
                        style = ButtonStyle.LIGHT,
                    ) {
                        width = 70.perc
                        onClick {
                            // Your logout logic here:
                            localStorage.clear()
                            toastContainer.showToast(
                                message = "You have been logged out",
                                color = BsColor.SUCCESSBG,
                            )
                            routing.navigate("/login")
                        }
                    }
                }

            }
            icon(
                "fas fa-circle-user",
            ) {
                fontSize = 35.px
            }
        }
    }
}
