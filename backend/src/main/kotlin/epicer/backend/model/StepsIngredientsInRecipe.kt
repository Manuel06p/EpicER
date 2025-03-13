package epicer.backend.model

import org.jetbrains.exposed.dao.id.CompositeIdTable
import org.jetbrains.exposed.sql.ReferenceOption

object StepsIngredientsInRecipe: CompositeIdTable("steps_ingredients_in_recipe") {
    val step = reference("step", StepsTable, onUpdate = ReferenceOption.CASCADE, onDelete = ReferenceOption.CASCADE)
    val ingredient_in_recipe = reference("ingredient_in_recipe", IngredientsInRecipesTable, onUpdate = ReferenceOption.CASCADE, onDelete = ReferenceOption.CASCADE)

    override val primaryKey = PrimaryKey(step, ingredient_in_recipe)
}