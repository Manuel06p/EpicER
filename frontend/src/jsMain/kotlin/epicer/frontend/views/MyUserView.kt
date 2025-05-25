package epicer.frontend.views

import epicer.common.dto.user.UpdateUserDTO
import epicer.frontend.components.HeaderComponent
import epicer.frontend.data.UserService.Companion.getRoles
import epicer.frontend.data.UserService.Companion.getUser
import epicer.frontend.data.UserService.Companion.updateMyUser
import epicer.frontend.data.UserService.Companion.updateUser
import epicer.frontend.getMyId
import epicer.frontend.getMyUser
import epicer.frontend.recipesRoute
import epicer.frontend.usersRoute
import io.kvision.core.AlignItems
import io.kvision.core.BsColor
import io.kvision.core.FlexWrap
import io.kvision.core.onEvent
import io.kvision.form.FormPanel
import io.kvision.form.check.CheckBox
import io.kvision.form.select.TomSelect
import io.kvision.form.text.Password
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


class MyUserView(private val routing: Routing) : VPanel() {

    private val customScope = CoroutineScope(Dispatchers.Main)
    private val toastContainer = ToastContainer(ToastContainerPosition.BOTTOMRIGHT)

    @Serializable
    data class UpdateUserFormDTO(
        val username: String?,
        val password: String?,
        val passwordConfirm: String?, // only used in form validation
        val name: String?,
    )

    init {
        add(HeaderComponent(routing))



        alignItems = AlignItems.CENTER

        customScope.launch {
            val user = getMyUser()
            if (user != null) {
                vPanel {
                    marginTop = 30.px
                    width = 80.perc
                    maxWidth = 800.px

                    h2("Update user (id = ${user.id})") {
                        marginBottom = 20.px
                    }
                    val formPanel = FormPanel(serializer = UpdateUserFormDTO.serializer()).apply {
                        add(
                            UpdateUserFormDTO::username,
                            Text(label = "Username (Leave it blank to not update it)") {
                                placeholder = "Current username: ${user.username}"
                            },
                        )
                        add(
                            UpdateUserFormDTO::password,
                            Password(label = "Password (Leave it blank to not update it)") {
                                placeholder = "Enter the new password"
                            },
                        )
                        add(
                            UpdateUserFormDTO::passwordConfirm,
                            Password(label = "Password (Leave it blank to not update it)") {
                                placeholder = "Re-enter the new password"
                            },
                        )
                        add(
                            UpdateUserFormDTO::name,
                            Text(label = "Name (Leave it blank to not update it)") {
                                placeholder = "Current name: ${user.name}"
                            },
                        )

                        validator = {
                            when {
                                it[UpdateUserFormDTO::password] != it[UpdateUserFormDTO::passwordConfirm] -> {
                                    it.getControl(UpdateUserFormDTO::password)?.validatorError =
                                        "Passwords do not match"
                                    it.getControl(UpdateUserFormDTO::passwordConfirm)?.validatorError =
                                        "Passwords do not match"
                                    false
                                }

                                it[UpdateUserFormDTO::password] != null && it[UpdateUserFormDTO::password].toString().length < 8 -> {
                                    it.getControl(UpdateUserFormDTO::password)?.validatorError =
                                        "Passwords must be 8 characters long"
                                    it.getControl(UpdateUserFormDTO::passwordConfirm)?.validatorError =
                                        "Passwords must be 8 characters long"
                                    false
                                }

                                it[UpdateUserFormDTO::username] == null && it[UpdateUserFormDTO::password] == null && it[UpdateUserFormDTO::name] == null -> {

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
                                val updateUserFormDTO = formPanel.getData()



                                val updateUserDTO = UpdateUserDTO(
                                    id = user.id,
                                    username = updateUserFormDTO.username,
                                    password = updateUserFormDTO.password,
                                    name = updateUserFormDTO.name,
                                    roles = null
                                )

                                Confirm.show(
                                    "User update",
                                    "Do you really want to update the user?",
                                    align = Align.LEFT,
                                ) {
                                    customScope.launch {
                                        if (updateMyUser(updateUserDTO)) {
                                            routing.navigate(recipesRoute)
                                            toastContainer.showToast(
                                                message = "User updated successfully, re-login to see updated data.",
                                                color = BsColor.SUCCESSBG,
                                            )
                                        } else {
                                            toastContainer.showToast(
                                                message = "User update failed",
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
}

