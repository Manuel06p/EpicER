package epicer.frontend.components

import io.kvision.core.AlignItems
import io.kvision.core.Background
import io.kvision.core.BsBgColor
import io.kvision.core.Color
import io.kvision.core.FontStyle
import io.kvision.core.FontVariant
import io.kvision.core.JustifyContent
import io.kvision.core.Position
import io.kvision.core.TextAlign
import io.kvision.core.TextDecoration
import io.kvision.core.TextDecorationLine
import io.kvision.core.TextDecorationStyle
import io.kvision.core.VerticalAlign
import io.kvision.core.addBsBgColor
import io.kvision.core.addBsBorder
import io.kvision.html.Footer
import io.kvision.html.Span
import io.kvision.html.link
import io.kvision.html.span
import io.kvision.panel.HPanel
import io.kvision.panel.hPanel
import io.kvision.panel.vPanel
import io.kvision.utils.auto
import io.kvision.utils.perc
import io.kvision.utils.px

class FooterComponent : Footer() {
    init {
        padding = 16.px
        background = Background(Color("#0d0d0d"))

        width = 100.perc

        vPanel {
            hPanel(spacing = 8) {
                textAlign = TextAlign.CENTER
                marginLeft = auto
                marginRight = auto
                span("Made with ❤️ by ")
                link("Manuel06p", url = "https://github.com/Manuel06p") {
                    target = "_blank"
                    textDecoration = TextDecoration(TextDecorationLine.NONE)
                }
                span(" - Code available ")
                link("here", url = "https://github.com/Manuel06p/EpicER") {
                    target = "_blank"
                    textDecoration = TextDecoration(TextDecorationLine.NONE)
                }
            }
        }

    }
}