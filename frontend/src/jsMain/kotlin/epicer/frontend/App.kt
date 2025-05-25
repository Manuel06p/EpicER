package epicer.frontend

import epicer.common.administratorRole
import epicer.common.maintainerRole
import epicer.frontend.components.FooterComponent
import epicer.frontend.components.HeaderComponent
import epicer.frontend.views.Administration.UsersView
import epicer.frontend.views.Administration.CreateUserView
import epicer.frontend.views.LoginView
import epicer.frontend.views.MainView
import epicer.frontend.views.Recipes.RecipeView
import epicer.frontend.views.Administration.UpdateUserView
import epicer.frontend.views.Recipes.CreateRecipeView
import epicer.frontend.views.Maintenance.Ingredients.CreateIngredientView
import epicer.frontend.views.Maintenance.Ingredients.IngredientsView
import epicer.frontend.views.Maintenance.Ingredients.UpdateIngredientView
import epicer.frontend.views.Maintenance.Units.CreateUnitTypeView
import epicer.frontend.views.Maintenance.Units.CreateUnitView
import epicer.frontend.views.Maintenance.Units.UnitsView
import epicer.frontend.views.Maintenance.Units.UpdateUnitTypeView
import epicer.frontend.views.Maintenance.Units.UpdateUnitView
import epicer.frontend.views.MyUserView
import epicer.frontend.views.Recipes.AllRecipesView
import epicer.frontend.views.Recipes.UpdateIngredientsInRecipeView
import epicer.frontend.views.Recipes.UpdateRecipeView
import epicer.frontend.views.Recipes.UpdateStepsView
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
import io.kvision.core.Display
import io.kvision.core.FlexDirection
import io.kvision.core.Overflow
import io.kvision.html.Div
import io.kvision.i18n.DefaultI18nManager
import io.kvision.i18n.I18n
import io.kvision.module
import io.kvision.panel.DockPanel
import io.kvision.panel.Side
import io.kvision.panel.SimplePanel
import io.kvision.panel.root
import io.kvision.require
import io.kvision.routing.Routing
import io.kvision.startApplication
import io.kvision.theme.Theme
import io.kvision.theme.ThemeManager
import io.kvision.toast.ToastContainer
import io.kvision.toast.ToastContainerPosition
import io.kvision.utils.auto
import io.kvision.utils.perc
import io.kvision.utils.px
import io.kvision.utils.vh
import io.kvision.utils.vmax
import kotlinx.browser.document
import kotlin.js.RegExp

class App : Application() {

