package epicer.frontend.views.Recipes

import epicer.common.dto.ingredient.UpdateIngredientDTO
import epicer.common.dto.recipe.UpdateRecipeDTO
import epicer.frontend.components.HeaderComponent
import epicer.frontend.data.IngredientService.Companion.getIngredient
import epicer.frontend.data.IngredientService.Companion.updateIngredient
import epicer.frontend.data.RecipeService.Companion.getRecipe
import epicer.frontend.data.RecipeService.Companion.updateRecipe
import epicer.frontend.ingredientsRoute
import epicer.frontend.recipesRoute
import io.kvision.core.AlignItems
import io.kvision.core.BsColor
import io.kvision.core.onClickLaunch
import io.kvision.core.onEvent
import io.kvision.form.FormPanel
import io.kvision.form.check.CheckBox
import io.kvision.form.check.checkBox
import io.kvision.form.formPanel
import io.kvision.form.getDataWithFileContent
import io.kvision.form.number.spinner
import io.kvision.form.text.Text
import io.kvision.form.text.TextArea
import io.kvision.form.upload.BootstrapUpload
import io.kvision.html.Align
import io.kvision.html.button
import io.kvision.html.h2
import io.kvision.modal.Confirm
import io.kvision.panel.VPanel
import io.kvision.panel.hPanel
import io.kvision.panel.vPanel
import io.kvision.routing.Routing
import io.kvision.toast.ToastContainer
import io.kvision.toast.ToastContainerPosition
import io.kvision.types.KFile
import io.kvision.utils.perc
import io.kvision.utils.px
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import kotlinx.serialization.Serializable
import kotlinx.serialization.serializer
import kotlin.apply


class UpdateRecipeView(private val routing: Routing, recipeId: Int) : VPanel() {

    private val customScope = CoroutineScope(Dispatchers.Main)
    private val toastContainer = ToastContainer(ToastContainerPosition.BOTTOMRIGHT)

    @Serializable
    data class UpdateRecipeFormDTO(
        val name: String?,
        val description: String?,
        val updateDescription: Boolean,
        val portions: Int?,
        val updatePortions: Boolean,
        val isPublic: Boolean,
        val updateImageBase64: Boolean,
        val image: List<KFile>? = null
    )

    init {
        add(HeaderComponent(routing))
        alignItems = AlignItems.CENTER

        customScope.launch {
            val recipe = getRecipe(recipeId)
            vPanel {
                marginTop = 30.px
                width = 80.perc
                maxWidth = 800.px

                h2("Update Recipe") {
                    marginBottom = 20.px
                }

                // Upload widget
                val uploadImage = BootstrapUpload(
                    uploadUrl = "/",
                    label = "Upload new image",
                    multiple = false
                ).apply {
                    showPreview = false
                    showBrowse = true
                    showUpload = false
                    showCancel = false
                    explorerTheme = false
                    allowedFileTypes = setOf("image")
                }

                // Checkbox states
                val updateDescription = checkBox(false, label = "Update description")
                val updatePortions = checkBox(false, label = "Update portions")
                val updateImage = checkBox(false, label = "Update image")
                val descriptionTextArea = TextArea(label = "Description", rows = 3) {
                    placeholder = "Description: ${recipe?.description ?: "-"}"
                }
                val portionsSpinner = spinner(label = "Portions", min = 1) {
                    placeholder = "Portions: ${recipe?.portions ?: "-"}"
                }


                formPanel<UpdateRecipeFormDTO>() {
                    add(
                        UpdateRecipeFormDTO::name,
                        Text(label = "Name (Leave it blank to not update it)") {
                            placeholder = "Name: ${recipe?.name}"
                        }
                    )
                    add(
                        UpdateRecipeFormDTO::updateDescription,
                        updateDescription
                    )
                    add(
                        UpdateRecipeFormDTO::description,
                        descriptionTextArea,
                    )
                    add(
                        UpdateRecipeFormDTO::updatePortions,
                        updatePortions
                    )
                    add(
                        UpdateRecipeFormDTO::portions,
                        portionsSpinner,
                    )
                    add(
                        UpdateRecipeFormDTO::isPublic,
                        CheckBox(label = "Is public") {
                            value = recipe?.isPublic ?: false
                        }
                    )
                    add(
                        UpdateRecipeFormDTO::updateImageBase64,
                        updateImage
                    )
                    add(
                        UpdateRecipeFormDTO::image,
                        uploadImage
                    )
                    descriptionTextArea.disabled = !updateDescription.value
                    updateDescription.onEvent {
                        change = {
                            descriptionTextArea.disabled = !updateDescription.value
                        }
                    }
                    portionsSpinner.disabled = !updatePortions.value
                    updatePortions.onEvent {
                        change = {
                            portionsSpinner.disabled = !updatePortions.value
                        }
                    }
                    uploadImage.disabled = !updateImage.value
                    updateImage.onEvent {
                        change = {
                            uploadImage.disabled = !updateImage.value
                        }
                    }


                    button("Update Recipe", icon = "fas fa-edit").onClickLaunch {
                        if (this@formPanel.validate()) {
                            val formData = this@formPanel.getDataWithFileContent()
                            val imageBase64 = formData.image?.firstOrNull()?.content

                            val updateRecipeDTO = UpdateRecipeDTO(
                                id = recipeId,
                                name = formData.name,
                                description = if (updateDescription.value) formData.description else null,
                                updateDescription = updateDescription.value,
                                portions = if (updatePortions.value) formData.portions else null,
                                updatePortions = updatePortions.value,
                                isPublic = formData.isPublic,
                                imageBase64 = if (updateImage.value) imageBase64 else null,
                                updateImageBase64 = updateImage.value
                            )
                            Confirm.show(
                                "Update Recipe",
                                "Do you want to apply the changes?",
                                align = Align.LEFT,
                            ) {
                                customScope.launch {
                                    if (updateRecipe(updateRecipeDTO)) {
                                        routing.navigate("$recipesRoute/$recipeId")
                                        toastContainer.showToast("Recipe updated successfully!", color = BsColor.SUCCESSBG)
                                    } else {
                                        toastContainer.showToast("Failed to update recipe", color = BsColor.DANGERBG)
                                    }
                                }
                            }
                        }

                    }
                }


            }
        }

    }
}

