package epicer.backend.service

import epicer.backend.model.UnitTypesTable
import epicer.backend.model.UnitsTable
import epicer.backend.suspendTransaction
import epicer.common.dto.unit.BaseUnitDTO
import epicer.common.dto.unit.FullUnitDTO
import epicer.common.dto.unitType.UnitTypeDTO
import epicer.common.dto.unitType.UpdateUnitTypeDTO
import org.jetbrains.exposed.sql.*
import org.jetbrains.exposed.sql.SqlExpressionBuilder.eq
import kotlin.collections.map
import org.jetbrains.exposed.sql.and

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
                            updateUnitType.referenceUnit.let { referenceUnit -> it[UnitTypesTable.reference_unit] = referenceUnit }
                        }
                } else {
                    throw IllegalArgumentException("reference_unit ${updateUnitType.referenceUnit} does not belong to unit_type ${updateUnitType.id}")
                }
            }
        }
    }
}