package epicer.frontend.components

import epicer.common.dto.recipe.BaseRecipeDTO
import epicer.common.dto.recipe.FullIngredientInRecipeDTO
import epicer.frontend.data.ImageService.Companion.getImage
import epicer.frontend.image_not_found
import io.kvision.core.AlignItems
import io.kvision.core.Container
import io.kvision.core.CssSize
import io.kvision.core.Placement
import io.kvision.core.TooltipOptions
import io.kvision.core.Trigger
import io.kvision.core.enableTooltip
import io.kvision.html.ImageShape
import io.kvision.html.h4
import io.kvision.html.h6
import io.kvision.html.image
import io.kvision.panel.hPanel
import io.kvision.panel.vPanel
import io.kvision.routing.Routing
import io.kvision.state.ObservableValue
import io.kvision.state.bind
import io.kvision.utils.px
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.launch

fun Container.ingredientInRecipeCard(
    ingredientInRecipe: FullIngredientInRecipeDTO,
    portionsState: ObservableValue<Int?>,
    recipePortions: Int?,
    customScope: CoroutineScope,
    imageSize: CssSize = 72.px,
    nameFontSize: CssSize? = null,
    quantityFontSize: CssSize? = null,
    imageRightMargin: CssSize? = 32.px,
) {
    hPanel {
        marginBottom = 15.px
        alignItems = AlignItems.CENTER

        // ✅ Image placeholder first
        val imageComponent = image(
            src = image_not_found,
            responsive = true,
        ) {
            height = imageSize
            width = imageSize
            shape = ImageShape.CIRCLE
            setStyle("object-fit", "cover")
            marginRight = imageRightMargin
        }

        // ✅ Text panel (always built immediately)
        vPanel {
            bind(portionsState) { newPortions ->
                val adjustedQuantity = ingredientInRecipe.quantity
                    ?.div(recipePortions ?: 1)
                    ?.times(newPortions ?: 1)

                val name = when {
                    ingredientInRecipe.unit != null ||
                            adjustedQuantity == null ||
                            adjustedQuantity.toInt() == 1 ||
                            ingredientInRecipe.ingredient.namePlural == null
                        -> ingredientInRecipe.ingredient.nameSingular
                    else
                        -> ingredientInRecipe.ingredient.namePlural
                }


                h4(name) {
                    enableTooltip(
                        TooltipOptions(
                            title = ingredientInRecipe.notes,
                            rich = true,
                            delay = 0,
                            placement = Placement.RIGHT,
                            triggers = listOf(Trigger.HOVER)
                        )
                    )
                    fontSize = nameFontSize
                }
                h6("${adjustedQuantity ?: "-"} ${ingredientInRecipe.unit?.shortName ?: ""}") {
                    fontSize = quantityFontSize
                }
            }

        }

        customScope.launch {
            val idImage = ingredientInRecipe.ingredient.imageId
            val imageUrl = getImage(idImage)
            imageComponent.src = imageUrl ?: image_not_found
        }
    }
}

