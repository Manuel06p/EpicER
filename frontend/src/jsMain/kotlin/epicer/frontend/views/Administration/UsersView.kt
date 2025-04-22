package epicer.frontend.views.Administration

import epicer.frontend.components.HeaderComponent
import epicer.frontend.createUserRoute
import epicer.frontend.data.UserService.Companion.deleteUser
import epicer.frontend.data.UserService.Companion.getUsers
import epicer.frontend.formatDateTime
import io.kvision.core.AlignContent
import io.kvision.core.AlignItems
import io.kvision.core.BsBgColor
import io.kvision.core.BsColor
import io.kvision.core.Display
import io.kvision.core.FontWeight
import io.kvision.core.JustifyContent
import io.kvision.core.addBsBgColor
import io.kvision.html.Align
import io.kvision.html.ButtonStyle
import io.kvision.html.button
import io.kvision.html.div
import io.kvision.html.h2
import io.kvision.html.h4
import io.kvision.html.h5
import io.kvision.html.span
import io.kvision.modal.Confirm
import io.kvision.panel.SimplePanel
import io.kvision.panel.gridPanel
import io.kvision.panel.hPanel
import io.kvision.panel.vPanel
import io.kvision.routing.Routing
import io.kvision.toast.ToastContainer
import io.kvision.toast.ToastContainerPosition
import io.kvision.utils.auto
import io.kvision.utils.perc
import io.kvision.utils.px
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import kotlinx.datetime.format


class UsersView(private val routing: Routing) : SimplePanel() {

    private val customScope = CoroutineScope(Dispatchers.Main)
    private val toastContainer = ToastContainer(ToastContainerPosition.BOTTOMRIGHT)

    init {
        initStart()
    }


    fun initStart() {
        removeAll()
        add(HeaderComponent(routing))


        alignItems = AlignItems.CENTER


        customScope.launch {
            val users = getUsers()

            vPanel {
                marginTop = 30.px
                alignItems = AlignItems.CENTER

                h2("User Administration") {
                    marginBottom = 30.px
                }
                button(text = "New User", icon = "fas fa-user-plus") {
                    onClick {
                        routing.navigate(createUserRoute)
                    }
                    width = 30.perc
                    minWidth = 300.px
                }

                marginBottom = 30.px
            }

            gridPanel(
                templateColumns = "repeat(auto-fill, minmax(400px, 1fr))",
                alignItems = AlignItems.CENTER,
                alignContent = AlignContent.CENTER,
            ) {
                users?.forEach { user ->
                    val rolesString = if (user.roles.isEmpty()) "-" else user.roles.joinToString(", ")
                    val createdAtString = user.created_at.format(formatDateTime)

                    vPanel(spacing = 8) {
                        addBsBgColor(BsBgColor.BODYSECONDARY)
                        padding = 20.px
                        borderRadius = 16.px
                        height = 300.px
                        width = 80.perc
                        justifyContent = JustifyContent.SPACEBETWEEN
                        display = Display.FLEX
                        marginLeft = auto
                        marginRight = auto
                        marginBottom = 20.px

                        // Top content
                        vPanel(spacing = 10) {
                            h4() {
                                span("ID: ") {
                                    fontWeight = FontWeight.LIGHTER
                                }
                                span(user.id.toString())
                            }
                            h5() {
                                span("Username: ") {
                                    fontWeight = FontWeight.LIGHTER
                                }
                                span(user.username)
                            }
                            h5() {
                                span("Name: ") {
                                    fontWeight = FontWeight.LIGHTER
                                }
                                span(user.name)
                            }
                            h5() {
                                span("Created at: ") {
                                    fontWeight = FontWeight.LIGHTER
                                }
                                span(createdAtString)
                            }
                            h5() {
                                span("Roles: ") {
                                    fontWeight = FontWeight.LIGHTER
                                }
                                span(rolesString)
                            }
                        }



                        // Spacer to push buttons down
                        div { flexGrow = 1 }

                        // Bottom buttons
                        hPanel(spacing = 8) {
                            width = 100.perc
                            justifyContent = JustifyContent.SPACEBETWEEN

                            button(text = "Edit", icon = "fas fa-edit") {
                                onClick {
                                    routing.navigate("/administration/users/${user.id}")
                                }
                            }

                            button(
                                text = "Delete",
                                icon = "fas fa-trash",
                                style = ButtonStyle.DANGER
                            ) {
                                onClick {
                                    Confirm.show(
                                        "User deletion",
                                        "Do you really want to delete this user?",
                                        align = Align.LEFT
                                    ) {
                                        customScope.launch {
                                            if (deleteUser(user.id)) {
                                                initStart()
                                                toastContainer.showToast(
                                                    message = "User deleted successfully!",
                                                    color = BsColor.SUCCESSBG
                                                )
                                            } else {
                                                toastContainer.showToast(
                                                    message = "User deletion failed",
                                                    color = BsColor.DANGERBG
                                                )
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
