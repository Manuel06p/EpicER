package epicer.backend.service

import epicer.backend.model.UnitTypesTable
import epicer.backend.model.UnitsTable
import epicer.backend.model.UsersTable
import epicer.backend.model.UsersTable.hashed_password
import epicer.backend.model.UsersTable.username
import epicer.backend.suspendTransaction
import epicer.backend.utils.hashPassword
import epicer.common.dto.unit.BaseUnitDTO
import epicer.common.dto.unit.CreateUnitDTO
import epicer.common.dto.unit.FullUnitDTO
import epicer.common.dto.unit.UpdateUnitDTO
import epicer.common.dto.unitType.CreateUnitTypeDTO
import epicer.common.dto.unitType.UnitTypeDTO
import epicer.common.dto.unitType.UpdateUnitTypeDTO
import epicer.common.dto.user.CreateUserDTO
import org.jetbrains.exposed.sql.*
import org.jetbrains.exposed.sql.SqlExpressionBuilder.eq
import kotlin.collections.map
import org.jetbrains.exposed.sql.and
import org.jetbrains.exposed.sql.name
import kotlin.collections.get
import kotlin.collections.set

class UnitService {
    companion object {
        suspend fun getUnits(): List<FullUnitDTO> = suspendTransaction {
            UnitsTable
                .join(UnitTypesTable, JoinType.LEFT, UnitTypesTable.id, UnitsTable.unit_type)
                .selectAll()
                .map {
                    FullUnitDTO(
                        id = it[UnitsTable.id].value,
                        name = it[UnitsTable.name],
                        shortName = it[UnitsTable.short_name],
                        conversionFactor = it[UnitsTable.conversion_factor],
                        unitType = it[UnitTypesTable.name]
                    )
                }
        }

        suspend fun createUnit(createUnitDTO: CreateUnitDTO): Unit = suspendTransaction {
            UnitsTable.insert {
                it[name] = createUnitDTO.name
                it[short_name] = createUnitDTO.shortName
                it[conversion_factor] = createUnitDTO.conversionFactor
                it[unit_type] = createUnitDTO.unitType
            }
        }

        suspend fun deleteUnit(id: Int): Unit = suspendTransaction {
            UnitsTable.deleteWhere { UnitsTable.id eq id }
        }


        suspend fun getUnitById(id: Int): FullUnitDTO? = suspendTransaction {
            UnitsTable
                .join(UnitTypesTable, JoinType.LEFT, UnitTypesTable.id, UnitsTable.unit_type)
                .selectAll()
                .where(UnitsTable.id eq id)
                .firstOrNull()
                ?.let {
                    FullUnitDTO(
                        id = it[UnitsTable.id].value,
                        name = it[UnitsTable.name],
                        shortName = it[UnitsTable.short_name],
                        conversionFactor = it[UnitsTable.conversion_factor],
                        unitType = it[UnitTypesTable.name]
                    )
                }
        }

        suspend fun updateUnit(updateUnit: UpdateUnitDTO): Unit = suspendTransaction {
            val currentUnitType = UnitsTable
                .select(UnitsTable.unit_type)
                .where(UnitsTable.id eq updateUnit.id)
                .singleOrNull()
                ?.get(UnitsTable.unit_type)?.value

            if (updateUnit.unitType != null && updateUnit.unitType != currentUnitType) {
                UnitTypesTable
                    .update({ UnitTypesTable.reference_unit eq updateUnit.id }) {
                        it[reference_unit] = null
                    }
            }

            UnitsTable
                .update({ UnitsTable.id eq updateUnit.id }) {
                    updateUnit.name?.let { value -> it[UnitsTable.name] = value }
                    updateUnit.shortName?.let { value -> it[UnitsTable.short_name] = value }
                    updateUnit.conversionFactor?.let { value -> it[UnitsTable.conversion_factor] = value }
                    updateUnit.unitType?.let { value -> it[UnitsTable.unit_type] = value }
                }

        }

    }

}