package epicer.frontend.views

import epicer.frontend.components.HeaderComponent
import epicer.frontend.data.getRecipe
import epicer.frontend.data.isLogged
import io.kvision.core.AlignItems
import io.kvision.core.Background
import io.kvision.core.Border
import io.kvision.core.BorderStyle
import io.kvision.core.BsBgColor
import io.kvision.core.BsBorder
import io.kvision.core.Col
import io.kvision.core.Color
import io.kvision.core.Cursor
import io.kvision.core.Display
import io.kvision.core.FlexWrap
import io.kvision.core.Style
import io.kvision.core.TextAlign
import io.kvision.core.Transition
import io.kvision.core.VerticalAlign
import io.kvision.core.addBsBgColor
import io.kvision.core.addBsBorder
import io.kvision.core.onChange
import io.kvision.core.onInput
import io.kvision.core.removeBsBgColor
import io.kvision.core.removeBsBorder
import io.kvision.core.style
import io.kvision.dropdown.dropDown
import io.kvision.form.form
import io.kvision.form.text.text
import io.kvision.form.text.textArea
import io.kvision.form.text.textInput
import io.kvision.html.Align
import io.kvision.html.Button
import io.kvision.html.InputType
import io.kvision.html.br
import io.kvision.html.button
import io.kvision.html.div
import io.kvision.html.h1
import io.kvision.html.h3
import io.kvision.html.h4
import io.kvision.html.h5
import io.kvision.html.h6
import io.kvision.html.p
import io.kvision.html.span
import io.kvision.navbar.NavbarColor
import io.kvision.navbar.NavbarExpand
import io.kvision.navbar.nav
import io.kvision.navbar.navLink
import io.kvision.navbar.navText
import io.kvision.navbar.navbar
import io.kvision.panel.SimplePanel
import io.kvision.panel.StackPanel
import io.kvision.panel.stackPanel
import io.kvision.panel.vPanel
import io.kvision.routing.Routing
import io.kvision.state.ObservableState
import io.kvision.state.ObservableValue
import io.kvision.state.bind
import io.kvision.toolbar.buttonGroup
import io.kvision.toolbar.toolbar
import io.kvision.utils.auto
import io.kvision.utils.pc
import io.kvision.utils.perc
import io.kvision.utils.px
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import kotlin.Double
import kotlin.properties.Delegates.observable

class RecipeView(private val routing: Routing, recipeId: Int) : SimplePanel() {
    init {
        val customScope = CoroutineScope(Dispatchers.Main)

        customScope.launch {
            if (!isLogged()) {
                routing.navigate("/login")
            }
        }
        add(HeaderComponent(routing))

        customScope.launch {
            val recipe = getRecipe(recipeId)
            if (recipe != null) {
                val portionsState = ObservableValue(recipe.portions)

                vPanel {
                    marginTop = 25.px
                    alignItems = AlignItems.CENTER

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
                        maxWidth = 900.px

                        lateinit var ingredientsButton: Button
                        lateinit var stepsButton: Button

                        nav {
                            padding = 7.px

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
                            val portionsInput = textInput(
                                value = recipe.portions.toString(),
                                maxlength = 4,
                                type = InputType.NUMBER,
                            ) {
                                height = auto
                                width = 80.px
                                textAlign = TextAlign.LEFT

                                onInput {
                                    val newPortion = this.value?.toIntOrNull() ?: recipe.portions
                                    if (newPortion != null && newPortion >= 1) {
                                        portionsState.value = newPortion
                                    } else {
                                        this.value = 1.toString()
                                    }
                                }
                            }

                            portionsInput.onInput {
                                val newPortions = portionsInput.value?.toIntOrNull() ?: recipe.portions
                                // Update ingredients based on the new portion size
                            }
                        }
                    }

                    panel = stackPanel {


                        vPanel {
                            bind(portionsState) { newPortions ->
                                recipe.ingredientsInRecipe.forEach { ingredientInRecipe ->
                                    h4(ingredientInRecipe.ingredient.nameSingular)
                                    h6(
                                        (ingredientInRecipe.quantity?.div(recipe.portions ?: 1)
                                            ?.times(newPortions ?: 1)).toString()
                                    )

                                    h6(ingredientInRecipe.unit?.name)
                                }
                            }
                        }

                        vPanel {
                            bind(portionsState) { newPortions ->
                                recipe.sections.forEach { section ->
                                    h3("${section.name} ${section.index}")
                                    section.steps.forEach { step ->
                                        h4("${step.name} ${step.index}")
                                        h5(step.description)
                                        step.ingredientsInRecipe.forEach { ingredientInRecipe ->
                                            h6(ingredientInRecipe.ingredient.nameSingular)
                                            h6(
                                                (ingredientInRecipe.quantity?.div(recipe.portions ?: 1)
                                                    ?.times(newPortions ?: 1)).toString()
                                            )
                                            h6(ingredientInRecipe.unit?.name)
                                        }
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

