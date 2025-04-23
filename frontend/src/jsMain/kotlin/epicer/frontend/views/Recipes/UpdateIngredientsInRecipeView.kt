package epicer.frontend.views.Recipes

import epicer.common.dto.ingredient.FullIngredientDTO
import epicer.common.dto.ingredientInRecipe.CreateIngredientInRecipeDTO
import epicer.common.dto.ingredientInRecipe.UpdateIngredientInRecipeDTO
import epicer.common.dto.unit.FullUnitDTO
import epicer.frontend.components.HeaderComponent
import epicer.frontend.data.ImageService.Companion.getImage
import epicer.frontend.data.IngredientInRecipeService.Companion.createIngredientInRecipe
import epicer.frontend.data.IngredientInRecipeService.Companion.deleteIngredientInRecipe
import epicer.frontend.data.IngredientInRecipeService.Companion.getIngredientsInRecipe
import epicer.frontend.data.IngredientInRecipeService.Companion.updateIngredientInRecipe
import epicer.frontend.data.IngredientService.Companion.getIngredients
import epicer.frontend.data.UnitService.Companion.getUnits
import epicer.frontend.image_not_found
import io.kvision.core.AlignContent
import io.kvision.core.AlignItems
import io.kvision.core.BsBgColor
import io.kvision.core.BsColor
import io.kvision.core.Display
import io.kvision.core.FontWeight
import io.kvision.core.JustifyContent
import io.kvision.core.addBsBgColor
import io.kvision.form.FormPanel
import io.kvision.form.number.Numeric
import io.kvision.form.select.TomSelect
import io.kvision.form.text.Text
import io.kvision.html.Align
import io.kvision.html.Button
import io.kvision.html.ButtonStyle
import io.kvision.html.Image
import io.kvision.html.ImageShape
import io.kvision.html.button
import io.kvision.html.div
import io.kvision.html.h2
import io.kvision.html.h4
import io.kvision.html.span
import io.kvision.modal.Confirm
import io.kvision.modal.Modal
import io.kvision.modal.ModalSize
import io.kvision.panel.SimplePanel
import io.kvision.panel.gridPanel
import io.kvision.panel.hPanel
import io.kvision.panel.vPanel
import io.kvision.routing.Routing
import io.kvision.toast.ToastContainer
import io.kvision.toast.ToastContainerPosition
import io.kvision.utils.auto
import io.kvision.utils.perc
import io.kvision.utils.px
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import kotlinx.serialization.Serializable


@Serializable
private data class IngredientInRecipeFormDTO(
    val ingredient: String,
    val quantity: Double?,
    val unit: String?,
    val notes: String?,
)

class UpdateIngredientsInRecipeView(private val routing: Routing, val recipeId: Int) : SimplePanel() {

    private val customScope = CoroutineScope(Dispatchers.Main)
    private val toastContainer = ToastContainer(ToastContainerPosition.BOTTOMRIGHT)


    init {

        alignItems = AlignItems.CENTER
        initStart()
    }

