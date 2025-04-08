package epicer.frontend

import epicer.frontend.views.LoginView
import epicer.frontend.views.MainView
import epicer.frontend.views.RecipeView
import io.kvision.Application
import io.kvision.CoreModule
import io.kvision.BootstrapModule
import io.kvision.BootstrapCssModule
import io.kvision.DatetimeModule
import io.kvision.RichTextModule
import io.kvision.TomSelectModule
import io.kvision.BootstrapUploadModule
import io.kvision.ImaskModule
import io.kvision.ToastifyModule
import io.kvision.FontAwesomeModule
import io.kvision.BootstrapIconsModule
import io.kvision.PrintModule
import io.kvision.ChartModule
import io.kvision.TabulatorModule
import io.kvision.TabulatorCssBootstrapModule
import io.kvision.MapsModule
import io.kvision.html.H3
import io.kvision.i18n.DefaultI18nManager
import io.kvision.i18n.I18n
import io.kvision.module
import io.kvision.panel.SimplePanel
import io.kvision.panel.root
import io.kvision.require
import io.kvision.routing.Routing
import io.kvision.startApplication
import io.kvision.theme.ThemeManager
import kotlin.js.RegExp

class App : Application() {
    override fun start() {
        I18n.manager =
            DefaultI18nManager(
                mapOf(
                    "pl" to require("i18n/messages-pl.json"),
                    "en" to require("i18n/messages-en.json")
                )
            )

        ThemeManager.init()

        val root = root("kvapp")

        val mainContainer = SimplePanel()

        // Initialize Routing with path-based navigation (no hash)
        val routing = Routing.init(useHash = true)

        root.add(mainContainer)

        routing
            .on("/", {
                root.removeAll()
                root.removeAll()
                root.add(MainView(routing))
            })
            .on("/login", {
                root.removeAll()
                root.add(LoginView(routing))
            })
            .on(RegExp("^recipes/(.*)"), { match ->
                val recipeId = match.data[0]
                root.removeAll()
                root.add(RecipeView(routing, recipeId))
            })
            .on("/dashboard", {
                root.removeAll()
                root.add(H3("Welcome to Dashboard!"))
            })
            .resolve()
    }
}

fun main() {
    startApplication(
        ::App,
        module.hot,
        BootstrapModule,
        BootstrapCssModule,
        DatetimeModule,
        RichTextModule,
        TomSelectModule,
        BootstrapUploadModule,
        ImaskModule,
        ToastifyModule,
        FontAwesomeModule,
        BootstrapIconsModule,
        PrintModule,
        ChartModule,
        TabulatorModule,
        TabulatorCssBootstrapModule,
        MapsModule,
        CoreModule
    )
}
