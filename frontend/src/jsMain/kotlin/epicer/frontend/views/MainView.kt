package epicer.frontend.views

import epicer.common.dto.recipe.BaseRecipeDTO
import epicer.frontend.components.HeaderComponent
import epicer.frontend.components.recipeCard
import epicer.frontend.data.getImage
import epicer.frontend.data.getMyRecipes
import epicer.frontend.data.isLogged
import epicer.frontend.image_not_found
import io.kvision.core.AlignContent
import io.kvision.core.AlignItems
import io.kvision.core.Background
import io.kvision.core.BsBgColor
import io.kvision.core.Col
import io.kvision.core.Color
import io.kvision.core.Container
import io.kvision.core.FontStyle
import io.kvision.core.JustifyContent
import io.kvision.core.Overflow
import io.kvision.core.Position
import io.kvision.core.TextAlign
import io.kvision.core.TextOverflow
import io.kvision.core.VerticalAlign
import io.kvision.core.WhiteSpace
import io.kvision.core.onClick
import io.kvision.html.P
import io.kvision.html.h2
import io.kvision.html.h3
import io.kvision.html.icon
import io.kvision.html.image
import io.kvision.panel.SimplePanel
import io.kvision.panel.gridPanel
import io.kvision.panel.hPanel
import io.kvision.panel.simplePanel
import io.kvision.panel.vPanel
import io.kvision.routing.Routing
import io.kvision.utils.auto
import io.kvision.utils.perc
import io.kvision.utils.px
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch

class MainView(private val routing: Routing) : SimplePanel() {
    init {
        val customScope = CoroutineScope(Dispatchers.Main)

        customScope.launch {
            if (!isLogged()) {
                routing.navigate("/login")
            }
        }

        add(HeaderComponent(routing))

        var myRecipes: List<BaseRecipeDTO>? = null
        customScope.launch {
            myRecipes = getMyRecipes()
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