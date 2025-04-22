package epicer.frontend.views.Maintenance.Ingredients

import epicer.common.dto.ingredient.CreateIngredientDTO
import epicer.frontend.components.HeaderComponent
import epicer.frontend.data.IngredientService.Companion.createIngredient
import epicer.frontend.ingredientsRoute
import io.kvision.core.AlignItems
import io.kvision.core.BsColor
import io.kvision.core.FlexWrap
import io.kvision.core.onClickLaunch
import io.kvision.form.Form
import io.kvision.form.FormPanel
import io.kvision.form.formPanel
import io.kvision.form.getDataWithFileContent

import io.kvision.form.text.Password
import io.kvision.form.text.Text
import io.kvision.form.upload.BootstrapUpload
import io.kvision.form.upload.Capture
import io.kvision.form.upload.Upload
import io.kvision.form.upload.UploadInput
import io.kvision.form.upload.getFileWithContent
import io.kvision.html.Align
import io.kvision.html.button
import io.kvision.html.h2
import io.kvision.modal.Alert
import io.kvision.modal.Confirm
import io.kvision.panel.HPanel
import io.kvision.panel.VPanel
import io.kvision.panel.hPanel
import io.kvision.panel.vPanel
import io.kvision.routing.Routing
import io.kvision.toast.ToastContainer
import io.kvision.toast.ToastContainerPosition
import io.kvision.types.KFile
import io.kvision.types.contentType
import io.kvision.utils.perc
import io.kvision.utils.px
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import kotlinx.serialization.Contextual
import kotlinx.serialization.Serializable
import org.w3c.files.File
import kotlin.js.Date


class CreateIngredientView(private val routing: Routing) : VPanel() {
    @Serializable
    data class CreateIngredientFormDTO(
        val nameSingular: String,
        val namePlural: String? = null,
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

            h2("Create ingredient") {
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

            formPanel<CreateIngredientFormDTO> () {
                add(CreateIngredientFormDTO::nameSingular, Text(label = "Name singular"), required = true)
                add(CreateIngredientFormDTO::namePlural, Text(label = "Name plural"))
                add(CreateIngredientFormDTO::image, BootstrapUpload("/", label = "Image").apply {
                    showPreview = false
                    showUpload = false
                    showCancel = false
                    explorerTheme = true
                    allowedFileTypes = setOf("image")
                })
                hPanel {
                    button("Create ingredient").onClickLaunch {
                        val createIngredientFormDTO = this@formPanel.getDataWithFileContent()
                        val imageBase64 = createIngredientFormDTO.image?.firstOrNull()?.content

                        val createIngredientDTO = CreateIngredientDTO(
                            nameSingular = createIngredientFormDTO.nameSingular,
                            namePlural = createIngredientFormDTO.namePlural,
                            imageBase64 = imageBase64
                        )

                        Confirm.show(
                            "Ingredient creation",
                            "Do you really want to create the ingredient?",
                            align = Align.LEFT,
                        ) {
                            customScope.launch {
                                if (createIngredient(createIngredientDTO)) {
                                    routing.navigate(ingredientsRoute)
                                    toastContainer.showToast(
                                        message = "User created successfully!",
                                        color = BsColor.SUCCESSBG,
                                    )
                                } else {
                                    toastContainer.showToast(
                                        message = "User creation failed",
                                        color = BsColor.DANGERBG,
                                    )
                                }
                            }
                        }
                    }
                }
            }

//            val formPanel = FormPanel(serializer = CreateIngredientDTO.serializer()).apply {
//
//
//                add(
//                    CreateIngredientDTO::namePlural,
//                    Text(label = "Name plural") {
//                        placeholder = ""
//                    },
//                )
//                add(uploadImage)
//            }
//            add(formPanel)
//
//            formPanel.add(HPanel(spacing = 10, alignItems = AlignItems.CENTER, wrap = FlexWrap.WRAP) {
//                button("Create", "fas fa-user-plus").onClick {
//                    if (formPanel.validate()) {
//                        val createIngredientFormDTO = formPanel.getData()
//                        val createIngredientDTO = CreateIngredientDTO(
//                            nameSingular = createIngredientFormDTO.nameSingular,
//                            namePlural = createIngredientFormDTO.namePlural,
//                        )
//
//                    }
//                }
//            })
        }
        // Form panel (no DTO binding)

    }
}