    fun initStart() {
        removeAll()
        add(HeaderComponent(routing))
        customScope.launch {

            val ingredients = getIngredients()
            val units = getUnits()
            val ingredientsInRecipe = getIngredientsInRecipe(recipeId)
            val createIngredientsInRecipeModal = CreateIngredientInRecipeModal(customScope, toastContainer, ingredients, units, recipeId, { initStart() })


            vPanel {
                marginTop = 30.px
                alignItems = AlignItems.CENTER

                h2("Ingredients in recipe ($recipeId)") {
                    marginBottom = 30.px
                }
                button(text = "New ingredient in recipe", icon = "fas fa-plus") {
                    onClick {
                        createIngredientsInRecipeModal.show()
                    }
                    width = 30.perc
                    minWidth = 300.px
                }

                marginBottom = 30.px
            }

            gridPanel(
                templateColumns = "repeat(auto-fill, minmax(500px, 1fr))",
                alignItems = AlignItems.CENTER,
                alignContent = AlignContent.CENTER,
            ) {
                ingredientsInRecipe?.forEach { ingredientInRecipe ->


                    val image = Image(
                        src = image_not_found,
                        responsive = true,
                    ) {
                        height = 75.px
                        width = 75.px
                        shape = ImageShape.CIRCLE
                        setStyle("object-fit", "cover")
                        marginTop = 20.px
                    }



                    vPanel(spacing = 8) {
                        addBsBgColor(BsBgColor.BODYSECONDARY)
                        padding = 20.px
                        borderRadius = 16.px
                        height = auto
                        width = 80.perc
                        justifyContent = JustifyContent.SPACEBETWEEN
                        display = Display.FLEX
                        marginLeft = auto
                        marginRight = auto
                        marginBottom = 20.px

                        h4() {
                            span("ID: ") {
                                fontWeight = FontWeight.LIGHTER
                            }
                            span(ingredientInRecipe.id.toString())
                        }

                        val updateIngredientInRecipeForm = FormPanel(serializer = IngredientInRecipeFormDTO.serializer()).apply {
                            add(
                                IngredientInRecipeFormDTO::ingredient,
                                TomSelect(
                                    options = ingredients?.map { it.id.toString() to it.nameSingular },
                                    label = "Ingredient",
                                    multiple = false
                                ) {
                                    placeholder = "Select ingredient"
                                    value = ingredientInRecipe.ingredient.id.toString() // ✅ Set initial value!
                                },
                                required = true
                            )

                            add(
                                IngredientInRecipeFormDTO::quantity,
                                Numeric(label = "Quantity") {
                                    decimals = 3
                                    min = 0
                                    value = ingredientInRecipe.quantity
                                }
                            )
                            add(
                                IngredientInRecipeFormDTO::unit,
                                TomSelect(
                                    options = units?.map { it.id.toString() to it.name },
                                    label = "Unit",
                                    multiple = false
                                ) {
                                    placeholder = "Select unit"
                                    value = ingredientInRecipe.unit?.id?.toString()
                                }
                            )

                            add(
                                IngredientInRecipeFormDTO::notes,
                                Text(label = "Notes") {
                                    placeholder = "Optional notes"
                                    value = ingredientInRecipe.notes ?: ""
                                }
                            )

                            validator = {
                                val ingredient = it[IngredientInRecipeFormDTO::ingredient]
                                val quantity = it[IngredientInRecipeFormDTO::quantity]
                                val unit = it[IngredientInRecipeFormDTO::unit]
                                val notes = it[IngredientInRecipeFormDTO::notes] ?: ""

                                when {
                                    quantity == null && unit != null -> {
                                        it.getControl(IngredientInRecipeFormDTO::quantity)?.validatorError = "Quantity required when unit is selected"
                                        false
                                    }

                                    ingredient == ingredientInRecipe.ingredient.id.toString() &&
                                            quantity == ingredientInRecipe.quantity &&
                                            unit == ingredientInRecipe.unit?.id?.toString() &&
                                            notes == (ingredientInRecipe.notes ?: "") -> {
                                        it.getControl(IngredientInRecipeFormDTO::ingredient)?.validatorError = "No changes detected"
                                        false
                                    }

                                    else -> true
                                }
                            }

                        }

                        add(updateIngredientInRecipeForm)

                        // Spacer to push buttons down
                        div { flexGrow = 1 }
                        add(image)
                        // Bottom buttons
                        hPanel(spacing = 8) {
                            marginTop = 10.px
                            width = 100.perc
                            justifyContent = JustifyContent.SPACEBETWEEN

                            button(text = "Apply", icon = "fas fa-edit") {
                                onClick {
                                    if (updateIngredientInRecipeForm.validate()) {
                                        val ingredientInRecipeFormDTO: IngredientInRecipeFormDTO = updateIngredientInRecipeForm.getData()
                                        val ingredient = ingredientInRecipeFormDTO.ingredient.toInt()
                                        val unit: Int? = ingredientInRecipeFormDTO.unit?.toIntOrNull()

                                        val updateIngredientInRecipeDTO = UpdateIngredientInRecipeDTO(
                                            id = ingredientInRecipe.id,
                                            recipe = recipeId,
                                            ingredient = ingredient,
                                            quantity = ingredientInRecipeFormDTO.quantity,
                                            unit = unit,
                                            notes = ingredientInRecipeFormDTO.notes,
                                        )

                                        Confirm.show(
                                            "Ingredient in recipe update",
                                            "Do you really want to update the ingredient in recipe?",
                                            align = Align.LEFT,
                                        ) {
                                                customScope.launch {
                                                    if (updateIngredientInRecipe(updateIngredientInRecipeDTO)) {
                                                        initStart()
                                                        toastContainer.showToast(
                                                            message = "Ingredient in recipe updated successfully!",
                                                            color = BsColor.SUCCESSBG,
                                                        )
                                                    } else {
                                                        toastContainer.showToast(
                                                            message = "Ingredient in recipe update failed",
                                                            color = BsColor.DANGERBG,
                                                        )
                                                    }
                                                }
                                        }
                                    }
                                }
                            }

                            button(
                                text = "Delete",
                                icon = "fas fa-trash",
                                style = ButtonStyle.DANGER
                            ) {
                                onClick {
                                    Confirm.show(
                                        "Ingredient in recipe deletion",
                                        "Do you really want to delete this ingredient in recipe?",
                                        align = Align.LEFT
                                    ) {
                                        customScope.launch {
                                                if (deleteIngredientInRecipe(ingredientInRecipe.id, recipeId = recipeId)) {
                                                    initStart()
                                                    toastContainer.showToast(
                                                        message = "Ingredient in recipe deleted successfully!",
                                                        color = BsColor.SUCCESSBG
                                                    )
                                                } else {
                                                    toastContainer.showToast(
                                                        message = "Ingredient in recipe deletion failed",
                                                        color = BsColor.DANGERBG
                                                    )
                                                }
                                        }
                                    }
                                }
                            }
                        }
                    }

                    customScope.launch {
                        val idImage = ingredientInRecipe.ingredient.imageId
                        if (idImage != null) {
                            val imageUrl = getImage(idImage)
                            image.src = imageUrl ?: image_not_found
                        }

                    }
                }
            }
        }
    }
}


