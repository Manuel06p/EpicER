package epicer.frontend.views.Recipes

import epicer.frontend.components.HeaderComponent
import epicer.frontend.components.ingredientInRecipeCard
import epicer.frontend.data.RecipeService
import epicer.frontend.data.RecipeService.Companion.deleteRecipe
import epicer.frontend.data.SectionService.Companion.deleteSection
import epicer.frontend.getMyId
import epicer.frontend.recipesRoute
import io.kvision.core.AlignContent
import io.kvision.core.AlignItems
import io.kvision.core.Border
import io.kvision.core.BorderStyle
import io.kvision.core.BsBgColor
import io.kvision.core.BsColor
import io.kvision.core.Cursor
import io.kvision.core.Display
import io.kvision.core.FlexWrap
import io.kvision.core.FontWeight
import io.kvision.core.ListStyle
import io.kvision.core.ListStyleType
import io.kvision.core.TextAlign
import io.kvision.core.addBsBgColor
import io.kvision.core.onInput
import io.kvision.core.removeBsBgColor
import io.kvision.dropdown.ddLink
import io.kvision.dropdown.dropDown
import io.kvision.form.number.spinnerInput
import io.kvision.html.Align
import io.kvision.html.Button
import io.kvision.html.ButtonStyle
import io.kvision.html.button
import io.kvision.html.div
import io.kvision.html.h1
import io.kvision.html.h3
import io.kvision.html.h4
import io.kvision.html.h5
import io.kvision.html.li
import io.kvision.html.ol
import io.kvision.html.p
import io.kvision.html.span
import io.kvision.modal.Confirm
import io.kvision.navbar.NavbarExpand
import io.kvision.navbar.nav
import io.kvision.navbar.navbar
import io.kvision.panel.StackPanel
import io.kvision.panel.VPanel
import io.kvision.panel.gridPanel
import io.kvision.panel.stackPanel
import io.kvision.panel.vPanel
import io.kvision.routing.Routing
import io.kvision.state.ObservableValue
import io.kvision.toast.ToastContainer
import io.kvision.toast.ToastContainerPosition
import io.kvision.utils.auto
import io.kvision.utils.perc
import io.kvision.utils.px
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch

class RecipeView(private val routing: Routing, recipeId: Int) : VPanel() {
    private val customScope = CoroutineScope(Dispatchers.Main)
    private val toastContainer = ToastContainer(ToastContainerPosition.BOTTOMRIGHT)

