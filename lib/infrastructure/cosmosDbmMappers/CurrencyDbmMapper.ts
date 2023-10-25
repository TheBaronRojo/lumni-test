import CurrencyEntity from "@domain/models/CurrencyEntity";
import { singleton } from "tsyringe";
import ICurrencyDbm from "../cosmosDbModels/ICurrencyDbm";


@singleton()
class CurrencyDbmMapper {

  constructor(

  ) { }

  dbmToEntity(dbm: ICurrencyDbm): CurrencyEntity {
    return new CurrencyEntity(
      dbm.id,
      dbm.isoCode,
      dbm.isSelectableForEmploymentProfile,
      dbm.name,
    );
  }

  entityToDbm(entity: CurrencyEntity): ICurrencyDbm {
    return {
      id: entity.id,
      isoCode: entity.isoCode,
      isSelectableForEmploymentProfile: entity.isSelectableForEmploymentProfile,
      name: entity.name,
    };
  }

}

export default CurrencyDbmMapper;
