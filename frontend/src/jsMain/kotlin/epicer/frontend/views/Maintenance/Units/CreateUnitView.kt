package epicer.frontend.views.Maintenance.Units

import epicer.common.dto.ingredient.CreateIngredientDTO
import epicer.common.dto.unit.CreateUnitDTO
import epicer.common.dto.unitType.CreateUnitTypeDTO
import epicer.frontend.components.HeaderComponent
import epicer.frontend.data.createIngredient
import epicer.frontend.data.createUnit
import epicer.frontend.data.createUnitType
import epicer.frontend.data.getUnitTypes
import epicer.frontend.ingredientsRoute
import epicer.frontend.unitsRoute
import epicer.frontend.views.Maintenance.Units.CreateUnitTypeView.CreateUnitTypeFormDTO
import io.kvision.core.AlignItems
import io.kvision.core.BsColor
import io.kvision.core.FlexWrap
import io.kvision.core.onClickLaunch
import io.kvision.form.FormPanel
import io.kvision.form.formPanel
import io.kvision.form.getDataWithFileContent
import io.kvision.form.number.Numeric
import io.kvision.form.select.TomSelect

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


class CreateUnitView(private val routing: Routing) : VPanel() {
    @Serializable
    data class CreateUnitFormDTO(
        val name: String,
        val shortName: String,
        val conversionFactor: Double,
        val unitType: String,
    )

    private val customScope = CoroutineScope(Dispatchers.Main)
    private val toastContainer = ToastContainer(ToastContainerPosition.BOTTOMRIGHT)

    init {
        add(HeaderComponent(routing))

        alignItems = AlignItems.CENTER


        customScope.launch {
            val unitTypes = getUnitTypes()

            vPanel {
                marginTop = 30.px
                width = 80.perc
                maxWidth = 800.px

                h2("Create unit") {
                    marginBottom = 20.px
                }
                val formPanel = FormPanel(serializer = CreateUnitFormDTO.serializer()).apply {
                    add(
                        CreateUnitFormDTO::name,
                        Text(label = "Name: ") {
                            placeholder = "ex: grams"
                        },
                        required = true
                    )
                    add(
                        CreateUnitFormDTO::shortName,
                        Text(label = "Short name: ") {
                            placeholder = "ex: g"
                        },
                        required = true
                    )
                    add(
                        CreateUnitFormDTO::conversionFactor,
                        Numeric(label = "Conversion factor: ") {
                            decimals = 3
                            placeholder = "ex: 1,000"
                            min = 0
                        },
                        required = true
                    )

                    add(
                        CreateUnitFormDTO::unitType,
                        TomSelect(
                            options = unitTypes?.map { it.id.toString() to it.name },
                            label = "Unit type",
                            multiple = false
                        ) {
                            placeholder = "ex: weight"
                        },
                        required = true
                    )
                }
                add(formPanel)

                formPanel.add(HPanel(spacing = 10, alignItems = AlignItems.CENTER, wrap = FlexWrap.WRAP) {
                    button("Create", "fas fa-plus").onClick {

                        if (formPanel.validate()) {
                            val createUnitFormDTO = formPanel.getData()


                            val createUnitDTO = CreateUnitDTO(
                                name = createUnitFormDTO.name,
                                shortName = createUnitFormDTO.shortName,
                                conversionFactor = createUnitFormDTO.conversionFactor,
                                unitType = createUnitFormDTO.unitType.toInt()
                            )

                            Confirm.show(
                                "Unit creation",
                                "Do you really want to create the unit?",
                                align = Align.LEFT,
                            ) {
                                customScope.launch {
                                    if (createUnit(createUnitDTO)) {
                                        routing.navigate(unitsRoute)
                                        toastContainer.showToast(
                                            message = "Unit created successfully!",
                                            color = BsColor.SUCCESSBG,
                                        )
                                    } else {
                                        toastContainer.showToast(
                                            message = "Unit creation failed",
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
