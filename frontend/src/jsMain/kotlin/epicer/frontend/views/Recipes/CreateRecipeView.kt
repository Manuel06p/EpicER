package epicer.frontend.views.Recipes

import epicer.common.dto.recipe.CreateRecipeDTO
import epicer.frontend.components.HeaderComponent
import epicer.frontend.data.RecipeService
import epicer.frontend.recipesRoute
import io.kvision.core.AlignItems
import io.kvision.core.BsColor
import io.kvision.core.onClickLaunch
import io.kvision.form.FormPanel
import io.kvision.form.check.CheckBox
import io.kvision.form.formPanel
import io.kvision.form.getDataWithFileContent
import io.kvision.form.number.Spinner
import io.kvision.form.text.Text
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

class CreateRecipeView(private val routing: Routing) : VPanel() {
    @Serializable
    data class CreateRecipeFormDTO(
        val name: String,
        val description: String?,
        val portions: Int,
        val isPublic: Boolean,
        val image: List<KFile>? = null
    )

    private val customScope = CoroutineScope(Dispatchers.Main)
    private val toastContainer = ToastContainer(ToastContainerPosition.BOTTOMRIGHT)

    init {
        add(HeaderComponent(routing))

        alignItems = AlignItems.CENTER

        vPanel {
            marginTop = 30.px

            width = 80.perc
            maxWidth = 800.px

            h2("Create recipe") {
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

            formPanel<CreateRecipeFormDTO> () {
                add(
                    CreateRecipeFormDTO::name,
                    Text(label = "Name") {
                        placeholder = "Pizza"
                    },
                    required = true
                )
                add(
                    CreateRecipeFormDTO::description,
                    Text(label = "Description") {
                        placeholder = "The best recipe in the world!"
                    },
                )
                add(
                    CreateRecipeFormDTO::portions,
                    Spinner(label = "Portions") {
                        min = 1
                        value = 1
                    },
                )
                add(
                    CreateRecipeFormDTO::isPublic,
                    CheckBox(label = "Is public?") {
                        value = true
                    },
                    required = true
                )
                add(CreateRecipeFormDTO::image, BootstrapUpload("/", label = "Image").apply {
                    showPreview = false
                    showUpload = false
                    showCancel = false
                    explorerTheme = true
                    allowedFileTypes = setOf("image")
                })
                hPanel {
                    button("Create").onClickLaunch {
                        val createRecipeFormDTO = this@formPanel.getDataWithFileContent()
                        val imageBase64 = createRecipeFormDTO.image?.firstOrNull()?.content

                        val createRecipeDTO = CreateRecipeDTO(
                            name = createRecipeFormDTO.name,
                            description = createRecipeFormDTO.description,
                            portions = createRecipeFormDTO.portions,
                            isPublic = createRecipeFormDTO.isPublic,
                            imageBase64 = imageBase64
                        )

                        Confirm.Companion.show(
                            "Recipe creation",
                            "Do you really want to create the recipe?",
                            align = Align.LEFT,
                        ) {
                            customScope.launch {
                                if (RecipeService.Companion.createRecipe(createRecipeDTO)) {
                                    routing.navigate(recipesRoute)
                                    toastContainer.showToast(
                                        message = "Recipe created successfully!",
                                        color = BsColor.SUCCESSBG,
                                    )
                                } else {
                                    toastContainer.showToast(
                                        message = "Recipe creation failed",
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