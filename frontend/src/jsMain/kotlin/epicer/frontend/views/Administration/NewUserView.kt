package epicer.frontend.views.Administration

import epicer.common.dto.user.NewUserDTO
import epicer.frontend.data.createUser
import io.kvision.core.AlignItems
import io.kvision.core.BsColor
import io.kvision.core.FlexWrap
import io.kvision.form.FormPanel

import io.kvision.form.text.Password
import io.kvision.form.text.Text
import io.kvision.html.Align
import io.kvision.html.button
import io.kvision.modal.Confirm
import io.kvision.panel.HPanel
import io.kvision.panel.SimplePanel
import io.kvision.routing.Routing
import io.kvision.toast.ToastContainer
import io.kvision.toast.ToastContainerPosition
import io.kvision.utils.px
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import kotlinx.serialization.Serializable



class NewUserView(private val routing: Routing) : SimplePanel() {
    @Serializable
    data class NewUserFormDTO(
        val username: String,
        val password: String,
        val passwordConfirm: String, // only used in form validation
        val name: String
    )


    init {
        val customScope = CoroutineScope(Dispatchers.Main)
        val toastContainer = ToastContainer(ToastContainerPosition.BOTTOMRIGHT)

        marginTop = 10.px

        // Form panel (no DTO binding)
        val formPanel = FormPanel(serializer = NewUserFormDTO.serializer()).apply {
            add(
                NewUserFormDTO::username,
                Text(label = "Username") {
                    placeholder = "Enter username"
                },
                required = true,
                requiredMessage = "Username is required"
            )
            add(
                NewUserFormDTO::password,
                Password(label = "Password") {
                    placeholder = "Enter password"
                },
                required = true,
                requiredMessage = "Password is required"
            )
            add(
                NewUserFormDTO::passwordConfirm,
                Password(label = "Password") {
                    placeholder = "Re-enter password"
                },
                required = true,
                requiredMessage = "Password is required"
            )
            add(
                NewUserFormDTO::name,
                Text(label = "Name") {
                    placeholder = "Enter name"
                },
                required = true,
                requiredMessage = "Name is required"
            )

            // Password match validator
            validator = {
                when {
                    it[NewUserFormDTO::password] != it[NewUserFormDTO::passwordConfirm] -> {
                        it.getControl(NewUserFormDTO::password)?.validatorError = "Passwords do not match"
                        it.getControl(NewUserFormDTO::passwordConfirm)?.validatorError = "Passwords do not match"
                        false
                    }
                    it[NewUserFormDTO::password].toString().length < 8 -> {
                        it.getControl(NewUserFormDTO::password)?.validatorError = "Passwords must be 8 characters long"
                        it.getControl(NewUserFormDTO::passwordConfirm)?.validatorError = "Passwords must be 8 characters long"
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
            button("Create", "fas fa-create").onClick {
                if (formPanel.validate()) {
                    val newUserFormDTO = formPanel.getData()
                    val newUserDTO = NewUserDTO(
                        username = newUserFormDTO.username,
                        password = newUserFormDTO.password,
                        name = newUserFormDTO.name,
                    )
                    Confirm.show(
                        "User creation",
                        "Do you really want to create the user?",
                        align = Align.LEFT,
                    ) {
                        customScope.launch {
                            if (createUser(newUserDTO)) {
                                routing.navigate("/administration")
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
        })
    }
}
