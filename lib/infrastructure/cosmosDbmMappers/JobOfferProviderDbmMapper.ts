import JobOfferProviderEntity from "@domain/models/JobOfferProviderEntity";
import IJobOfferProviderDbm from "@infrastructure/cosmosDbModels/IJobOfferProviderDbm";
import { singleton } from "tsyringe";

@singleton()
export default class JobOfferProviderDbmMapper {

  dbmToEntity(dbm: IJobOfferProviderDbm): JobOfferProviderEntity {
    return new JobOfferProviderEntity(
      dbm.id,
      dbm.normalizedName,
      dbm.name,
    );
  }

  entityToDbm(entity: JobOfferProviderEntity): IJobOfferProviderDbm {
    return {
      id: entity.id,
      normalizedName: entity.normalizedName,
      name: entity.name,
    };
  }
}
