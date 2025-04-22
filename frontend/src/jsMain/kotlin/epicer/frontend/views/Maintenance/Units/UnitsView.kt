package epicer.frontend.views.Maintenance.Units

import epicer.frontend.components.HeaderComponent
import epicer.frontend.createIngredientsRoute
import epicer.frontend.createUnitRoute
import epicer.frontend.createUnitTypesRoute
import epicer.frontend.data.deleteIngredient
import epicer.frontend.data.deleteUnit
import epicer.frontend.data.deleteUnitType
import epicer.frontend.data.getImage
import epicer.frontend.data.getIngredients
import epicer.frontend.data.getUnitTypes
import epicer.frontend.data.getUnits
import epicer.frontend.image_not_found
import io.kvision.core.AlignContent
import io.kvision.core.AlignItems
import io.kvision.core.Background
import io.kvision.core.BsBgColor
import io.kvision.core.BsColor
import io.kvision.core.Color
import io.kvision.core.Display
import io.kvision.core.FontWeight
import io.kvision.core.JustifyContent
import io.kvision.core.addBsBgColor
import io.kvision.html.Align
import io.kvision.html.ButtonStyle
import io.kvision.html.Image
import io.kvision.html.ImageShape
import io.kvision.html.button
import io.kvision.html.div
import io.kvision.html.h2
import io.kvision.html.h4
import io.kvision.html.h5
import io.kvision.html.span
import io.kvision.modal.Confirm
import io.kvision.panel.SimplePanel
import io.kvision.panel.gridPanel
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

class UnitsView(private val routing: Routing) : SimplePanel() {

    private val customScope = CoroutineScope(Dispatchers.Main)
    private val toastContainer = ToastContainer(ToastContainerPosition.BOTTOMRIGHT)

    init {
        initStart()
    }


