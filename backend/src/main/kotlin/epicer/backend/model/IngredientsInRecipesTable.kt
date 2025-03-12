package epicer.backend.model

import org.jetbrains.exposed.dao.id.IntIdTable
import org.jetbrains.exposed.sql.ReferenceOption

object IngredientsInRecipesTable: IntIdTable("ingredients_in_recipes") {
        val name = varchar("name", 255)
        val notes = text("notes").nullable()
        val quantity = double("quantity").nullable()
        val recipe = reference("recipe", RecipesTable, onUpdate = ReferenceOption.CASCADE, onDelete = ReferenceOption.CASCADE)
        val ingredient = reference("ingredient", IngredientsTable, onUpdate = ReferenceOption.CASCADE, onDelete = ReferenceOption.CASCADE)
        val unit = reference("unit", UnitsTable, onUpdate = ReferenceOption.CASCADE, onDelete = ReferenceOption.SET_NULL).nullable()
}