class CreateIngredientInRecipeModal(
    customScope: CoroutineScope,
    toastContainer: ToastContainer,
    ingredients: List<FullIngredientDTO>?,
    units: List<FullUnitDTO>?,
    recipeId: Int,
    val initStart: () -> Unit
) : Modal(
    "Create ingredient in recipe",
    size = ModalSize.LARGE,
    closeButton = true,
    animation = true,
    escape = false
) {
    init {
        fun hideModal() {
            hide()
        }

        val formPanel = FormPanel(serializer = IngredientInRecipeFormDTO.serializer()).apply {
            add(
                IngredientInRecipeFormDTO::ingredient,
                TomSelect(
                    options = ingredients?.map { it.id.toString() to it.nameSingular },
                    label = "Ingredient",
                    multiple = false
                ) {
                    placeholder = ""
                },
                required = true
            )
            add(
                IngredientInRecipeFormDTO::quantity,
                Numeric(label = "Quantity") {
                    decimals = 3
                    placeholder = ""
                    min = 0
                },
            )
            add(
                IngredientInRecipeFormDTO::unit,
                TomSelect(
                    options = units?.map { it.id.toString() to it.name },
                    label = "Unit",
                    multiple = false
                ) {
                    placeholder = ""
                },
            )
            add(
                IngredientInRecipeFormDTO::notes,
                Text(label = "Notes") {
                    placeholder = ""
                },
            )

            validator = {
                when {
                    it[IngredientInRecipeFormDTO::quantity] == null && it[IngredientInRecipeFormDTO::unit] != null -> {
                        false
                    }
                    else -> {
                        true
                    }
                }

            }
        }

        add(formPanel)

        addButton(
            Button("Create", "fas fa-pen-to-square") {
                onClick {
                    if (formPanel.validate()) {
                        val createIngredientInRecipeFormDTO = formPanel.getData()

                        val ingredient: Int = createIngredientInRecipeFormDTO.ingredient.toInt()
                        val unit: Int? = createIngredientInRecipeFormDTO.unit?.toInt()

                        println(createIngredientInRecipeFormDTO.ingredient)
                        val createIngredientInRecipeDTO = CreateIngredientInRecipeDTO(
                            recipe = recipeId,
                            ingredient = ingredient,
                            quantity = createIngredientInRecipeFormDTO.quantity,
                            unit = unit,
                            notes = createIngredientInRecipeFormDTO.notes,
                        )

                        Confirm.show(
                            "Ingredient in recipe creation",
                            "Do you really want to create the ingredient in recipe?",
                            align = Align.LEFT,
                        ) {
                            customScope.launch {
                                if (createIngredientInRecipe(createIngredientInRecipeDTO)) {
                                    hideModal()
                                    initStart()
                                    toastContainer.showToast(
                                        message = "Ingredient in recipe created successfully!",
                                        color = BsColor.SUCCESSBG,
                                    )
                                } else {
                                    toastContainer.showToast(
                                        message = "Ingredient in recipe creation failed",
                                        color = BsColor.DANGERBG,
                                    )
                                }
                            }
                        }
                    }
                }
            }
        )
    }
}