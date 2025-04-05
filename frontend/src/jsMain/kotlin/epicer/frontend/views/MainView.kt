package epicer.frontend.views

import epicer.common.dto.TokenDTO
import epicer.common.dto.user.BaseUserDTO
import epicer.common.dto.user.LoginUserDTO
import epicer.frontend.App
import epicer.frontend.components.HeaderComponent
import epicer.frontend.data.isLogged
import epicer.frontend.data.login
import io.kvision.core.AlignItems
import io.kvision.core.Container
import io.kvision.core.StringPair
import io.kvision.core.VerticalAlign
import io.kvision.core.onClick
import io.kvision.dropdown.AutoClose
import io.kvision.dropdown.DD
import io.kvision.dropdown.Direction
import io.kvision.dropdown.DropDown
import io.kvision.dropdown.dropDown
import io.kvision.form.FormPanel
import io.kvision.form.check.checkBox
import io.kvision.form.text.Password
import io.kvision.form.text.Text
import io.kvision.form.text.text
import io.kvision.html.ButtonSize
import io.kvision.html.ButtonStyle
import io.kvision.html.ButtonType
import io.kvision.html.TAG
import io.kvision.html.button
import io.kvision.html.h2
import io.kvision.html.icon
import io.kvision.html.link
import io.kvision.html.tag
import io.kvision.navbar.nav
import io.kvision.navbar.navForm
import io.kvision.navbar.navLink
import io.kvision.navbar.navbar
import io.kvision.panel.SimplePanel
import io.kvision.panel.VPanel
import io.kvision.panel.vPanel
import io.kvision.routing.Routing
import io.kvision.toast.Toast
import io.kvision.toast.ToastOptions
import io.kvision.toast.ToastPosition
import io.kvision.utils.perc
import io.kvision.utils.px
import kotlinx.browser.localStorage
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import kotlinx.serialization.json.Json

class MainView(private val routing: Routing) : SimplePanel() {
    init {
        val customScope = CoroutineScope(Dispatchers.Main)

        customScope.launch {
            if (!isLogged()) {
                routing.navigate("/login")
            }
        }

        add(HeaderComponent(routing))


    }
}
