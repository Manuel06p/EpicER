package epicer.frontend.data

import epicer.common.dto.unit.BaseUnitDTO
import epicer.common.dto.unitType.CreateUnitTypeDTO
import epicer.common.dto.unitType.UnitTypeDTO
import epicer.common.dto.unitType.UpdateUnitTypeDTO
import epicer.frontend.backend_url
import kotlinx.browser.localStorage
import kotlinx.browser.window
import kotlinx.coroutines.await
import kotlinx.serialization.json.Json
import org.w3c.fetch.RequestInit
import kotlin.js.json

class UnitTypeService {
    companion object {
        suspend fun getUnitTypes(): List<UnitTypeDTO>? {
            try {
                val token = localStorage.getItem("jwtToken") ?: return null

                val response = window.fetch(
                    "$backend_url/unit_types",
                    RequestInit(
                        method = "GET",
                        headers = json(
                            "Content-Type" to "application/json",
                            "Authorization" to "Bearer $token"
                        )
                    )
                ).await()

                if (response.status.toInt() == 200) {
                    val responseBody = response.text().await()

                    // Decode the response body into list of BaseRecipeDTO
                    return Json.decodeFromString<List<UnitTypeDTO>>(responseBody)
                } else {
                    // Optionally log or handle errors
                    return null
                }
            } catch (e: Exception) {
                console.error("Failed to fetch unit types", e)
                return null
            }
        }

        suspend fun deleteUnitType(unitTypeId: Int): Boolean {
            return try {
                val token = localStorage.getItem("jwtToken") ?: return false

                val response = window.fetch(
                    "$backend_url/unit_types/$unitTypeId",
                    RequestInit(
                        method = "DELETE",
                        headers = json(
                            "Content-Type" to "application/json",
                            "Authorization" to "Bearer $token",
                        ),
                    )
                ).await()

                response.status.toInt() == 204 // HttpStatusCode.NoContent
            } catch (e: Exception) {
                console.error("Unit type deletion failed:", e)
                false
            }
        }

        // Get unit type by id
        suspend fun getUnitType(unitTypeId: Int): UnitTypeDTO? {
            try {
                val token = localStorage.getItem("jwtToken") ?: return null

                val response = window.fetch(
                    "$backend_url/unit_types/$unitTypeId",
                    RequestInit(
                        method = "GET",
                        headers = json(
                            "Content-Type" to "application/json",
                            "Authorization" to "Bearer $token"
                        )
                    )
                ).await()

                if (response.status.toInt() == 200) {
                    val responseBody = response.text().await()

                    return Json.decodeFromString<UnitTypeDTO>(responseBody)
                } else {
                    // Optionally log or handle errors
                    return null
                }
            } catch (e: Exception) {
                console.error("Failed to fetch the unit type", e)
                return null
            }
        }

        suspend fun getReferenceUnits(unitTypeId: Int): List<BaseUnitDTO>? {
            try {
                val token = localStorage.getItem("jwtToken") ?: return null

                val response = window.fetch(
                    "$backend_url/unit_types/$unitTypeId/reference_units",
                    RequestInit(
                        method = "GET",
                        headers = json(
                            "Content-Type" to "application/json",
                            "Authorization" to "Bearer $token"
                        )
                    )
                ).await()

                if (response.status.toInt() == 200) {
                    val responseBody = response.text().await()

                    // Decode the response body into list of BaseRecipeDTO
                    return Json.decodeFromString<List<BaseUnitDTO>>(responseBody)
                } else {
                    // Optionally log or handle errors
                    return null
                }
            } catch (e: Exception) {
                console.error("Failed to fetch reference units", e)
                return null
            }
        }

        suspend fun updateUnitType(updateUnitTypeDTO: UpdateUnitTypeDTO): Boolean {
            return try {
                val token = localStorage.getItem("jwtToken") ?: return false

                val response = window.fetch(
                    "$backend_url/unit_types",
                    RequestInit(
                        method = "PATCH",
                        headers = json(
                            "Content-Type" to "application/json",
                            "Authorization" to "Bearer $token",
                        ),
                        body = Json.encodeToString(updateUnitTypeDTO)
                    )
                ).await()

                response.status.toInt() == 204 // HttpStatusCode.NoContent
            } catch (e: Exception) {
                console.error("Unit type update failed:", e)
                false
            }
        }

        suspend fun createUnitType(createUnitTypeDTO: CreateUnitTypeDTO): Boolean {
            return try {
                val token = localStorage.getItem("jwtToken") ?: return false

                val response = window.fetch(
                    "$backend_url/unit_types",
                    RequestInit(
                        method = "POST",
                        headers = json(
                            "Content-Type" to "application/json",
                            "Authorization" to "Bearer $token",
                        ),
                        body = Json.encodeToString(createUnitTypeDTO)
                    )
                ).await()

                response.status.toInt() == 204 // HttpStatusCode.NoContent
            } catch (e: Exception) {
                console.error("Unit type creation failed:", e)
                false
            }
        }
    }
}