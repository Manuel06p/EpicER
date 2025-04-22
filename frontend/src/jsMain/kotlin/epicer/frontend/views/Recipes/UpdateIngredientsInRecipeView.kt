package epicer.frontend.views.Recipes

import epicer.common.dto.ingredientInRecipe.CreateIngredientInRecipeDTO
import epicer.common.dto.unitType.CreateUnitTypeDTO
import epicer.common.dto.unitType.UpdateUnitTypeDTO
import epicer.frontend.components.HeaderComponent
import epicer.frontend.data.IngredientInRecipeService.Companion.createIngredientInRecipe
import epicer.frontend.data.IngredientService.Companion.getIngredients
import epicer.frontend.data.UnitService.Companion.getUnits
import epicer.frontend.data.UnitTypeService.Companion.createUnitType
import epicer.frontend.data.UnitTypeService.Companion.updateUnitType
import epicer.frontend.recipesRoute
import epicer.frontend.unitsRoute
import epicer.frontend.views.Maintenance.Units.UpdateUnitTypeView.UpdateUnitTypeFormDTO
import epicer.frontend.views.Maintenance.Units.UpdateUnitView.UpdateUnitFormDTO
import io.kvision.core.AlignItems
import io.kvision.core.BsColor
import io.kvision.core.FlexWrap
import io.kvision.core.onEvent
import io.kvision.form.FormPanel
import io.kvision.form.check.CheckBox
import io.kvision.form.number.Numeric
import io.kvision.form.select.TomSelect
import io.kvision.form.text.Text
import io.kvision.html.Align
import io.kvision.html.button
import io.kvision.html.h2
import io.kvision.modal.Confirm
import io.kvision.panel.HPanel
import io.kvision.panel.VPanel
import io.kvision.panel.vPanel
import io.kvision.routing.Routing
import io.kvision.toast.ToastContainer
import io.kvision.toast.ToastContainerPosition
import io.kvision.utils.perc
import io.kvision.utils.px
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import kotlinx.serialization.Serializable


class UpdateIngredientsInRecipeView(private val routing: Routing, val recipeId: Int) : VPanel() {

    private val customScope = CoroutineScope(Dispatchers.Main)
    private val toastContainer = ToastContainer(ToastContainerPosition.BOTTOMRIGHT)

    @Serializable
    private data class CreateIngredientInRecipeFormDTO(
        val ingredient: String,
        val quantity: Double?,
        val unit: String?,
        val notes: String?,
    )

    init {
        add(HeaderComponent(routing))



        alignItems = AlignItems.CENTER

        customScope.launch {

            val ingredients = getIngredients()
            val units = getUnits()

            vPanel {
                marginTop = 30.px
                width = 80.perc
                maxWidth = 800.px

                h2("Create ingredient in recipe") {
                    marginBottom = 20.px
                }
                val formPanel = FormPanel(serializer = CreateIngredientInRecipeFormDTO.serializer()).apply {
                    add(
                        CreateIngredientInRecipeFormDTO::ingredient,
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
                        CreateIngredientInRecipeFormDTO::quantity,
                        Numeric(label = "Quantity") {
                            decimals = 3
                            placeholder = ""
                            min = 0
                        },
                    )
                    add(
                        CreateIngredientInRecipeFormDTO::unit,
                        TomSelect(
                            options = units?.map { it.id.toString() to it.name },
                            label = "Unit",
                            multiple = false
                        ) {
                            placeholder = ""
                        },
                    )
                    add(
                        CreateIngredientInRecipeFormDTO::notes,
                        Text(label = "Notes") {
                            placeholder = ""
                        },
                    )

                    validator = {
                        when {
                            it[CreateIngredientInRecipeFormDTO::quantity] == null && it[CreateIngredientInRecipeFormDTO::unit] != null -> {
                                false
                            }
                            else -> {
                                true
                            }
                        }

                    }
                }
                add(formPanel)

                formPanel.add(HPanel(spacing = 10, alignItems = AlignItems.CENTER, wrap = FlexWrap.WRAP) {
                    button("Create", "fas fa-pen-to-square").onClick {

                        if (formPanel.validate()) {
                            val createIngredientInRecipeFormDTO = formPanel.getData()

                            val ingredient: Int = createIngredientInRecipeFormDTO.ingredient.toInt()
                            val unit: Int? = createIngredientInRecipeFormDTO.unit?.toInt()


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
                                        routing.navigate("$recipesRoute/$recipeId")
                                        toastContainer.showToast(
                                            message = "Ingredient in recipe created successfully!",
                                            color = BsColor.SUCCESSBG,
                                        )
                                    } else {
                                        toastContainer.showToast(
                                            message = "Ingredient in recipe deletion failed",
                                            color = BsColor.DANGERBG,
                                        )
                                    }
                                }
                            }
                        }
                    }
                })
            }
        }
    }
}

