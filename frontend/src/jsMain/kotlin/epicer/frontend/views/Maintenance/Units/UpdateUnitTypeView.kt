package epicer.frontend.views.Maintenance.Units

import epicer.common.dto.unit.BaseUnitDTO
import epicer.common.dto.unitType.UnitTypeDTO
import epicer.common.dto.unitType.UpdateUnitTypeDTO
import epicer.frontend.components.HeaderComponent
import epicer.frontend.data.getReferenceUnits
import epicer.frontend.data.getUnitType
import epicer.frontend.data.updateUnitType
import epicer.frontend.unitsRoute
import io.kvision.core.AlignItems
import io.kvision.core.BsColor
import io.kvision.core.FlexWrap
import io.kvision.core.onEvent
import io.kvision.form.FormPanel
import io.kvision.form.check.CheckBox
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


class UpdateUnitTypeView(private val routing: Routing, unitTypeId: Int) : VPanel() {

    private val customScope = CoroutineScope(Dispatchers.Main)
    private val toastContainer = ToastContainer(ToastContainerPosition.BOTTOMRIGHT)

    @Serializable
    data class UpdateUnitTypeFormDTO(
        val name: String?,
        val updateReferenceUnit: Boolean,
        val referenceUnit: String?,
    )

    init {
        add(HeaderComponent(routing))



        alignItems = AlignItems.CENTER

        customScope.launch {
            val referenceUnits: List<BaseUnitDTO>? = getReferenceUnits(unitTypeId)
            val unitType: UnitTypeDTO? = getUnitType(unitTypeId)



            vPanel {
                marginTop = 30.px
                width = 80.perc
                maxWidth = 800.px

                h2("Update unit type (id = $unitTypeId)") {
                    marginBottom = 20.px
                }
                val formPanel = FormPanel(serializer = UpdateUnitTypeFormDTO.serializer()).apply {
                    add(
                        UpdateUnitTypeFormDTO::name,
                        Text(label = "Name (Leave it blank to not update it)") {
                            placeholder = "Current name: ${unitType?.name}"
                        },
                    )
                    val updateReferenceUnitCheckbox = CheckBox(label = "Update reference unit") {
                        value = false
                    }

                    val referenceUnitSelect = TomSelect(
                        options = referenceUnits?.map { it.id.toString() to it.name },
                        label = "Reference unit",
                        multiple = false
                    ) {
                        val placeholderText = "Current reference unit: ${unitType?.referenceUnit?: "-"}"
                        placeholder = placeholderText
                    }

                    add(UpdateUnitTypeFormDTO::updateReferenceUnit, updateReferenceUnitCheckbox)
                    add(UpdateUnitTypeFormDTO::referenceUnit, referenceUnitSelect)
                    referenceUnitSelect.disabled = !updateReferenceUnitCheckbox.value
                    updateReferenceUnitCheckbox.onEvent {
                        change = {
                            referenceUnitSelect.disabled = !updateReferenceUnitCheckbox.value
                        }
                    }


                    validator = {
                        when {
                            it[UpdateUnitTypeFormDTO::name] == null && it[UpdateUnitTypeFormDTO::updateReferenceUnit] == false -> {
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
                    button("Update", "fas fa-pen-to-square").onClick {

                        if (formPanel.validate()) {
                            val updateUnitTypeFormDTO = formPanel.getData()

                            val referenceUnit: Int? = updateUnitTypeFormDTO.referenceUnit?.toInt()


                            val updateUnitTypeDTO = UpdateUnitTypeDTO(
                                id = unitTypeId,
                                name = updateUnitTypeFormDTO.name,
                                updateReferenceUnit = updateUnitTypeFormDTO.updateReferenceUnit,
                                referenceUnit = referenceUnit,
                            )

                            Confirm.show(
                                "Unit type update",
                                "Do you really want to update the unit type?",
                                align = Align.LEFT,
                            ) {
                                customScope.launch {
                                    if (updateUnitType(updateUnitTypeDTO)) {
                                        routing.navigate(unitsRoute)
                                        toastContainer.showToast(
                                            message = "Unit type updated successfully!",
                                            color = BsColor.SUCCESSBG,
                                        )
                                    } else {
                                        toastContainer.showToast(
                                            message = "Unit type update failed",
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

