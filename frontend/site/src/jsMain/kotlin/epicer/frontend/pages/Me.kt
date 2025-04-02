package epicer.frontend.pages

import androidx.compose.runtime.*
import com.varabyte.kobweb.compose.css.FontWeight

import com.varabyte.kobweb.compose.foundation.layout.Arrangement
import com.varabyte.kobweb.compose.foundation.layout.Box
import com.varabyte.kobweb.compose.foundation.layout.Column
import com.varabyte.kobweb.compose.foundation.layout.Row
import com.varabyte.kobweb.compose.foundation.layout.Spacer
import com.varabyte.kobweb.compose.ui.Alignment
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.modifiers.background
import com.varabyte.kobweb.compose.ui.modifiers.borderRadius
import com.varabyte.kobweb.compose.ui.modifiers.color
import com.varabyte.kobweb.compose.ui.modifiers.fillMaxSize
import com.varabyte.kobweb.compose.ui.modifiers.fillMaxWidth
import com.varabyte.kobweb.compose.ui.modifiers.fontSize
import com.varabyte.kobweb.compose.ui.modifiers.fontWeight
import com.varabyte.kobweb.compose.ui.modifiers.padding
import com.varabyte.kobweb.core.Page
import com.varabyte.kobweb.silk.components.forms.Button
import com.varabyte.kobweb.silk.components.text.SpanText
import epicer.frontend.data.getMyBaseUserDTO
import kotlinx.coroutines.launch
import org.jetbrains.compose.web.css.Color
import org.jetbrains.compose.web.css.px

@Page
@Composable
fun ProfilePage() {
    var username by remember { mutableStateOf("") }
    var name by remember { mutableStateOf("") }
    var roles by remember { mutableStateOf("") }
    var createdAt by remember { mutableStateOf("") }

    val coroutineScope = rememberCoroutineScope()

    Column(
        modifier = Modifier.fillMaxSize()
            .padding(20.px)
            .borderRadius(12.px),
        horizontalAlignment = Alignment.CenterHorizontally,
        verticalArrangement = Arrangement.Center
    ) {
        Box(
           modifier = Modifier
               .fillMaxWidth()
               .background(Color("#17153B"))
               .padding(16.px)
               .borderRadius(12.px),

       ) {
           Column(
               modifier = Modifier.padding(24.px),
               horizontalAlignment = Alignment.CenterHorizontally
           ) {
               SpanText("User Profile",
                   modifier = Modifier
                       .fontSize(24.px)
                       .fontWeight(FontWeight.Bold)
               )

               Spacer()

               ProfileDetail(label = "Username", value = username)
               ProfileDetail(label = "Name", value = name)
               ProfileDetail(label = "Roles", value = roles)
               ProfileDetail(label = "Created At", value = createdAt)

               Spacer()

               Button(
                   onClick = {
                       coroutineScope.launch {
                           val baseUserDTO = getMyBaseUserDTO()
                           if (baseUserDTO != null) {
                               username = baseUserDTO.username
                               name = baseUserDTO.name
                               roles = baseUserDTO.roles.joinToString(", ")
                               createdAt = baseUserDTO.created_at.toString()
                           }
                       }
                   },
                   modifier = Modifier.padding(top = 10.px)
                       .color(Color.white)
                       .borderRadius(8.px)
                       .padding(10.px)
               ) {
                   SpanText(
                       "Get My Profile",
                       modifier = Modifier
                           .fontSize(16.px)
                           .fontWeight(FontWeight.Bold)
                   )
               }
           }
       }
    }
}

@Composable
fun ProfileDetail(label: String, value: String) {
    Row(
        modifier = Modifier
            .fillMaxWidth()
            .padding(topBottom = 20.px),
        horizontalArrangement = Arrangement.SpaceBetween
    ) {
        SpanText(
            "$label:",
            modifier = Modifier
                .fontWeight(FontWeight.SemiBold)
        )
        SpanText(
            value.ifEmpty { "N/A" },
            modifier = Modifier
        )
    }
}