    fun initStart() {
        removeAll()
        add(HeaderComponent(routing))


        alignItems = AlignItems.CENTER


        customScope.launch {
            val unitTypes = getUnitTypes()
            val units = getUnits()

            vPanel {
                marginTop = 30.px
                alignItems = AlignItems.CENTER

                h2("Unit Types") {
                    marginBottom = 30.px
                }
                button(text = "New Unit Type", icon = "fas fa-plus") {
                    onClick {
                        routing.navigate(createUnitTypesRoute)
                    }
                    width = 30.perc
                    minWidth = 300.px
                }

                marginBottom = 30.px
            }

            gridPanel(
                templateColumns = "repeat(auto-fill, minmax(400px, 1fr))",
                alignItems = AlignItems.CENTER,
                alignContent = AlignContent.CENTER,
            ) {
                unitTypes?.forEach { unitType ->

                    vPanel(spacing = 8) {
                        addBsBgColor(BsBgColor.BODYSECONDARY)
                        padding = 20.px
                        borderRadius = 16.px
                        height = 300.px
                        width = 80.perc
                        justifyContent = JustifyContent.SPACEBETWEEN
                        display = Display.FLEX
                        marginLeft = auto
                        marginRight = auto
                        marginBottom = 20.px



                        // Top content
                        vPanel(spacing = 10) {
                            h4() {
                                span("ID: ") {
                                    fontWeight = FontWeight.LIGHTER
                                }
                                span(unitType.id.toString())
                            }
                            h5() {
                                span("Name: ") {
                                    fontWeight = FontWeight.LIGHTER
                                }
                                span(unitType.name)
                            }
                            h5() {
                                span("Reference unit: ") {
                                    fontWeight = FontWeight.LIGHTER
                                }
                                span(unitType.referenceUnit?: "-")
                            }

                        }


                        // Spacer to push buttons down
                        div { flexGrow = 1 }

                        // Bottom buttons
                        hPanel(spacing = 8) {
                            width = 100.perc
                            justifyContent = JustifyContent.SPACEBETWEEN

                            button(text = "Edit", icon = "fas fa-edit") {
                                onClick {
                                    routing.navigate("/maintenance/units/types/${unitType.id}")
                                }
                            }

                            button(
                                text = "Delete",
                                icon = "fas fa-trash",
                                style = ButtonStyle.DANGER
                            ) {
                                onClick {
                                    Confirm.show(
                                        "Unit type deletion",
                                        "Do you really want to delete this unit type?",
                                        align = Align.LEFT
                                    ) {
                                        customScope.launch {
                                            if (deleteUnitType(unitType.id)) {
                                                initStart()
                                                toastContainer.showToast(
                                                    message = "Unit type deleted successfully!",
                                                    color = BsColor.SUCCESSBG
                                                )
                                            } else {
                                                toastContainer.showToast(
                                                    message = "Unit type deletion failed",
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
            add(div {
                height = 1.px
                background = Background(Color("lightgray"))
                marginTop = 16.px
                marginBottom = 16.px
                width = 80.perc
                marginRight = auto
                marginLeft = auto
            })

            vPanel {
                marginTop = 30.px
                alignItems = AlignItems.CENTER

                h2("Units") {
                    marginBottom = 30.px
                }
                button(text = "New Unit", icon = "fas fa-plus") {
                    onClick {
                        routing.navigate(createUnitRoute)
                    }
                    width = 30.perc
                    minWidth = 300.px
                }

                marginBottom = 30.px
            }


            gridPanel(
                templateColumns = "repeat(auto-fill, minmax(400px, 1fr))",
                alignItems = AlignItems.CENTER,
                alignContent = AlignContent.CENTER,
            ) {
                units?.forEach { unit ->

                    vPanel(spacing = 8) {
                        addBsBgColor(BsBgColor.BODYSECONDARY)
                        padding = 20.px
                        borderRadius = 16.px
                        height = 300.px
                        width = 80.perc
                        justifyContent = JustifyContent.SPACEBETWEEN
                        display = Display.FLEX
                        marginLeft = auto
                        marginRight = auto
                        marginBottom = 20.px



                        // Top content
                        vPanel(spacing = 10) {
                            h4() {
                                span("ID: ") {
                                    fontWeight = FontWeight.LIGHTER
                                }
                                span(unit.id.toString())
                            }
                            h5() {
                                span("Name: ") {
                                    fontWeight = FontWeight.LIGHTER
                                }
                                span(unit.name)
                            }
                            h5() {
                                span("Short name: ") {
                                    fontWeight = FontWeight.LIGHTER
                                }
                                span(unit.shortName)
                            }
                            h5() {
                                span("Conversion factor: ") {
                                    fontWeight = FontWeight.LIGHTER
                                }
                                span(unit.conversionFactor.toString())
                            }
                            h5() {
                                span("Unit type: ") {
                                    fontWeight = FontWeight.LIGHTER
                                }
                                span(unit.unitType)
                            }
                        }


                        // Spacer to push buttons down
                        div { flexGrow = 1 }

                        // Bottom buttons
                        hPanel(spacing = 8) {
                            width = 100.perc
                            justifyContent = JustifyContent.SPACEBETWEEN

                            button(text = "Edit", icon = "fas fa-edit") {
                                onClick {
                                    routing.navigate("/maintenance/units/${unit.id}")
                                }
                            }

                            button(
                                text = "Delete",
                                icon = "fas fa-trash",
                                style = ButtonStyle.DANGER
                            ) {
                                onClick {
                                    Confirm.show(
                                        "Unit deletion",
                                        "Do you really want to delete this unit?",
                                        align = Align.LEFT
                                    ) {
                                        customScope.launch {
                                            if (deleteUnit(unit.id)) {
                                                initStart()
                                                toastContainer.showToast(
                                                    message = "Unit deleted successfully!",
                                                    color = BsColor.SUCCESSBG
                                                )
                                            } else {
                                                toastContainer.showToast(
                                                    message = "Unit deletion failed",
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
        }
    }
}
