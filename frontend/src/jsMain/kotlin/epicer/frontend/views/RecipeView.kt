package epicer.frontend.views

import epicer.frontend.components.HeaderComponent
import epicer.frontend.data.getRecipe
import epicer.frontend.data.isLogged
import io.kvision.html.h1
import io.kvision.html.h3
import io.kvision.html.h4
import io.kvision.panel.SimplePanel
import io.kvision.routing.Routing
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch

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
                h1(recipe.name)
                recipe.ingredientsDTO.forEach {
                    h3(it.ingredient.nameSingular)
                    h4(it.quantity.toString())
                    h4(it.unit?.name)
                }
            }
        }

    }
}