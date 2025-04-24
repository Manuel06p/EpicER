package epicer.frontend.views.Recipes

import epicer.common.dto.ingredientInRecipe.FullIngredientInRecipeDTO
import epicer.common.dto.section.FullSectionDTO
import epicer.common.dto.step.FullStepDTO
import epicer.common.dto.section.CreateSectionDTO
import epicer.common.dto.section.UpdateSectionDTO
import epicer.common.dto.step.CreateStepDTO
import epicer.common.dto.step.UpdateStepDTO
import epicer.frontend.components.HeaderComponent
import epicer.frontend.data.IngredientInRecipeService.Companion.deleteIngredientInRecipe
import epicer.frontend.data.IngredientInRecipeService.Companion.updateIngredientInRecipe
import epicer.frontend.data.RecipeService.Companion.getRecipe
import epicer.frontend.data.SectionService.Companion.createSection
import epicer.frontend.data.SectionService.Companion.deleteSection
import epicer.frontend.data.SectionService.Companion.updateSection
import epicer.frontend.data.StepService.Companion.createStep
import epicer.frontend.data.StepService.Companion.deleteStep
import epicer.frontend.data.StepService.Companion.updateStep
import io.kvision.core.AlignItems
import io.kvision.core.BsColor
import io.kvision.form.FormPanel
import io.kvision.form.number.Spinner
import io.kvision.form.select.TomSelect
import io.kvision.form.text.Text
import io.kvision.form.text.TextArea
import io.kvision.html.Align
import io.kvision.html.Button
import io.kvision.html.ButtonStyle
import io.kvision.html.button
import io.kvision.html.h2
import io.kvision.html.h4
import io.kvision.html.h5
import io.kvision.modal.Confirm
import io.kvision.modal.Modal
import io.kvision.modal.ModalSize
import io.kvision.panel.VPanel
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
data class StepFormDTO(
    val index: Int,
    val name: String?,
    val description: String?,
    val ingredients: String?
)

@Serializable
data class SectionFormDTO(
    val index: Int,
    val name: String?,
    val description: String?
)


class UpdateStepsView(private val routing: Routing, val recipeId: Int) : VPanel() {

    private val customScope = CoroutineScope(Dispatchers.Main)
    private val toastContainer = ToastContainer(ToastContainerPosition.BOTTOMRIGHT)


    init {

        alignItems = AlignItems.CENTER
        initStart()
    }

    fun initStart() {
        removeAll()
        add(HeaderComponent(routing))
        marginBottom = 50.px

        h2("Sections and steps edit (recipe: $recipeId)") {
            marginTop = 30.px
        }
        customScope.launch {

            val recipe = getRecipe(recipeId)
            vPanel {
                width = 80.perc
                maxWidth = 800.px

                recipe?.sections?.forEach { section ->
                    add(sectionForm(section))
                    vPanel {
                        paddingLeft = 30.px
                        section.steps.forEach { step ->
                            add(stepForm(
                                step,
                                section.id,
                                availableIngredients = recipe.ingredientsInRecipe,
                                linkedIngredients = step.ingredientsInRecipe.map { it.id },
                            ))
                        }
                        button("Create step", style = ButtonStyle.SUCCESS, icon = "fas fa-plus") {
                            marginTop = 10.px
                            val nextIndex = section.steps.lastOrNull()?.index?.plus(1)
                            val creationStepModal = CreateStepModal(
                                customScope = customScope,
                                toastContainer = toastContainer,
                                nextIndex = nextIndex,
                                sectionId = section.id,
                                availableIngredients = recipe.ingredientsInRecipe,
                                initStart = { initStart() }
                            )
                            onClick {
                                creationStepModal.show()
                            }
                        }
                    }

                }

                button("Create section", style = ButtonStyle.SUCCESS, icon = "fas fa-plus") {
                    marginTop = 30.px
                    val nextIndex = recipe?.sections?.lastOrNull()?.index?.plus(1)
                    val createSectionModal = CreateSectionModal(
                        customScope = customScope,
                        toastContainer = toastContainer,
                        nextIndex = nextIndex,
                        recipeId = recipeId,
                        initStart = { initStart() },
                    )

                    onClick {
                        createSectionModal.show()
                    }
                }
            }


        }
    }

