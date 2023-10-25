import EconomicSectorEntity from "@domain/models/EconomicSectorEntity";
import { singleton } from "tsyringe";
import IEconomicSectorDbm from "../cosmosDbModels/IEconomicSectorDbm";

@singleton()
export default class EconomicSectorDbmMapper {

  entityToDbm(entity: EconomicSectorEntity): IEconomicSectorDbm {
    return {
      id: entity.id,
      normalizedName: entity.normalizedName,
      isSelectableForEmploymentProfile: entity.isSelectableForEmploymentProfile,
      name: entity.name,
    };
  }

  dbmToEntity(dbm: IEconomicSectorDbm): EconomicSectorEntity {
    return new EconomicSectorEntity(
      dbm.id,
      dbm.normalizedName,
      dbm.isSelectableForEmploymentProfile,
      dbm.name,
    );
  }
}
