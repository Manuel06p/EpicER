package epicer.frontend.views

import epicer.common.dto.TokenDTO
import epicer.common.dto.user.BaseUserDTO
import epicer.common.dto.user.LoginUserDTO
import epicer.common.dto.user.UserDTO
import epicer.frontend.data.LoginService
import epicer.frontend.data.LoginService.Companion.login
import io.kvision.core.AlignContent
import io.kvision.core.AlignItems
import io.kvision.core.BsColor
import io.kvision.core.Position
import io.kvision.core.onClick
import io.kvision.core.onEventLaunch
import io.kvision.core.onInputLaunch
import io.kvision.event.clickFlow
import io.kvision.form.FormPanel
import io.kvision.form.formPanel
import io.kvision.form.text.Password
import io.kvision.form.text.Text
import io.kvision.html.Button
import io.kvision.html.ButtonType
import io.kvision.html.button
import io.kvision.html.h2
import io.kvision.html.h3
import io.kvision.html.h5
import io.kvision.modal.Alert
import io.kvision.panel.VPanel
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
import kotlinx.browser.window
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.MainScope
import kotlinx.coroutines.await
import kotlinx.coroutines.coroutineScope
import kotlinx.coroutines.launch
import kotlinx.serialization.Serializable
import kotlinx.serialization.json.Json
import org.reduxkotlin.compose
import org.w3c.fetch.RequestInit
import kotlin.js.json

class LoginView(private val routing: Routing) : VPanel() {

    init {

        val toastContainer = ToastContainer(ToastContainerPosition.BOTTOMRIGHT)

        h2("Login", className = "text-center")
        marginLeft = 20.px
        marginRight = 20.px
        marginTop = 40.px
        alignItems = AlignItems.CENTER

        val customScope = CoroutineScope(Dispatchers.Main)

        vPanel() {
            width = 50.perc

            val formPanel = FormPanel(serializer = LoginUserDTO.serializer()).apply {
                add(LoginUserDTO::username, Text(label = "Username"), required = true)
                add(LoginUserDTO::password, Password(label = "Password"), required = true)
            }
            add(formPanel)


            val loginButton = button(
                text = "Login",
                className = "btn btn-primary",
                type = ButtonType.SUBMIT,
            ) {
                marginTop = 10.px
                onClick {

                    customScope.launch {
                        if (formPanel.validate()) {
                            val token: TokenDTO? = login(formPanel.getData())

                            if (token != null) {
                                localStorage.setItem("jwtToken", token.token)
                                localStorage.setItem("baseUserDTO", Json.encodeToString(BaseUserDTO.serializer(), token.baseUserDTO))

                                toastContainer.showToast(
                                    message = "Login successfull",
                                    color = BsColor.SUCCESSBG,
                                )

                                println("Login succeded")
                                routing.navigate("/")
                            } else {
                                localStorage.clear()
                                toastContainer.showToast(
                                    message = "Login failed",
                                    color = BsColor.DANGERBG,
                                )
                                println("Login failed")
                            }
                        }
                    }

                }
            }


//            formPanel.getElement()?.onsubmit = {
//                loginButton.getElement()?.click()
//            }
        }



    }
}