package epicer.frontend.pages

import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.rememberCoroutineScope
import androidx.compose.runtime.setValue
import com.varabyte.kobweb.compose.foundation.layout.Arrangement
import com.varabyte.kobweb.compose.foundation.layout.Column
import com.varabyte.kobweb.compose.ui.Alignment
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.modifiers.fillMaxSize
import com.varabyte.kobweb.core.Page
import com.varabyte.kobweb.silk.components.forms.Button
import com.varabyte.kobweb.silk.components.forms.Input
import epicer.common.dto.user.LoginUserDTO
import epicer.frontend.data.login
import kotlinx.browser.localStorage
import kotlinx.coroutines.launch
import org.jetbrains.compose.web.attributes.InputType
import org.jetbrains.compose.web.dom.Form
import org.jetbrains.compose.web.dom.Text

@Page
@Composable
fun LoginPage() {

    var username by remember { mutableStateOf("") }
    var password by remember { mutableStateOf("") }

    val coroutineScope = rememberCoroutineScope()

    Column(
        modifier = Modifier.fillMaxSize(),
        horizontalAlignment = Alignment.CenterHorizontally,
        verticalArrangement = Arrangement.Center
    ) {
        Form() {
            // Username Input Field
            Text("Username:")
            Input(
                InputType.Text,
                placeholder = "ex: james",
                onValueChange = { username = it },
                value = username,
            )

            Text("Password:")
            Input(
                InputType.Password,
                placeholder = "ex: P4ssword!",
                onValueChange = { password = it },
                value = password,
            )

            // Login Button
            Button(
                onClick = {
                    coroutineScope.launch {
                        localStorage.setItem("jwtToken", "")

                        val loginUserDTO = LoginUserDTO(username, password)
                        val tokenDTO = login(loginUserDTO)

                        if (tokenDTO != null) {
                            localStorage.setItem("jwtToken", tokenDTO.token)
                        }
                    }
                }
            ) {
                Text("Login")
            }
        }
    }
}