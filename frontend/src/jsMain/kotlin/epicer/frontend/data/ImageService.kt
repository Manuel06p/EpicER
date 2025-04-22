package epicer.frontend.data

import epicer.frontend.backend_url
import kotlinx.browser.localStorage
import kotlinx.browser.window
import kotlinx.coroutines.await
import org.w3c.dom.url.URL
import org.w3c.fetch.RequestInit
import kotlin.js.json

class ImageService {
    companion object {
        suspend fun getImage(imageId: Int?): String? {
            try {
                // Get the JWT token from local storage
                val token = localStorage.getItem("jwtToken") ?: return null

                // Send the request to fetch the image from the backend
                val response = window.fetch(
                    "$backend_url/images/$imageId",  // Ensure the imageId is part of the URL
                    RequestInit(
                        method = "GET",
                        headers = json(
                            "Authorization" to "Bearer $token"
                        )
                    )
                ).await()

                // If the response status is OK, convert the response to a Blob (binary data)
                if (response.status.toInt() == 200) {
                    val blob = response.blob().await()

                    // Create a URL for the image blob that can be used in an <img> tag
                    return URL.createObjectURL(blob)
                } else {
                    // Handle the case where the image is not found or an error occurs
                    return null
                }
            } catch (e: Exception) {
                console.error("Failed to fetch image", e)
                return null
            }
        }
    }
}