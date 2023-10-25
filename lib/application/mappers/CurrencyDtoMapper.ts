import CurrencyEntity from "@domain/models/CurrencyEntity";
import { singleton } from "tsyringe";
import ICurrencyDto from "../models/ICurrencyDto";

@singleton()
export default class CurrencyDtoMapper {

  entityToDto(entity: CurrencyEntity): ICurrencyDto {
    return {
      id: entity.id,
      isSelectableForEmploymentProfile: entity.isSelectableForEmploymentProfile,
      isoCode: entity.isoCode,
      name: entity.name,
    };
  }

}
