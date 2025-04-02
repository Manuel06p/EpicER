package epicer.frontend.pages

import androidx.compose.runtime.*
import com.varabyte.kobweb.browser.dom.ElementTarget
import com.varabyte.kobweb.compose.css.FontWeight
import com.varabyte.kobweb.compose.css.autoLength
import com.varabyte.kobweb.compose.foundation.layout.Arrangement
import com.varabyte.kobweb.compose.foundation.layout.Column
import com.varabyte.kobweb.compose.ui.Alignment
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.modifiers.*
import com.varabyte.kobweb.core.Page
import com.varabyte.kobweb.core.rememberPageContext
import com.varabyte.kobweb.silk.components.forms.Button
import com.varabyte.kobweb.silk.components.forms.Input
import com.varabyte.kobweb.silk.components.layout.HorizontalDivider
import com.varabyte.kobweb.silk.components.overlay.AdvancedPopover
import com.varabyte.kobweb.silk.components.text.SpanText
import epicer.common.dto.user.LoginUserDTO
import epicer.frontend.data.login
import kotlinx.browser.localStorage
import kotlinx.browser.window
import kotlinx.coroutines.launch
import org.jetbrains.compose.web.attributes.InputType
import org.jetbrains.compose.web.css.px
import org.jetbrains.compose.web.dom.Text

@Page
@Composable
fun LoginPage() {
    Column (

        modifier = Modifier
            .fillMaxSize()
        ,
        horizontalAlignment = Alignment.CenterHorizontally,
        verticalArrangement = Arrangement.Center,
    ) {
        val coroutineScope = rememberCoroutineScope()
//        var isLogged by remember { mutableStateOf(false) } // Store state
//        coroutineScope.launch {
//            isLogged = isLogged()
//        }
//        print(isLogged)
//
//        if (!isLogged) {
//
//        }
        LoginForm()


    }
}

@Composable
fun LoginForm(){
    val ctx = rememberPageContext()
    var username by remember { mutableStateOf("") }
    var password by remember { mutableStateOf("") }
    var showSuccessLogin = remember { mutableStateOf(false) }
    var showFailedLogin = remember { mutableStateOf(false) }

    val coroutineScope = rememberCoroutineScope()
    Column(
        modifier = Modifier
            .size(autoLength),
        horizontalAlignment = Alignment.CenterHorizontally,
        verticalArrangement = Arrangement.Center,
    ) {

        SpanText(
            modifier = Modifier
                .fontSize(30.px)
                .align(Alignment.Start)
                .fontWeight(FontWeight.SemiBold)
            ,
            text = "Login",
        )

        HorizontalDivider()

        // Username Input Field
        SpanText(
            modifier = Modifier
                .align(Alignment.Start)
                .margin(topBottom = 5.px)
            ,
            text = "Username",
        )
        Input(
            modifier = Modifier
                .margin(bottom = 10.px)
            ,
            type = InputType.Text,
            placeholder = "ex: james",
            onValueChange = { username = it },
            value = username,
        )

        SpanText(
            text = "Password",
            modifier = Modifier
                .align(Alignment.Start)
                .margin(topBottom = 5.px)
            ,
        )
        Input(
            modifier = Modifier
                .margin(bottom = 10.px)
            ,
            type = InputType.Password,
            placeholder = "ex: P4ssword!",
            onValueChange = { password = it },
            value = password,
        )

        // Login Button
        Button(
            modifier = Modifier
                .margin(10.px)
            ,
            onClick = {
                coroutineScope.launch {
                    localStorage.setItem("jwtToken", "")

                    val loginUserDTO = LoginUserDTO(username, password)
                    val tokenDTO = login(loginUserDTO)

                    if (tokenDTO != null) {
                        localStorage.setItem("jwtToken", tokenDTO.token)
                        showSuccessLogin.value = true
                        window.setTimeout({
                            ctx.router.navigateTo("/")
                        }, 3000)

                    } else {
                        showFailedLogin.value = true
                    }


                }
            }
        ) {
            Text("Login")
        }

        if (showSuccessLogin.value) {
            showPopover(showSuccessLogin, "✅ Login Successful!")
        }
        if (showFailedLogin.value) {
            showPopover(showFailedLogin, "❌ Login Failed!")
        }
    }


}

@Composable
fun showPopover(state: MutableState<Boolean>, message: String, showDelayMs: Int = 100, hideDelayMs: Int = 3000) {
    AdvancedPopover(
        target = ElementTarget.PreviousSibling,
        showDelayMs = showDelayMs,
        hideDelayMs = hideDelayMs,
    ) {
        Text(message)
        window.setTimeout({
            state.value = false
        }, showDelayMs + hideDelayMs)
    }
}