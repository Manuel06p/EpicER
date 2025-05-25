package epicer.frontend.components

import epicer.common.administratorRole
import epicer.common.dto.user.BaseUserDTO
import epicer.common.maintainerRole
import epicer.frontend.ingredientsRoute
import epicer.frontend.isRole
import epicer.frontend.recipesRoute
import epicer.frontend.unitsRoute
import epicer.frontend.usersRoute
import io.kvision.core.AlignItems
import io.kvision.core.BsColor
import io.kvision.core.Cursor
import io.kvision.core.onClick
import io.kvision.dropdown.ddLink
import io.kvision.dropdown.dropDown
import io.kvision.form.check.checkBox
import io.kvision.form.text.text
import io.kvision.html.ButtonStyle
import io.kvision.html.button
import io.kvision.html.icon
import io.kvision.html.image
import io.kvision.navbar.Navbar
import io.kvision.navbar.nav
import io.kvision.navbar.navForm
import io.kvision.navbar.navLink
import io.kvision.panel.vPanel
import io.kvision.routing.Routing
import io.kvision.theme.Theme
import io.kvision.theme.ThemeManager
import io.kvision.theme.themeSwitcher
import io.kvision.toast.Toast
import io.kvision.toast.ToastContainer
import io.kvision.toast.ToastContainerPosition
import io.kvision.toast.ToastOptions
import io.kvision.toast.ToastPosition
import io.kvision.utils.auto
import io.kvision.utils.perc
import io.kvision.utils.px
import kotlinx.browser.localStorage
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.serialization.json.Json

class HeaderComponent(private val routing: Routing): Navbar() {
    init {
        val toastContainer = ToastContainer(ToastContainerPosition.BOTTOMRIGHT)

        width = 100.perc

        padding = 20.px
        nav {
            fontSize = 24.px

            image(src = "/assets/brand/EpicER_logo.svg", alt = "Logo") {
                height = 40.px
                marginTop = auto
                marginBottom = auto
                marginRight = 30.px
                cursor = Cursor.POINTER

                onClick {
                    routing.navigate("/")
                }
            }

            navLink("My Recipes", icon = "fas fa-pizza-slice") {
                cursor = Cursor.POINTER
                onClick {
                    routing.navigate(recipesRoute)
                }
            }
            navLink("All Recipes", icon = "fas fa-globe") {
                cursor = Cursor.POINTER
                onClick {
                    routing.navigate("/allRecipes")
                }
            }
            if (isRole(administratorRole))
             {
                navLink("Administration", icon = "fas fa-screwdriver-wrench") {
                    cursor = Cursor.POINTER
                    onClick {
                        routing.navigate(usersRoute)
                    }
                }
            }

            if (isRole(maintainerRole))
            {
                navLink("Ingredients", icon = "fas fa-egg") {
                    cursor = Cursor.POINTER
                    onClick {
                        routing.navigate(ingredientsRoute)
                    }
                }
                navLink("Units", icon = "fas fa-ruler") {
                    cursor = Cursor.POINTER
                    onClick {
                        routing.navigate(unitsRoute)
                    }
                }
            }
        }


        nav(rightAlign = true) {
            alignItems = AlignItems.END

            dropDown(
                text = localStorage.getItem("baseUserDTO")
                    ?.let { Json.decodeFromString<BaseUserDTO>(it).name }
                    ?: "!UsernameNotFound",
                arrowVisible = false,
                icon = "fas fa-circle-user",
                forNavbar = true,
                rightAligned = true,
            ) {
                fontSize = 30.px
                marginRight = 10.px
                ddLink(label = "Edit user") {
                    cursor = Cursor.POINTER
                    onClick {
                        routing.navigate("/my-user")
                    }
                }
                ddLink(label = "Logout") {
                    cursor = Cursor.POINTER
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
    }
}
