package epicer.frontend.views.Administration

import epicer.frontend.data.getUsers
import io.kvision.html.Span
import io.kvision.html.button
import io.kvision.html.h2
import io.kvision.panel.SimplePanel
import io.kvision.panel.responsiveGridPanel
import io.kvision.routing.Routing
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch

class AdministrationView(private val routing: Routing) : SimplePanel() {
    init {
        val customScope = CoroutineScope(Dispatchers.Main)

        customScope.launch {
            val users = getUsers()

            h2("User Administration")

            responsiveGridPanel {
                // Optional: Add headers
                add(Span("Username"), col = 1, row = 0)
                add(Span("Name"), col = 2, row = 1)
                add(Span("Roles"), col = 3, row = 1)
                add(Span("Created At"), col = 4, row = 1)
                add(Span("Edit"), col = 5, row = 1)

                users?.forEachIndexed { index, user ->
                    val rowIndex = index + 1 // Row 0 is the header
                    add(Span(user.username), col = 1, row = rowIndex)
                    add(Span(user.name), col = 2, row = rowIndex)
                    add(Span(user.roles.toString()), col = 3, row = rowIndex)
                    add(Span(user.created_at.toString()), col = 4, row = rowIndex)

                    add(button(
                        text = "Edit",
                        icon = "fas fa-edit",
                    ) {
                        onClick {
                            routing.navigate("/administration/users/${user.id}")
                        }
                    },
                        col = 5,
                        row = rowIndex,
                    )
                }
            }

            button(
                text = "New User",
                icon = "fas fa-user-plus",
            ) {
                onClick {
                    routing.navigate("/administration/users/new")
                }
            }
        }
    }
}
