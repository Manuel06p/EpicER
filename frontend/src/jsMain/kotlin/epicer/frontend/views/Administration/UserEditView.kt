package epicer.frontend.views.Administration

import epicer.common.dto.user.UpdateUserDTO
import epicer.frontend.data.getUser
import io.kvision.form.FormPanel
import io.kvision.form.text.Password
import io.kvision.form.text.Text
import io.kvision.html.h2
import io.kvision.panel.SimplePanel
import io.kvision.routing.Routing
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch


class UserEditView(private val routing: Routing, userId: Int) : SimplePanel() {
    init {
        val customScope = CoroutineScope(Dispatchers.Main)

        h2(userId.toString())

        customScope.launch {
            val user = getUser(userId)

            val formPanel = FormPanel(serializer = UpdateUserDTO.serializer()).apply {
                add(UpdateUserDTO::username, Text(label = "Username"), required = true)
                add(UpdateUserDTO::name, Password(label = "Password"), required = true)
                add(UpdateUserDTO::password, Password(label = "Password"), required = true)

            }
            add(formPanel)
        }

    }
}
