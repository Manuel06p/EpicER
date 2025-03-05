package epicer.backend.model

import org.jetbrains.exposed.dao.id.CompositeIdTable
import org.jetbrains.exposed.dao.id.IntIdTable
import org.jetbrains.exposed.sql.ReferenceOption

object IngredientsRecipesTable : CompositeIdTable("ingredients_recipes") {
    val ingredient = reference("ingredient", IngredientsTable, onUpdate = ReferenceOption.CASCADE, onDelete = ReferenceOption.CASCADE)
    val recipe = reference("recipe", RecipesTable, onUpdate = ReferenceOption.CASCADE, onDelete = ReferenceOption.CASCADE)

    override val primaryKey = PrimaryKey(ingredient, recipe)
}
