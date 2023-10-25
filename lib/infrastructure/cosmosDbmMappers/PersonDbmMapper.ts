import PersonEntity from "@domain/models/PersonEntity";
import { singleton } from "tsyringe";
import IPersonDbm from "../cosmosDbModels/IPersonDbm";
import EmploymentInfoDbmMapper from "./EmploymentInfoDbmMapper";
import IdentificationInfoDbmMapper from "./IdentificationInfoDbmMapper";

@singleton()
export default class PersonDbmMapper {
  constructor(
    private employmentInfoDbmMapper: EmploymentInfoDbmMapper,
    private identificationInfoDbmMapper: IdentificationInfoDbmMapper,
  ) { }


  entityToDbm(entity: PersonEntity): IPersonDbm {
    return {
      id: entity.id,
      createdAt: entity.createdAt.getTime(),
      updatedAt: entity.updatedAt.getTime(),
      discardedAt: entity.discardedAt === null
        ? null
        : entity.discardedAt.getTime(),
      employmentInfo: entity.employmentInfo === null
        ? null
        : this.employmentInfoDbmMapper.valueToDbm(entity.employmentInfo),
      identificationInfo: entity.identificationInfo && this.identificationInfoDbmMapper.valueToDbm(entity.identificationInfo),
    };
  }

  dbmToEntity(dbm: IPersonDbm): PersonEntity {
    return new PersonEntity(
      dbm.id,
      new Date(dbm.createdAt),
      new Date(dbm.updatedAt),
      dbm.discardedAt == null ? null : new Date(dbm.discardedAt),
      dbm.employmentInfo && this.employmentInfoDbmMapper.dbmToValue(dbm.employmentInfo),
      dbm.identificationInfo && this.identificationInfoDbmMapper.dbmToValue(dbm.identificationInfo),
    );
  }
}
