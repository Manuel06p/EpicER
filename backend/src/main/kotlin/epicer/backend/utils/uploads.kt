package epicer.backend.utils

import java.nio.file.Files
import java.nio.file.Paths

fun createImagesUploadsDirectory() {
    val uploadsDir = Paths.get("uploads/images")

    // Check if the directory exists
    if (Files.notExists(uploadsDir)) {
        // Create the directory (including any non-existing parent directories)
        Files.createDirectories(uploadsDir)
        println("Directory 'uploads/images' created.")
    } else {
        println("Directory 'uploads/images' already exists.")
    }
}