    fun sectionForm(section: FullSectionDTO): VPanel {
        return vPanel() {
            width = 100.perc
            marginTop = 40.px
            h4("Section ${section.index}")
            val inputSpinner = Spinner(label = "Index", min = 1) {
                value = section.index
                width = 70.px
                marginRight = 30.px
            }
            val nameField = Text(label = "Name") {
                value = section.name ?: ""
                width = 100.perc
            }

            val form = FormPanel(serializer = SectionFormDTO.serializer()).apply {
                add(SectionFormDTO::index, inputSpinner, required = true)
                add(SectionFormDTO::name, nameField)
                add(SectionFormDTO::description,
                    TextArea(label = "Description", rows = 3) { value = section.description ?: "" }
                )
            }
            hPanel {
                this.add(inputSpinner)
                this.add(nameField)
            }
            add(form)

            hPanel {
                button("Update section", icon = "fas fa-check") {
                    width = 100.perc
                    marginRight = 15.px
                    onClick {
                        val sectionFormDTO = form.getData()

                        val updateSectionDTO = UpdateSectionDTO(
                            id = section.id,
                            index = sectionFormDTO.index,
                            name = sectionFormDTO.name,
                            description = sectionFormDTO.description,
                            recipe = recipeId
                        )

                        Confirm.show(
                            "Section update",
                            "Do you really want to update the section?",
                            align = Align.LEFT,
                        ) {
                            customScope.launch {
                                if (updateSection(updateSectionDTO)) {
                                    initStart()
                                    toastContainer.showToast(
                                        message = "Section updated successfully!",
                                        color = BsColor.SUCCESSBG,
                                    )
                                } else {
                                    toastContainer.showToast(
                                        message = "Section update failed",
                                        color = BsColor.DANGERBG,
                                    )
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
                    width = 200.px
                    onClick {
                        Confirm.show(
                            "Section deletion",
                            "Do you really want to delete this section?",
                            align = Align.LEFT
                        ) {
                            customScope.launch {
                                if (deleteSection(sectionId = section.id)) {
                                    initStart()
                                    toastContainer.showToast(
                                        message = "Section deleted successfully!",
                                        color = BsColor.SUCCESSBG
                                    )
                                } else {
                                    toastContainer.showToast(
                                        message = "Section in recipe deletion failed",
                                        color = BsColor.DANGERBG
                                    )
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    fun stepForm(step: FullStepDTO,
                 sectionId: Int,
                 availableIngredients: List<FullIngredientInRecipeDTO>,
                 linkedIngredients: List<Int>,
    ): VPanel {
        return vPanel() {
            marginTop = 30.px

            h5("Step ${step.index}")

            val inputSpinner = Spinner(label = "Index", min = 1) {
                value = step.index
                width = 70.px
                marginRight = 30.px
            }
            val nameField = Text(label = "Name") {
                value = step.name ?: ""
                width = 100.perc
            }

            val form = FormPanel(serializer = StepFormDTO.serializer()).apply {
                add(StepFormDTO::index, inputSpinner, required = true)
                add(StepFormDTO::name, nameField)
                add(StepFormDTO::description,
                    TextArea(label = "Description", rows = 3) { value = step.description ?: "" }
                )
                add(
                    StepFormDTO::ingredients,
                    TomSelect(
                    options = availableIngredients.map { it.id.toString() to "${it.quantity?:""}${it.unit?.shortName?:""} ${it.ingredient.nameSingular} ${if (it.notes != null) {" (${it.notes})"} else ""}" },
                    label = "Ingredients for Step",
                    multiple = true
                ).apply {
                    value = linkedIngredients.joinToString(",") { it.toString() }
                })
            }

            hPanel {
                this.add(inputSpinner)
                this.add(nameField)
            }

            add(form)

            hPanel {
                button("Update step", icon = "fas fa-check") {
                    width = 100.perc
                    marginRight = 15.px

                    onClick {
                        val stepFormDTO = form.getData()

                        val ingredientsIds = stepFormDTO.ingredients
                            ?.split(",")
                            ?.mapNotNull { it.toIntOrNull() }
                            ?: emptyList()

                        val updateStepDTO = UpdateStepDTO(
                            id = step.id,
                            index = stepFormDTO.index,
                            name = stepFormDTO.name,
                            description = stepFormDTO.description,
                            section = sectionId,
                            ingredientsInStep = ingredientsIds
                        )

                        Confirm.show(
                            "Section update",
                            "Do you really want to update the section?",
                            align = Align.LEFT,
                        ) {
                            customScope.launch {
                                if (updateStep(updateStepDTO)) {
                                    initStart()
                                    toastContainer.showToast(
                                        message = "Section updated successfully!",
                                        color = BsColor.SUCCESSBG,
                                    )
                                } else {
                                    toastContainer.showToast(
                                        message = "Section update failed",
                                        color = BsColor.DANGERBG,
                                    )
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
                    width = 200.px
                    onClick {
                        Confirm.show(
                            "Step deletion",
                            "Do you really want to delete this step?",
                            align = Align.LEFT
                        ) {
                            customScope.launch {
                                if (deleteStep(stepId = step.id)) {
                                    initStart()
                                    toastContainer.showToast(
                                        message = "Step deleted successfully!",
                                        color = BsColor.SUCCESSBG
                                    )
                                } else {
                                    toastContainer.showToast(
                                        message = "Step in recipe deletion failed",
                                        color = BsColor.DANGERBG
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

class CreateStepModal(
    customScope: CoroutineScope,
    toastContainer: ToastContainer,
    nextIndex: Int?,
    sectionId: Int,
    availableIngredients: List<FullIngredientInRecipeDTO>,
    val initStart: () -> Unit
) : Modal(
    "Create step",
    size = ModalSize.LARGE,
    closeButton = true,
    animation = true,
    escape = false
) {
    init {
        fun hideModal() {
            hide()
        }

        val inputSpinner = Spinner(label = "Index", min = 1) {
            value = nextIndex ?: 1
            width = 70.px
            marginRight = 30.px
        }
        val nameField = Text(label = "Name") {
            width = 100.perc
            placeholder = "Name of the step"
        }

        val form = FormPanel(serializer = StepFormDTO.serializer()).apply {
            add(StepFormDTO::index, inputSpinner, required = true)
            add(StepFormDTO::name, nameField)
            add(StepFormDTO::description,
                TextArea(label = "Description", rows = 3) {
                    placeholder = "Description of the step"
                }
            )
            add(
                StepFormDTO::ingredients,
                TomSelect(
                options = availableIngredients.map { it.id.toString() to "${it.quantity?:""}${it.unit?.shortName?:""} ${it.ingredient.nameSingular} ${if (it.notes != null) {" (${it.notes})"} else ""}" },
                label = "Ingredients for step",
                multiple = true
            ).apply {
                placeholder = "Ingredients for step"
            })
        }
        hPanel {
            this.add(inputSpinner)
            this.add(nameField)
        }
        add(form)


        addButton(
            Button("Create", "fas fa-pen-to-square") {
                onClick {
                    if (form.validate()) {
                        val stepFormDTO = form.getData()

                        val ingredientsIds = stepFormDTO.ingredients
                            ?.split(",")
                            ?.mapNotNull { it.toIntOrNull() }
                            ?: emptyList()

                        val createStepDTO = CreateStepDTO(
                            index = stepFormDTO.index,
                            name = stepFormDTO.name,
                            description = stepFormDTO.description,
                            section = sectionId,
                            ingredientsInStep = ingredientsIds
                        )
                        Confirm.show(
                            "Step creation",
                            "Do you really want to create the step?",
                            align = Align.LEFT,
                        ) {
                            customScope.launch {
                                if (createStep(createStepDTO)) {
                                    initStart()
                                    hideModal()
                                    toastContainer.showToast(
                                        message = "Step created successfully!",
                                        color = BsColor.SUCCESSBG,
                                    )
                                } else {
                                    toastContainer.showToast(
                                        message = "Step creation failed",
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

class CreateSectionModal(
    customScope: CoroutineScope,
    toastContainer: ToastContainer,
    nextIndex: Int?,
    recipeId: Int,
    val initStart: () -> Unit
) : Modal(
    "Create section",
    size = ModalSize.LARGE,
    closeButton = true,
    animation = true,
    escape = false
) {
    init {
        fun hideModal() {
            hide()
        }

        val inputSpinner = Spinner(label = "Index", min = 1) {
            value = nextIndex ?: 1
            width = 70.px
            marginRight = 30.px
        }
        val nameField = Text(label = "Name") {
            width = 100.perc
            placeholder = "Name of the section"
        }

        val form = FormPanel(serializer = SectionFormDTO.serializer()).apply {
            add(SectionFormDTO::index, inputSpinner, required = true)
            add(SectionFormDTO::name, nameField)
            add(SectionFormDTO::description,
                TextArea(label = "Description", rows = 3) {
                    placeholder = "Description of the section"
                }
            )
        }
        hPanel {
            this.add(inputSpinner)
            this.add(nameField)
        }
        add(form)


        addButton(
            Button("Create", "fas fa-pen-to-square") {
                onClick {
                    if (form.validate()) {
                        val sectionFormDTO = form.getData()

                        val createSectionDTO = CreateSectionDTO(
                            index = sectionFormDTO.index,
                            name = sectionFormDTO.name,
                            description = sectionFormDTO.description,
                            recipe = recipeId,
                        )

                        Confirm.show(
                            "Section creation",
                            "Do you really want to create the section?",
                            align = Align.LEFT,
                        ) {
                            customScope.launch {
                                if (createSection(createSectionDTO)) {
                                    hideModal()
                                    initStart()
                                    toastContainer.showToast(
                                        message = "Section created successfully!",
                                        color = BsColor.SUCCESSBG,
                                    )
                                } else {
                                    toastContainer.showToast(
                                        message = "Section creation failed",
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

