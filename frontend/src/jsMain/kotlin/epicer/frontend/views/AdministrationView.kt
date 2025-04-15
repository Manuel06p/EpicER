package epicer.frontend.views

import epicer.common.dto.user.BaseUserDTO
import epicer.frontend.data.getUsers
import io.kvision.form.text.text
import io.kvision.html.Span
import io.kvision.html.div
import io.kvision.html.h2
import io.kvision.html.span
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
                add(Span("Username"), col = 1, row = 1)
                add(Span("Name"), col = 2, row = 1)
                add(Span("Roles"), col = 3, row = 1)
                add(Span("Created At"), col = 4, row = 1)

                users?.forEachIndexed { index, user ->
                    val rowIndex = index + 2 // Row 0 is the header

                    add(Span(user.username), col = 1, row = rowIndex)
                    add(Span(user.name), col = 2, row = rowIndex)
                    add(Span(user.roles.toString()), col = 3, row = rowIndex)
                    add(Span(user.created_at.toString()), col = 4, row = rowIndex)
                }
            }
        }
    }
}
