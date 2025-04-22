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

        suspend fun getUnitTypes(): List<UnitTypeDTO> = suspendTransaction {
            UnitTypesTable
                .join(UnitsTable, JoinType.LEFT, UnitsTable.id, UnitTypesTable.reference_unit)
                .selectAll()
                .map {
                    UnitTypeDTO(
                        id = it[UnitTypesTable.id].value,
                        name = it[UnitTypesTable.name],
                        referenceUnit = it[UnitsTable.name],
                    )
                }
        }

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

        suspend fun getReferenceUnits(id: Int): List<BaseUnitDTO> = suspendTransaction {
            UnitsTable
                .join(UnitTypesTable, JoinType.LEFT, UnitTypesTable.id, UnitsTable.unit_type)
                .selectAll()
                .where(UnitsTable.unit_type eq id)
                .map {
                    BaseUnitDTO(
                        id = it[UnitsTable.id].value,
                        name = it[UnitsTable.name],
                        shortName = it[UnitsTable.short_name],
                    )
                }
        }

        suspend fun deleteUnitType(id: Int): Unit = suspendTransaction {
            UnitTypesTable.deleteWhere { UnitTypesTable.id eq id }
        }

        suspend fun getUnitTypeById(id: Int): UnitTypeDTO? = suspendTransaction {
            UnitTypesTable
                .join(UnitsTable, JoinType.LEFT, UnitsTable.id, UnitTypesTable.reference_unit)
                .selectAll()
                .where(UnitTypesTable.id eq id)
                .firstOrNull()
                ?.let {
                    UnitTypeDTO(
                        id = it[UnitTypesTable.id].value,
                        name = it[UnitTypesTable.name],
                        referenceUnit = it[UnitsTable.name],
                    )
                }
        }

        suspend fun updateUnitType(updateUnitType: UpdateUnitTypeDTO): Unit = suspendTransaction {
            if (updateUnitType.name != null) {
                UnitTypesTable
                    .update({ UnitTypesTable.id eq updateUnitType.id }) {
                        updateUnitType.name?.let { name -> it[UnitTypesTable.name] = name }
                    }
            }
            if (updateUnitType.updateReferenceUnit) {
                val isValid = UnitsTable
                    .select((UnitsTable.id eq updateUnitType.referenceUnit) and (UnitsTable.unit_type eq updateUnitType.id))
                    .count() > 0

                if (isValid) {
                    UnitTypesTable
                        .update({ UnitTypesTable.id eq updateUnitType.id }) {
                            updateUnitType.referenceUnit.let { referenceUnit ->
                                it[UnitTypesTable.reference_unit] = referenceUnit
                            }
                        }
                } else {
                    throw IllegalArgumentException("reference_unit ${updateUnitType.referenceUnit} does not belong to unit_type ${updateUnitType.id}")
                }
            }
        }

        suspend fun createUnitType(createUnitTypeDTO: CreateUnitTypeDTO): Unit = suspendTransaction {
            UnitTypesTable.insert {
                it[name] = createUnitTypeDTO.name
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