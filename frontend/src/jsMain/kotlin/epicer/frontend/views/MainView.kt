package epicer.frontend.views

import epicer.common.dto.recipe.BaseRecipeDTO
import epicer.frontend.components.HeaderComponent
import epicer.frontend.components.recipeCard
import epicer.frontend.createRecipeRoute
import epicer.frontend.createUnitTypesRoute
import epicer.frontend.data.RecipeService.Companion.getMyRecipes
import io.kvision.core.AlignContent
import io.kvision.core.AlignItems
import io.kvision.html.button
import io.kvision.html.h2
import io.kvision.panel.SimplePanel
import io.kvision.panel.gridPanel
import io.kvision.panel.vPanel
import io.kvision.routing.Routing
import io.kvision.utils.perc
import io.kvision.utils.px
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch

class MainView(private val routing: Routing) : SimplePanel() {
    init {
        val customScope = CoroutineScope(Dispatchers.Main)

        add(HeaderComponent(routing))

        var myRecipes: List<BaseRecipeDTO>? = null
        customScope.launch {

            myRecipes = getMyRecipes()

            vPanel {
                marginTop = 30.px
                alignItems = AlignItems.CENTER

                h2("My Recipes") {
                    marginBottom = 30.px
                }

                button(text = "New recipe", icon = "fas fa-plus") {
                    onClick {
                        routing.navigate(createRecipeRoute)
                    }
                    width = 30.perc
                    minWidth = 300.px
                }

                marginBottom = 30.px
            }


            gridPanel(
                templateColumns = "repeat(auto-fill, minmax(400px, 1fr))",
                alignItems = AlignItems.CENTER,
                alignContent = AlignContent.CENTER,
            ) {
                if (myRecipes != null) {
                    for (recipe in myRecipes) {
                        recipeCard(recipe, customScope, routing)
                    }
                }
            }
        }
    }
}