package epicer.frontend.views.Recipes

import epicer.common.dto.recipe.BaseRecipeDTO
import epicer.frontend.components.HeaderComponent
import epicer.frontend.components.recipeCard
import epicer.frontend.createRecipeRoute
import epicer.frontend.data.RecipeService.Companion.getRecipes
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

class AllRecipesView(private val routing: Routing) : SimplePanel() {
    init {
        val customScope = CoroutineScope(Dispatchers.Main)

        add(HeaderComponent(routing))

        var allRecipes: List<BaseRecipeDTO>? = null
        customScope.launch {

            allRecipes = getRecipes()

            vPanel {
                marginTop = 30.px
                alignItems = AlignItems.CENTER

                h2("All Recipes")
            }


            gridPanel(
                templateColumns = "repeat(auto-fill, minmax(400px, 1fr))",
                alignItems = AlignItems.CENTER,
                alignContent = AlignContent.CENTER,
            ) {
                if (allRecipes != null) {
                    for (recipe in allRecipes) {
                        recipeCard(recipe, customScope, routing)
                    }
                }
            }
        }
    }
}