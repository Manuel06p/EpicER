package epicer.frontend.components

import epicer.common.dto.recipe.BaseRecipeDTO
import epicer.frontend.data.getImage
import epicer.frontend.image_not_found
import io.kvision.core.Background
import io.kvision.core.BsBorder
import io.kvision.core.Col
import io.kvision.core.Color
import io.kvision.core.Container
import io.kvision.core.JustifyContent
import io.kvision.core.Overflow
import io.kvision.core.TextAlign
import io.kvision.core.TextOverflow
import io.kvision.core.WhiteSpace
import io.kvision.core.addBsBorder
import io.kvision.html.button
import io.kvision.html.h2
import io.kvision.html.image
import io.kvision.routing.Routing
import io.kvision.utils.auto
import io.kvision.utils.perc
import io.kvision.utils.px
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.launch

fun Container.recipeCard(recipe: BaseRecipeDTO, customScope: CoroutineScope, routing: Routing) {
    button("") {
        justifyContent = JustifyContent.SPACEBETWEEN


        h2(recipe.name) {
            width = 100.perc
            textAlign = TextAlign.CENTER
            fontSize = 20.px
            textOverflow = TextOverflow.ELLIPSIS
            whiteSpace = WhiteSpace.NOWRAP
            overflow = Overflow.HIDDEN
            padding = 15.px
        }

        customScope.launch {
            val idImage = recipe.imageId
            val imageUrl = getImage(idImage)
            image(
                src = imageUrl ?: image_not_found,
                responsive = true,
            ) {
                height = 80.perc
                width = 100.perc
                setStyle("object-fit", "cover")
            }
        }

        onClick {
            routing.navigate("/recipes/${recipe.id}")
        }

        background = Background(
            color = Color.name(Col.DARKSLATEGRAY),
        )
        addBsBorder(BsBorder.BORDERDARK)

        padding = 0.px
        overflow = Overflow.HIDDEN // To have radius borders over the image
        width = 80.perc
        marginLeft = auto
        marginRight = auto
        marginTop = 50.px
        height = 300.px
        borderRadius = 25.px
    }
}