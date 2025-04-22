package epicer.frontend.views.Maintenance.Units

import epicer.common.dto.unitType.CreateUnitTypeDTO
import epicer.common.dto.unitType.UpdateUnitTypeDTO
import epicer.frontend.components.HeaderComponent
import epicer.frontend.data.UnitTypeService.Companion.createUnitType
import epicer.frontend.unitsRoute
import io.kvision.core.AlignItems
import io.kvision.core.BsColor
import io.kvision.core.FlexWrap
import io.kvision.form.FormPanel
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


class CreateUnitTypeView(private val routing: Routing) : VPanel() {

    private val customScope = CoroutineScope(Dispatchers.Main)
    private val toastContainer = ToastContainer(ToastContainerPosition.BOTTOMRIGHT)

    @Serializable
    data class CreateUnitTypeFormDTO(
        val name: String,
    )

    init {
        add(HeaderComponent(routing))



        alignItems = AlignItems.CENTER

        customScope.launch {

            vPanel {
                marginTop = 30.px
                width = 80.perc
                maxWidth = 800.px

                h2("Create unit type") {
                    marginBottom = 20.px
                }
                val formPanel = FormPanel(serializer = CreateUnitTypeFormDTO.serializer()).apply {
                    add(
                        CreateUnitTypeFormDTO::name,
                        Text(label = "Name: ") {
                            placeholder = "ex: weight"
                        },
                        required = true
                    )
                }
                add(formPanel)

                formPanel.add(HPanel(spacing = 10, alignItems = AlignItems.CENTER, wrap = FlexWrap.WRAP) {
                    button("Create", "fas fa-plus").onClick {

                        if (formPanel.validate()) {
                            val createUnitTypeFormDTO = formPanel.getData()


                            val createUnitTypeDTO = CreateUnitTypeDTO(
                                name = createUnitTypeFormDTO.name,
                            )

                            Confirm.show(
                                "Unit type creation",
                                "Do you really want to create the unit type?",
                                align = Align.LEFT,
                            ) {
                                customScope.launch {
                                    if (createUnitType(createUnitTypeDTO)) {
                                        routing.navigate(unitsRoute)
                                        toastContainer.showToast(
                                            message = "Unit type created successfully!",
                                            color = BsColor.SUCCESSBG,
                                        )
                                    } else {
                                        toastContainer.showToast(
                                            message = "Unit type creation failed",
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

