package epicer.frontend.data

import epicer.common.dto.unit.CreateUnitDTO
import epicer.common.dto.unit.FullUnitDTO
import epicer.common.dto.unit.UpdateUnitDTO
import epicer.frontend.backend_url
import kotlinx.browser.localStorage
import kotlinx.browser.window
import kotlinx.coroutines.await
import kotlinx.serialization.json.Json
import org.w3c.fetch.RequestInit
import kotlin.js.json

class UnitService {
    companion object {
        suspend fun createUnit(createUnitDTO: CreateUnitDTO): Boolean {
            return try {
                val token = localStorage.getItem("jwtToken") ?: return false

                val response = window.fetch(
                    "$backend_url/units",
                    RequestInit(
                        method = "POST",
                        headers = json(
                            "Content-Type" to "application/json",
                            "Authorization" to "Bearer $token",
                        ),
                        body = Json.encodeToString(createUnitDTO)
                    )
                ).await()

                response.status.toInt() == 204 // HttpStatusCode.NoContent
            } catch (e: Exception) {
                console.error("Unit creation failed:", e)
                false
            }
        }

        suspend fun deleteUnit(unitId: Int): Boolean {
            return try {
                val token = localStorage.getItem("jwtToken") ?: return false

                val response = window.fetch(
                    "$backend_url/units/$unitId",
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
                console.error("Unit deletion failed:", e)
                false
            }
        }

        suspend fun getUnit(unitId: Int): FullUnitDTO? {
            try {
                val token = localStorage.getItem("jwtToken") ?: return null

                val response = window.fetch(
                    "$backend_url/units/$unitId",
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

                    return Json.decodeFromString<FullUnitDTO>(responseBody)
                } else {
                    // Optionally log or handle errors
                    return null
                }
            } catch (e: Exception) {
                console.error("Failed to fetch the unit", e)
                return null
            }
        }

        suspend fun updateUnit(updateUnitDTO: UpdateUnitDTO): Boolean {
            return try {
                val token = localStorage.getItem("jwtToken") ?: return false

                val response = window.fetch(
                    "$backend_url/units",
                    RequestInit(
                        method = "PATCH",
                        headers = json(
                            "Content-Type" to "application/json",
                            "Authorization" to "Bearer $token",
                        ),
                        body = Json.encodeToString(updateUnitDTO)
                    )
                ).await()

                response.status.toInt() == 204 // HttpStatusCode.NoContent
            } catch (e: Exception) {
                console.error("Unit update failed:", e)
                false
            }
        }

        suspend fun getUnits(): List<FullUnitDTO>? {
            try {
                val token = localStorage.getItem("jwtToken") ?: return null

                val response = window.fetch(
                    "$backend_url/units",
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
                    return Json.decodeFromString<List<FullUnitDTO>>(responseBody)
                } else {
                    // Optionally log or handle errors
                    return null
                }
            } catch (e: Exception) {
                console.error("Failed to fetch units", e)
                return null
            }
        }
    }
}