package epicer.frontend

import epicer.common.administratorRole
import epicer.common.maintainerRole
import epicer.frontend.views.Administration.UsersView
import epicer.frontend.views.Administration.CreateUserView
import epicer.frontend.views.LoginView
import epicer.frontend.views.MainView
import epicer.frontend.views.RecipeView
import epicer.frontend.views.Administration.UpdateUserView
import epicer.frontend.views.Maintenance.Ingredients.CreateIngredientView
import epicer.frontend.views.Maintenance.Ingredients.IngredientsView
import epicer.frontend.views.Maintenance.Units.CreateUnitTypeView
import epicer.frontend.views.Maintenance.Units.CreateUnitView
import epicer.frontend.views.Maintenance.Units.UnitsView
import epicer.frontend.views.Maintenance.Units.UpdateUnitTypeView
import epicer.frontend.views.Maintenance.Units.UpdateUnitView
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
import io.kvision.i18n.DefaultI18nManager
import io.kvision.i18n.I18n
import io.kvision.module
import io.kvision.panel.SimplePanel
import io.kvision.panel.root
import io.kvision.require
import io.kvision.routing.Routing
import io.kvision.startApplication
import io.kvision.theme.Theme
import io.kvision.theme.ThemeManager
import io.kvision.toast.ToastContainer
import io.kvision.toast.ToastContainerPosition
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

        ThemeManager.init(initialTheme = Theme.DARK, remember = false)

        val root = root("kvapp")
        val toastContainer = ToastContainer(ToastContainerPosition.BOTTOMRIGHT)

        val mainContainer = SimplePanel()

        // Initialize Routing with path-based navigation (no hash)
        val routing = Routing.init(useHash = true)

        root.add(mainContainer)

        routing
            .on("/", {
                authNavigate(routing, toastContainer) {
                    root.removeAll()
                    root.removeAll()
                    root.add(MainView(routing))
                }
            })
            .on("/login", {
                root.removeAll()
                root.add(LoginView(routing))
            })
            .on(RegExp("^recipes/(.*)"), { match ->
                authNavigate(routing, toastContainer) {
                    val recipeId = match.data[0]
                    root.removeAll()
                    root.add(RecipeView(routing, recipeId))
                }
            })
            .on(usersRoute, {
                authRoleNavigate(administratorRole, routing, toastContainer) {
                    root.removeAll()
                    root.add(UsersView(routing))
                }
            })
            .on(createUserRoute, {
                authRoleNavigate(administratorRole, routing, toastContainer) {
                    root.removeAll()
                    root.add(CreateUserView(routing))
                }
            })
            .on(RegExp("^administration/users/(.*)"), { match ->
                authRoleNavigate(administratorRole, routing, toastContainer) {
                    val userId = match.data[0]
                    println(userId)
                    root.removeAll()
                    root.add(UpdateUserView(routing, userId))
                }
            })
            .on(ingredientsRoute, {
                authRoleNavigate(maintainerRole, routing, toastContainer) {
                    root.removeAll()
                    root.add(IngredientsView(routing))
                }
            })
            .on(createIngredientsRoute, {
                authRoleNavigate(maintainerRole, routing, toastContainer) {
                    root.removeAll()
                    root.add(CreateIngredientView(routing))
                }
            })
            .on(unitsRoute, {
                authRoleNavigate(maintainerRole, routing, toastContainer) {
                    root.removeAll()
                    root.add(UnitsView(routing))
                }
            })
            .on(createUnitTypesRoute, {
                authRoleNavigate(maintainerRole, routing, toastContainer) {
                    root.removeAll()
                    root.add(CreateUnitTypeView(routing))
                }
            })
            .on(RegExp("^maintenance/units/types/(.*)"), { match ->
                authRoleNavigate(administratorRole, routing, toastContainer) {
                    val unitTypeId = match.data[0]
                    root.removeAll()
                    root.add(UpdateUnitTypeView(routing, unitTypeId))
                }
            })
            .on(createUnitRoute, {
                authRoleNavigate(maintainerRole, routing, toastContainer) {
                    root.removeAll()
                    root.add(CreateUnitView(routing))
                }
            })
            .on(RegExp("^maintenance/units/(.*)"), { match ->
                authRoleNavigate(administratorRole, routing, toastContainer) {
                    val unitId = match.data[0]
                    root.removeAll()
                    root.add(UpdateUnitView(routing, unitId))
                }
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