    override fun start() {
        document.title = "EpicER"

        setFavicon("/assets/favicon/favicon.ico") // or a full URL or a base64-encoded data URI


        I18n.manager =
            DefaultI18nManager(
                mapOf(
                    "pl" to require("i18n/messages-pl.json"),
                    "en" to require("i18n/messages-en.json")
                )
            )

        ThemeManager.init(initialTheme = Theme.DARK, remember = false)

        val root = root("kvapp")
        val base = DockPanel() {
            height = 100.vh // Full viewport height
        }

        val main = SimplePanel()
        root.add(base)

        val toastContainer = ToastContainer(ToastContainerPosition.BOTTOMRIGHT)

        // Initialize Routing with path-based navigation (no hash)
        val routing = Routing.init(useHash = true)

        base.add(main, Side.CENTER)
        base.add(FooterComponent(), Side.DOWN)

        main.marginBottom = 100.px
        routing
            .on("/", {
                authNavigate(routing, toastContainer) {
                    main.removeAll()
                    routing.navigate(recipesRoute)
                }
            })
            .on("/allRecipes", {
                authNavigate(routing, toastContainer) {
                    main.removeAll()
                    main.add(AllRecipesView(routing))
                }
            })
            .on("/login", {
                main.removeAll()
                main.add(LoginView(routing))
            })
            .on("/my-user", {
                authNavigate(routing, toastContainer) {
                    main.removeAll()
                    main.add(MyUserView(routing))
                }
            })
            .on(recipesRoute, {
                authNavigate(routing, toastContainer) {
                    main.removeAll()
                    main.add(MainView(routing))
                }
            })
            .on(createRecipeRoute, {
                authNavigate(routing, toastContainer) {
                    main.removeAll()
                    main.add(CreateRecipeView(routing))
                    
                }
            })
            .on(RegExp("^recipes/(.*)/ingredients"), { match ->
                authNavigate(routing, toastContainer) {
                    val recipeId = match.data[0]
                    main.removeAll()
                    main.add(UpdateIngredientsInRecipeView(routing, recipeId))
                    
                }
            })
            .on(RegExp("^recipes/(.*)/steps"), { match ->
                authNavigate(routing, toastContainer) {
                    val recipeId = match.data[0]
                    main.removeAll()
                    main.add(UpdateStepsView(routing, recipeId))
                    
                }
            })
            .on(RegExp("^recipes/(.*)/edit"), { match ->
                authNavigate(routing, toastContainer) {
                    val recipeId = match.data[0]
                    main.removeAll()
                    main.add(UpdateRecipeView(routing, recipeId))
                    
                }
            })
            .on(RegExp("^recipes/(.*)"), { match ->
                authNavigate(routing, toastContainer) {
                    val recipeId = match.data[0]
                    main.removeAll()
                    main.add(RecipeView(routing, recipeId))
                    
                }
            })

            .on(usersRoute, {
                authRoleNavigate(administratorRole, routing, toastContainer) {
                    main.removeAll()
                    main.add(UsersView(routing))
                    
                }
            })
            .on(createUserRoute, {
                authRoleNavigate(administratorRole, routing, toastContainer) {
                    main.removeAll()
                    main.add(CreateUserView(routing))
                    
                }
            })
            .on(RegExp("^administration/users/(.*)"), { match ->
                authRoleNavigate(administratorRole, routing, toastContainer) {
                    val userId = match.data[0]
                    println(userId)
                    main.removeAll()
                    main.add(UpdateUserView(routing, userId))
                    
                }
            })
            .on(ingredientsRoute, {
                authRoleNavigate(maintainerRole, routing, toastContainer) {
                    main.removeAll()
                    main.add(IngredientsView(routing))
                    
                }
            })
            .on(createIngredientsRoute, {
                authRoleNavigate(maintainerRole, routing, toastContainer) {
                    main.removeAll()
                    main.add(CreateIngredientView(routing))
                    
                }
            })
            .on(RegExp("^maintenance/ingredients/(.*)"), { match ->
                authRoleNavigate(maintainerRole, routing, toastContainer) {
                    val ingredientId = match.data[0]
                    main.removeAll()
                    main.add(UpdateIngredientView(routing, ingredientId))
                    
                }
            })
            .on(unitsRoute, {
                authRoleNavigate(maintainerRole, routing, toastContainer) {
                    main.removeAll()
                    main.add(UnitsView(routing))
                    
                }
            })
            .on(createUnitTypesRoute, {
                authRoleNavigate(maintainerRole, routing, toastContainer) {
                    main.removeAll()
                    main.add(CreateUnitTypeView(routing))
                    
                }
            })
            .on(RegExp("^maintenance/units/types/(.*)"), { match ->
                authRoleNavigate(maintainerRole, routing, toastContainer) {
                    val unitTypeId = match.data[0]
                    main.removeAll()
                    main.add(UpdateUnitTypeView(routing, unitTypeId))
                    
                }
            })
            .on(createUnitRoute, {
                authRoleNavigate(maintainerRole, routing, toastContainer) {
                    main.removeAll()
                    main.add(CreateUnitView(routing))
                    
                }
            })
            .on(RegExp("^maintenance/units/(.*)"), { match ->
                authRoleNavigate(maintainerRole, routing, toastContainer) {
                    val unitId = match.data[0]
                    main.removeAll()
                    main.add(UpdateUnitView(routing, unitId))
                    
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

fun setFavicon(url: String) {
    // Try to find an existing favicon link
    val existingIcon = document.querySelector("link[rel~='icon']") ?: run {
        // If not found, create one
        val newIcon = document.createElement("link")
        newIcon.setAttribute("rel", "icon")
        document.head?.appendChild(newIcon)
        newIcon
    }

    (existingIcon as? org.w3c.dom.HTMLLinkElement)?.href = url
}