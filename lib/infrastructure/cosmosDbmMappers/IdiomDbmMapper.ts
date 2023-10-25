import IdiomEntity from "@domain/models/IdiomEntity";
import { singleton } from "tsyringe";
import IIdiomDbm from "../cosmosDbModels/IIdiomDbm";

@singleton()
export default class IdiomDbmMapper {

  dbmToEntity(dbm: IIdiomDbm): IdiomEntity {
    return new IdiomEntity(
      dbm.id,
      dbm.isoCode,
      dbm.isSelectableForEmploymentProfile,
      dbm.name,
    );
  }

  entityToDbm(entity: IdiomEntity): IIdiomDbm {
    return {
      id: entity.id,
      isoCode: entity.isoCode,
      isSelectableForEmploymentProfile: entity.isSelectableForEmploymentProfile,
      name: entity.name,
    };
  }

}
