package epicer.backend.service

import epicer.backend.model.RecipesTable
import epicer.backend.service.`interface`.IRecipeService
import epicer.backend.suspendTransaction
import epicer.common.dto.recipe.BaseRecipeDTO
import org.jetbrains.exposed.sql.SqlExpressionBuilder.eq
import kotlin.collections.map

class RecipeService : IRecipeService {
    override suspend fun getBaseRecipesById(id: Int): List<BaseRecipeDTO> = suspendTransaction {
        RecipesTable
            .select(
                RecipesTable.id,
                RecipesTable.name,
                RecipesTable.image,
            )
            .where(RecipesTable.owner eq id)
            .map { row ->
                BaseRecipeDTO(
                    id = row[RecipesTable.id].value,
                    name = row[RecipesTable.name],
                    imageId = row[RecipesTable.image]?.value,
                )
            }
    }

    override suspend fun getRecipeById(id: Int): BaseRecipeDTO? = suspendTransaction {
        RecipesTable
            .select(
                RecipesTable.id,
                RecipesTable.name,
            )
            .where { RecipesTable.owner eq id }
    }

}