    init {

        marginBottom = 50.px

        add(HeaderComponent(routing))
        alignItems = AlignItems.CENTER
        customScope.launch {
            val recipe = RecipeService.Companion.getRecipe(recipeId)
            if (recipe != null) {
                val portionsState = ObservableValue(recipe.portions)

                vPanel {
                    marginTop = 25.px
                    alignItems = AlignItems.CENTER
                    width = 80.perc
                    maxWidth = 800.px
                    marginRight = 50.px
                    marginLeft = 50.px

                    lateinit var panel: StackPanel

                    div() {
                        textAlign = TextAlign.CENTER
                        h1(recipe.name)
                        p(recipe.description)

                        marginBottom = 25.px
                    }
                    navbar(
                        bgColor = BsBgColor.BODYSECONDARY,
                        expand = NavbarExpand.ALWAYS
                    ) {
                        borderRadius = 25.px
                        width = 100.perc

                        lateinit var ingredientsButton: Button
                        lateinit var stepsButton: Button

                        nav {
                            padding = 7.px
                            if (recipe.owner == getMyId()) {
                                dropDown(
                                    text = "",
                                    icon = "fas fa-bars",
                                    arrowVisible = false,
                                    style = ButtonStyle.SECONDARY
                                ) {
                                    marginRight = 10.px
                                    ddLink("Update", icon = "fas fa-edit") {
                                        cursor = Cursor.POINTER
                                        onClick {
                                            routing.navigate("$recipesRoute/${recipe.id}/edit")
                                        }
                                    }
                                    ddLink("Delete", icon = "fas fa-trash") {
                                        cursor = Cursor.POINTER
                                        onClick {
                                            Confirm.show(
                                                "Recipe deletion",
                                                "Do you really want to delete this recipe?",
                                                align = Align.LEFT
                                            ) {
                                                customScope.launch {
                                                    if (deleteRecipe(recipeId = recipeId)) {
                                                        routing.navigate(recipesRoute)
                                                        toastContainer.showToast(
                                                            message = "Recipe deleted successfully!",
                                                            color = BsColor.SUCCESSBG
                                                        )
                                                    } else {
                                                        toastContainer.showToast(
                                                            message = "Recipe deletion failed",
                                                            color = BsColor.DANGERBG
                                                        )
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            ingredientsButton = button(
                                text = "Ingredients",
                                icon = "fas fa-carrot",
                            ) {

                                border = Border(style = BorderStyle.NONE)

                                onClick {
                                    panel.activeIndex = 0

                                    ingredientsButton.removeBsBgColor(BsBgColor.BODYSECONDARY)
                                    stepsButton.addBsBgColor(BsBgColor.BODYSECONDARY)
                                }
                            }

                            stepsButton = button(
                                text = "Steps",
                                icon = "fas fa-list-ol",
                            ) {
                                addBsBgColor(BsBgColor.BODYSECONDARY)
                                border = Border(style = BorderStyle.NONE)

                                marginLeft = 20.px
                                onClick {
                                    panel.activeIndex = 1

                                    stepsButton.removeBsBgColor(BsBgColor.BODYSECONDARY)
                                    ingredientsButton.addBsBgColor(BsBgColor.BODYSECONDARY)
                                }
                            }

                        }
                        span()
                        nav(rightAlign = true) {
                            height = 100.perc
                            display = Display.FLEX // ✅ Add this
                            alignItems = AlignItems.CENTER // ✅ Vertical center
                            flexWrap = FlexWrap.WRAP // ✅ Add this!

                            span("Portions:") {
                                marginRight = 8.px
                            }

                            val portionsInput = spinnerInput(
                                value = recipe.portions,
                                min = 1,
                            ) {
                                height = auto
                                width = 80.px
                                textAlign = TextAlign.LEFT

                                onInput {
                                    val newPortion = this.value?.toInt() ?: recipe.portions
                                    portionsState.value = newPortion
                                }
                            }
                        }
                    }

                    panel = stackPanel {
                        width = 100.perc
                        // Ingredients Panel
                        vPanel {
                            marginTop = 40.px
                            alignItems = AlignItems.CENTER
                            gridPanel(
                                templateColumns = "repeat(auto-fill, minmax(300px, 1fr))",
                                alignItems = AlignItems.CENTER,
                                alignContent = AlignContent.CENTER,
                                rowGap = 15
                            ) {
                                width = 90.perc
                                recipe.ingredientsInRecipe.forEach { ingredientInRecipe ->
                                    ingredientInRecipeCard(ingredientInRecipe, portionsState, recipe.portions, customScope)
                                }
                            }

                            if (recipe.owner == getMyId()) {
                                button("Edit ingredients", icon = "fas fa-edit") {
                                    marginTop = 25.px
                                    width = 100.perc
                                    onClick {
                                        routing.navigate("${recipesRoute}/$recipeId/ingredients")
                                    }
                                }
                            }

                        }
                        vPanel {
                            marginTop = 25.px
                            padding = 15.px
                            alignItems = AlignItems.STRETCH // <-- This is key
                            ol() {
                                listStyle = ListStyle(ListStyleType.NONE)
                                recipe.sections.forEach { section ->
                                    // Section Title
                                    h3("${section.index}. ${section.name?:""}") {
                                        marginTop = 20.px
                                        marginBottom = 10.px
                                        fontWeight = FontWeight.BOLD
                                        fontSize = 30.px
                                    }
                                    h5(section.description ?: "") {
                                        marginBottom = 15.px
                                        fontWeight = FontWeight.LIGHTER
                                        fontSize = 20.px
                                    }
                                    ol() {
                                        listStyle = ListStyle(ListStyleType.NONE)
                                        section.steps.forEach { step ->
                                            // Step Title
                                            h4("Step ${step.index}. ${step.name?:""}") {
                                                marginTop = 15.px
                                                marginBottom = 5.px
                                                fontWeight = FontWeight.NORMAL
                                                fontSize = 24.px
                                            }
                                            li() {

                                                // Step Description
                                                h5(step.description) {
                                                    marginBottom = 15.px
                                                    fontWeight = FontWeight.LIGHTER
                                                    fontSize = 20.px
                                                }

                                                // Ingredients list for this step
                                                gridPanel(
                                                    templateColumns = "repeat(auto-fill, minmax(200px, 1fr))",
                                                    alignItems = AlignItems.CENTER,
                                                    alignContent = AlignContent.CENTER,
                                                )  {
                                                    step.ingredientsInRecipe.forEach { ingredientInRecipe ->
                                                        // Card or panel to display ingredient info
                                                        ingredientInRecipeCard(
                                                            ingredientInRecipe = ingredientInRecipe,
                                                            portionsState = portionsState,
                                                            recipePortions = recipe.portions,
                                                            customScope = customScope,
                                                            imageSize = 64.px,
                                                            nameFontSize = 18.px,
                                                            quantityFontSize = 15.px,
                                                            imageRightMargin = 20.px,
                                                            leftMargin = 40.px,
                                                        )
                                                    }
                                                }

                                                marginBottom = 15.px
                                            }

                                        }
                                    }

                                }
                            }
                            if (recipe.owner == getMyId()) {
                                button("Edit steps", icon = "fas fa-edit") {
                                    marginTop = 25.px
                                    width = 100.perc
                                    onClick {
                                        routing.navigate("${recipesRoute}/$recipeId/steps")
                                    }
                                }
                            }

                        }

                        activeIndex = 0
                    }
                }
            }
        }
    }
}