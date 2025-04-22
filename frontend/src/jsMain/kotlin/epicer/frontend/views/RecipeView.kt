package epicer.frontend.views

import epicer.frontend.components.HeaderComponent
import epicer.frontend.components.ingredientInRecipeCard
import epicer.frontend.data.RecipeService.Companion.getRecipe
import epicer.frontend.image_not_found
import epicer.frontend.recipesRoute
import io.kvision.core.AlignContent
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
import io.kvision.core.FlexDirection
import io.kvision.core.FlexWrap
import io.kvision.core.FontWeight
import io.kvision.core.ListStyle
import io.kvision.core.ListStyleType
import io.kvision.core.Placement
import io.kvision.core.Style
import io.kvision.core.TextAlign
import io.kvision.core.TooltipOptions
import io.kvision.core.Transition
import io.kvision.core.Trigger
import io.kvision.core.VerticalAlign
import io.kvision.core.addBsBgColor
import io.kvision.core.addBsBorder
import io.kvision.core.enableTooltip
import io.kvision.core.onChange
import io.kvision.core.onInput
import io.kvision.core.removeBsBgColor
import io.kvision.core.removeBsBorder
import io.kvision.core.style
import io.kvision.dropdown.dropDown
import io.kvision.form.form
import io.kvision.form.number.spinnerInput
import io.kvision.form.text.text
import io.kvision.form.text.textArea
import io.kvision.form.text.textInput
import io.kvision.html.Align
import io.kvision.html.Button
import io.kvision.html.ImageShape
import io.kvision.html.InputType
import io.kvision.html.br
import io.kvision.html.button
import io.kvision.html.div
import io.kvision.html.h1
import io.kvision.html.h3
import io.kvision.html.h4
import io.kvision.html.h5
import io.kvision.html.h6
import io.kvision.html.icon
import io.kvision.html.image
import io.kvision.html.li
import io.kvision.html.ol
import io.kvision.html.p
import io.kvision.html.span
import io.kvision.html.ul
import io.kvision.navbar.NavbarColor
import io.kvision.navbar.NavbarExpand
import io.kvision.navbar.nav
import io.kvision.navbar.navLink
import io.kvision.navbar.navText
import io.kvision.navbar.navbar
import io.kvision.panel.SimplePanel
import io.kvision.panel.StackPanel
import io.kvision.panel.gridPanel
import io.kvision.panel.hPanel
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
import org.w3c.dom.mediacapture.MediaDevices
import kotlin.Double
import kotlin.properties.Delegates.observable

class RecipeView(private val routing: Routing, recipeId: Int) : SimplePanel() {
    init {
        val customScope = CoroutineScope(Dispatchers.Main)

        add(HeaderComponent(routing))

        customScope.launch {
            val recipe = getRecipe(recipeId)
            if (recipe != null) {
                val portionsState = ObservableValue(recipe.portions)
                button("edit ingredients") {
                    onClick {
                        routing.navigate("$recipesRoute/$recipeId/ingredients")
                    }
                }
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

                        // Ingredients Panel
                        vPanel {
                            marginTop = 40.px

                            recipe.ingredientsInRecipe.forEach { ingredientInRecipe ->
                                ingredientInRecipeCard(ingredientInRecipe, portionsState, recipe.portions, customScope)
                            }

                        }
                        vPanel {
                            marginTop = 25.px
                            padding = 15.px
                            alignItems = AlignItems.START  // Align items to the left to maintain readability


                            ol() {
                                listStyle = ListStyle(ListStyleType.NONE)
                                recipe.sections.forEach { section ->
                                    // Section Title
                                    h3("${section.index}. ${section.name}") {
                                        marginTop = 20.px
                                        marginBottom = 10.px
                                        fontWeight = FontWeight.BOLD
                                        fontSize = 30.px
                                    }
                                    ol() {
                                        listStyle = ListStyle(ListStyleType.NONE)
                                        section.steps.forEach { step ->
                                            // Step Title
                                            h4("${step.index}. ${step.name}") {
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
                                                ul() {
                                                    listStyle = ListStyle(ListStyleType.NONE)
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
                                                            imageRightMargin = 20.px
                                                        )
                                                    }
                                                }

                                                marginBottom = 15.px
                                            }

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

