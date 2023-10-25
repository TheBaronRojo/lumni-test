import SkillEntity from "@domain/models/SkillEntity";
import { singleton } from "tsyringe";
import ISkillDto from "../models/ISkillDto";

@singleton()
export default class SkillDtoMapper {

  entityToDto(entity: SkillEntity): ISkillDto {
    return {
      id: entity.id,
      normalizedName: entity.normalizedName,
      isSelectableForEmploymentProfile: entity.isSelectableForEmploymentProfile,
      type:entity.type,
      name: entity.name,
    };
  }
}
