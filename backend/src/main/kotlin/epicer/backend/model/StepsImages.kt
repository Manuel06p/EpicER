package epicer.backend.model

import org.jetbrains.exposed.dao.id.CompositeIdTable
import org.jetbrains.exposed.sql.ReferenceOption

object StepsImages: CompositeIdTable("steps_images") {
    val step = reference("step", StepsTable, onUpdate = ReferenceOption.CASCADE, onDelete = ReferenceOption.CASCADE)
    val image = reference("image", ImagesTable, onUpdate = ReferenceOption.CASCADE, onDelete = ReferenceOption.CASCADE)

    override val primaryKey = PrimaryKey(step, image)
}