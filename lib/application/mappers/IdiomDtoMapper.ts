import IdiomEntity from "@domain/models/IdiomEntity";
import { singleton } from "tsyringe";
import IIdiomDto from "../models/IIdiomDto";

@singleton()
export default class IdiomDtoMapper {

  entityToDto(entity: IdiomEntity): IIdiomDto {
    return {
      id: entity.id,
      isoCode: entity.isoCode,
      isSelectableForEmploymentProfile: entity.isSelectableForEmploymentProfile,
      name: entity.name,
    };
  }

}
