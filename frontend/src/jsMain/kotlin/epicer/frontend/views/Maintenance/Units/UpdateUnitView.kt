package epicer.frontend.views.Maintenance.Units

import epicer.common.dto.unit.BaseUnitDTO
import epicer.common.dto.unit.FullUnitDTO
import epicer.common.dto.unit.UpdateUnitDTO
import epicer.common.dto.unitType.UnitTypeDTO
import epicer.common.dto.unitType.UpdateUnitTypeDTO
import epicer.frontend.components.HeaderComponent
import epicer.frontend.data.UnitService.Companion.getUnit
import epicer.frontend.data.UnitService.Companion.updateUnit
import epicer.frontend.data.UnitTypeService.Companion.getUnitTypes
import epicer.frontend.unitsRoute
import epicer.frontend.views.Maintenance.Units.CreateUnitView.CreateUnitFormDTO
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


class UpdateUnitView(private val routing: Routing, unitId: Int) : VPanel() {

    private val customScope = CoroutineScope(Dispatchers.Main)
    private val toastContainer = ToastContainer(ToastContainerPosition.BOTTOMRIGHT)

    @Serializable
    data class UpdateUnitFormDTO(
        val name: String?,
        val shortName: String?,
        val conversionFactor: Double?,
        val unitType: String?,
    )

    init {
        add(HeaderComponent(routing))



        alignItems = AlignItems.CENTER

        customScope.launch {
            val unitTypes = getUnitTypes()
            val unit: FullUnitDTO? = getUnit(unitId)



            vPanel {
                marginTop = 30.px
                width = 80.perc
                maxWidth = 800.px

                h2("Update unit (id = $unitId)") {
                    marginBottom = 20.px
                }
                val formPanel = FormPanel(serializer = UpdateUnitFormDTO.serializer()).apply {
                    add(
                        UpdateUnitFormDTO::name,
                        Text(label = "Name (Leave it blank to not update it)") {
                            placeholder = "Current name: ${unit?.name}"
                        },
                    )
                    add(
                        UpdateUnitFormDTO::shortName,
                        Text(label = "Short name (Leave it blank to not update it)") {
                            placeholder = "Current short name: ${unit?.shortName}"
                        },
                    )
                    add(
                        UpdateUnitFormDTO::conversionFactor,
                        Numeric(label = "Conversion factor (Leave it blank to not update it)") {
                            decimals = 3
                            placeholder = "Current conversion factor: ${unit?.conversionFactor}"
                            min = 0
                        },
                    )

                    add(
                        UpdateUnitFormDTO::unitType,
                        TomSelect(
                            options = unitTypes?.map { it.id.toString() to it.name },
                            label = "Unit type (Leave it blank to not update it)",
                            multiple = false
                        ) {
                            placeholder = "Current unit type: ${unit?.unitType}"
                        },
                    )


                    validator = {
                        when {
                            it[UpdateUnitFormDTO::name] == null && it[UpdateUnitFormDTO::shortName] == null && it[UpdateUnitFormDTO::conversionFactor] == null && it[UpdateUnitFormDTO::unitType] == null -> {
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
                            val updateUnitFormDTO = formPanel.getData()

                            val updateUnitDTO = UpdateUnitDTO(
                                id = unitId,
                                name = updateUnitFormDTO.name,
                                shortName = updateUnitFormDTO.shortName,
                                conversionFactor = updateUnitFormDTO.conversionFactor,
                                unitType = updateUnitFormDTO.unitType?.toInt()
                            )

                            Confirm.show(
                                "Unit update",
                                "Do you really want to update the unit?",
                                align = Align.LEFT,
                            ) {
                                customScope.launch {
                                    if (updateUnit(updateUnitDTO)) {
                                        routing.navigate(unitsRoute)
                                        toastContainer.showToast(
                                            message = "Unit updated successfully!",
                                            color = BsColor.SUCCESSBG,
                                        )
                                    } else {
                                        toastContainer.showToast(
                                            message = "Unit update failed",
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

