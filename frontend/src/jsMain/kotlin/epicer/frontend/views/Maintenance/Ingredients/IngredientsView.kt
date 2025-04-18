package epicer.frontend.views.Maintenance.Ingredients

import epicer.frontend.components.HeaderComponent
import epicer.frontend.createIngredientsRoute
import epicer.frontend.createUserRoute
import epicer.frontend.data.deleteIngredient
import epicer.frontend.data.deleteUser
import epicer.frontend.data.getImage
import epicer.frontend.data.getIngredients
import epicer.frontend.data.getUsers
import epicer.frontend.formatDateTime
import epicer.frontend.image_not_found
import io.kvision.core.AlignContent
import io.kvision.core.AlignItems
import io.kvision.core.BsBgColor
import io.kvision.core.BsColor
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
import io.kvision.html.image
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
import kotlinx.datetime.format


class IngredientsView(private val routing: Routing) : SimplePanel() {

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
            val ingredients = getIngredients()

            vPanel {
                marginTop = 30.px
                alignItems = AlignItems.CENTER

                h2("Ingredients managing") {
                    marginBottom = 30.px
                }
                button(text = "New ingredient", icon = "fas fa-plus") {
                    onClick {
                        routing.navigate(createIngredientsRoute)
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
                ingredients?.forEach { ingredient ->


                    val image = Image(
                        src = image_not_found,
                        responsive = true,
                    ) {
                        height = 75.px
                        width = 75.px
                        shape = ImageShape.CIRCLE
                        setStyle("object-fit", "cover")
                        marginTop = 20.px
                    }


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
                                span(ingredient.id.toString())
                            }
                            h5() {
                                span("Name singular: ") {
                                    fontWeight = FontWeight.LIGHTER
                                }
                                span(ingredient.nameSingular)
                            }
                            h5() {
                                span("Name plural: ") {
                                    fontWeight = FontWeight.LIGHTER
                                }
                                span(ingredient.namePlural?: "-")
                            }

                            add(image)

                        }


                        // Spacer to push buttons down
                        div { flexGrow = 1 }

                        // Bottom buttons
                        hPanel(spacing = 8) {
                            width = 100.perc
                            justifyContent = JustifyContent.SPACEBETWEEN

                            button(text = "Edit", icon = "fas fa-edit") {
                                onClick {
//                                    routing.navigate("/administration/users/${user.id}")
                                }
                            }

                            button(
                                text = "Delete",
                                icon = "fas fa-trash",
                                style = ButtonStyle.DANGER
                            ) {
                                onClick {
                                    Confirm.show(
                                        "User deletion",
                                        "Do you really want to delete this ingredient?",
                                        align = Align.LEFT
                                    ) {
                                        customScope.launch {
                                            if (deleteIngredient(ingredient.id)) {
                                                initStart()
                                                toastContainer.showToast(
                                                    message = "Ingredient deleted successfully!",
                                                    color = BsColor.SUCCESSBG
                                                )
                                            } else {
                                                toastContainer.showToast(
                                                    message = "Ingredient deletion failed",
                                                    color = BsColor.DANGERBG
                                                )
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }

                    customScope.launch {
                        val idImage = ingredient.imageId
                        if (idImage != null) {
                            val imageUrl = getImage(idImage)
                            image.src = imageUrl ?: image_not_found
                        }

                    }
                }
            }
        }
    }
}
