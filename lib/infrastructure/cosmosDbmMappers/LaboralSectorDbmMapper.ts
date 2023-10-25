import JobAreaEntity from "@domain/models/JobAreaEntity";
import IJobAreaDbm from "@infrastructure/cosmosDbModels/IJobAreaDbm";
import { singleton } from "tsyringe";

@singleton()
export default class JobAreaDbmMapper {

  dbmToEntity(dbm: IJobAreaDbm): JobAreaEntity {
    return new JobAreaEntity(
      dbm.id,
      dbm.normalizedName,
      dbm.isSelectableForEmploymentProfile,
      dbm.name,
    );
  }

  entityToDbm(entity: JobAreaEntity): IJobAreaDbm {
    return {
      id: entity.id,
      normalizedName: entity.normalizedName,
      isSelectableForEmploymentProfile: entity.isSelectableForEmploymentProfile,
      name: entity.name,
    };
  }
}
