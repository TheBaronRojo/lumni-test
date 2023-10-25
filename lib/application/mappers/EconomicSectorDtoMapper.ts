import EconomicSectorEntity from "@domain/models/EconomicSectorEntity";
import { singleton } from "tsyringe";
import IEconomicSectorDto from "../models/IEconomicSectorDto";

@singleton()
export default class EconomicSectorDtoMapper {

  entityToDto(entity: EconomicSectorEntity): IEconomicSectorDto {
    return {
      id: entity.id,
      normalizedName: entity.normalizedName,
      isSelectableForEmploymentProfile: entity.isSelectableForEmploymentProfile,
      name: entity.name,
    };
  }
}
