package epicer.frontend.views.Maintenance.Ingredients

import epicer.common.dto.ingredient.CreateIngredientDTO
import epicer.common.dto.ingredient.UpdateIngredientDTO
import epicer.common.dto.user.UpdateUserDTO
import epicer.frontend.components.HeaderComponent
import epicer.frontend.data.createIngredient
import epicer.frontend.data.getIngredient
import epicer.frontend.data.getRoles
import epicer.frontend.data.getUser
import epicer.frontend.data.updateIngredient
import epicer.frontend.data.updateUser
import epicer.frontend.ingredientsRoute
import epicer.frontend.usersRoute
import epicer.frontend.views.Maintenance.Ingredients.CreateIngredientView.CreateIngredientFormDTO
import io.kvision.core.AlignItems
import io.kvision.core.BsColor
import io.kvision.core.FlexWrap
import io.kvision.core.onClickLaunch
import io.kvision.core.onEvent
import io.kvision.form.FormPanel
import io.kvision.form.check.CheckBox
import io.kvision.form.formPanel
import io.kvision.form.getDataWithFileContent
import io.kvision.form.select.TomSelect
import io.kvision.form.text.Password
import io.kvision.form.text.Text
import io.kvision.form.upload.BootstrapUpload
import io.kvision.html.Align
import io.kvision.html.button
import io.kvision.html.h2
import io.kvision.modal.Confirm
import io.kvision.panel.HPanel
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


class UpdateIngredientView(private val routing: Routing, ingrdientId: Int) : VPanel() {

    private val customScope = CoroutineScope(Dispatchers.Main)
    private val toastContainer = ToastContainer(ToastContainerPosition.BOTTOMRIGHT)

    @Serializable
    data class UpdateIngredientFormDTO(
        val nameSingular: String? = null,
        val namePlural: String? = null,
        val image: List<KFile>? = null
    )

    init {
        add(HeaderComponent(routing))



        alignItems = AlignItems.CENTER

        customScope.launch {

            val ingredient = getIngredient(ingrdientId)

            vPanel {
                marginTop = 30.px

                width = 80.perc
                maxWidth = 800.px

                h2("Update ingredient") {
                    marginBottom = 20.px
                }

                val uploadImage = BootstrapUpload(
                    uploadUrl = "/",
                    label = "Image Upload",
                    multiple = false,
                ).apply {
                    showPreview = false
                    showBrowse = true
                    showUpload = false
                    showCancel = false
                    explorerTheme = false // Use explorer theme for file selection
                    allowedFileTypes = setOf("image") // Restrict to image files
                }

                formPanel<UpdateIngredientFormDTO> () {
                    add(
                        UpdateIngredientFormDTO::nameSingular,
                        Text(label = "Name singular (Leave it blank to not update it)") {
                            placeholder = "Current name singular: ${ingredient?.nameSingular}"
                        }
                    )
                    add(
                        UpdateIngredientFormDTO::namePlural,
                        Text(label = "Name plural (Leave it blank to not update it)") {
                            placeholder = "Current name plural: ${ingredient?.namePlural?: "-"}"
                        }
                    )
                    add(
                        UpdateIngredientFormDTO::image,
                        BootstrapUpload("/", label = "Image").apply {
                        showPreview = false
                        showUpload = false
                        showCancel = false
                        explorerTheme = true
                        allowedFileTypes = setOf("image")
                    })
                    hPanel {
                        button("Update").onClickLaunch {
                            val updateIngredientFormDTO = this@formPanel.getDataWithFileContent()
                            val imageBase64 = updateIngredientFormDTO.image?.firstOrNull()?.content

                            val updateIngredientDTO = UpdateIngredientDTO(
                                id = ingrdientId,
                                nameSingular = updateIngredientFormDTO.nameSingular,
                                namePlural = updateIngredientFormDTO.namePlural,
                                imageBase64 = imageBase64,
                            )

                            Confirm.show(
                                "Ingredient update",
                                "Do you really want to update the ingredient?",
                                align = Align.LEFT,
                            ) {
                                customScope.launch {
                                    if (updateIngredient(updateIngredientDTO)) {
                                        routing.navigate(ingredientsRoute)
                                        toastContainer.showToast(
                                            message = "Ingredient updated successfully!",
                                            color = BsColor.SUCCESSBG,
                                        )
                                    } else {
                                        toastContainer.showToast(
                                            message = "Ingredient updated failed",
                                            color = BsColor.DANGERBG,
                                        )
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

