package epicer.frontend.components.sections

import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue

import com.varabyte.kobweb.browser.dom.ElementTarget
import com.varabyte.kobweb.browser.dom.observers.IntersectionObserver
import com.varabyte.kobweb.compose.css.Cursor
import com.varabyte.kobweb.compose.css.OverflowWrap
import com.varabyte.kobweb.compose.css.TextAlign
import com.varabyte.kobweb.compose.css.TextDecorationLine
import com.varabyte.kobweb.compose.css.VerticalAlign
import com.varabyte.kobweb.compose.css.autoLength
import com.varabyte.kobweb.compose.foundation.layout.Arrangement
import com.varabyte.kobweb.compose.foundation.layout.Box
import com.varabyte.kobweb.compose.foundation.layout.Column
import com.varabyte.kobweb.compose.foundation.layout.Row
import com.varabyte.kobweb.compose.foundation.layout.RowDefaults.VerticalAlignment
import com.varabyte.kobweb.compose.foundation.layout.Spacer
import com.varabyte.kobweb.compose.ui.Alignment
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.modifiers.alignContent
import com.varabyte.kobweb.compose.ui.modifiers.alignItems
import com.varabyte.kobweb.compose.ui.modifiers.alignSelf
import com.varabyte.kobweb.compose.ui.modifiers.background
import com.varabyte.kobweb.compose.ui.modifiers.cursor
import com.varabyte.kobweb.compose.ui.modifiers.fillMaxHeight
import com.varabyte.kobweb.compose.ui.modifiers.fillMaxSize
import com.varabyte.kobweb.compose.ui.modifiers.fillMaxWidth
import com.varabyte.kobweb.compose.ui.modifiers.flexWrap
import com.varabyte.kobweb.compose.ui.modifiers.font
import com.varabyte.kobweb.compose.ui.modifiers.fontSize
import com.varabyte.kobweb.compose.ui.modifiers.height
import com.varabyte.kobweb.compose.ui.modifiers.margin
import com.varabyte.kobweb.compose.ui.modifiers.onFocusOut
import com.varabyte.kobweb.compose.ui.modifiers.outlineOffset
import com.varabyte.kobweb.compose.ui.modifiers.overflowWrap
import com.varabyte.kobweb.compose.ui.modifiers.padding
import com.varabyte.kobweb.compose.ui.modifiers.position
import org.jetbrains.compose.web.css.Position

import com.varabyte.kobweb.compose.ui.modifiers.size
import com.varabyte.kobweb.compose.ui.modifiers.textAlign
import com.varabyte.kobweb.compose.ui.modifiers.textDecorationLine
import com.varabyte.kobweb.compose.ui.modifiers.translateX
import com.varabyte.kobweb.compose.ui.modifiers.verticalAlign
import com.varabyte.kobweb.compose.ui.modifiers.width
import com.varabyte.kobweb.compose.ui.toAttrs
import com.varabyte.kobweb.silk.components.forms.Button
import com.varabyte.kobweb.silk.components.forms.ButtonSize
import com.varabyte.kobweb.silk.components.forms.CheckboxKind.Icon
import com.varabyte.kobweb.silk.components.forms.CheckboxVars.IconSize
import com.varabyte.kobweb.silk.components.icons.MoonIcon
import com.varabyte.kobweb.silk.components.icons.fa.FaCircleUser
import com.varabyte.kobweb.silk.components.icons.fa.IconSize
import com.varabyte.kobweb.silk.components.icons.fa.IconStyle
import com.varabyte.kobweb.silk.components.overlay.AdvancedPopover
import com.varabyte.kobweb.silk.components.overlay.Overlay
import com.varabyte.kobweb.silk.components.overlay.Popover
import com.varabyte.kobweb.silk.components.overlay.PopupStyle
import com.varabyte.kobweb.silk.components.text.SpanText
import com.varabyte.kobweb.silk.theme.colors.ColorMode
import epicer.common.dto.user.BaseUserDTO
import epicer.frontend.CircleButtonVariant
import epicer.frontend.UncoloredButtonVariant
import epicer.frontend.components.widgets.IconButton
import epicer.frontend.toSitePalette
import kotlinx.browser.localStorage
import kotlinx.serialization.json.Json
import org.jetbrains.compose.web.attributes.ATarget
import org.jetbrains.compose.web.css.AlignContent
import org.jetbrains.compose.web.css.Color
import org.jetbrains.compose.web.css.FlexWrap
import org.jetbrains.compose.web.css.cssRem
import org.jetbrains.compose.web.css.px
import org.jetbrains.compose.web.dom.A
import org.jetbrains.compose.web.dom.Text
import org.w3c.dom.HTMLDialogElement

//import com.varabyte.kobweb.silk.components.icons.fa

@Composable
fun NavHeader() {
    Row(
        modifier = Modifier
            .fillMaxWidth()
            .padding(topBottom = 20.px)
            .background(ColorMode.current.toSitePalette().nearBackground)
        ,
        //horizontalArrangement = Arrangement.SpaceBetween, // ✅ Spread items across header
        verticalAlignment = Alignment.CenterVertically // ✅ Keep items vertically aligned
    ) {
        HeaderNavigator()
//        Spacer()
        HeaderUser() // ✅ This stays on the left

        //SpanText("Some other content") // ✅ Placeholder for right-aligned content (like logout button)
    }
}

@Composable
private fun HeaderUser() {
    val storedUserJson = localStorage.getItem("myBaseUserDTO")
    val baseUserDTO = storedUserJson?.let { Json.decodeFromString<BaseUserDTO>(it) }
    var userOverlay by remember { mutableStateOf(false) }
    var layoutCoordinates by remember { mutableStateOf<ElementTarget?>(null) }

    Row(
        modifier = Modifier
            .margin(right = 60.px)
        ,
        horizontalArrangement = Arrangement.End, // ✅ Keep content aligned to the left
        verticalAlignment = Alignment.CenterVertically
    ) {
        SpanText(
            text = baseUserDTO?.name ?: "UsernameNotFound",
            modifier = Modifier
                .fontSize(30.px)
            ,
        )

        Button(
            onClick = {
                userOverlay = !userOverlay
            },
            variant = CircleButtonVariant.then(UncoloredButtonVariant),
            modifier = Modifier
                .fillMaxSize()
                .margin(left = 20.px)
            ,
        ) {
            FaCircleUser(
                style = IconStyle.FILLED,
                modifier = Modifier
                    .fontSize(50.px)
                    .padding(8.px)
            )
            if (userOverlay) {
                Overlay(
                    modifier = Modifier
                        .width(100.px)
                        .height(100.px)
                        .position(Position.Relative)
                        .translateX(20.px)
                    ,
                ) {
                    SpanText(
                        "CIAO"
                    )
                }
            }
        }


    }
}

@Composable
private fun HeaderNavigator() {
    Row(
        modifier = Modifier
            .fillMaxWidth()
        ,
        horizontalArrangement = Arrangement.End,
    ) {
        Text("")
    }
}
