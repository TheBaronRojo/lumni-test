import { ValueError } from "@domain/errors";
import SkillEntity  from "@domain/models/SkillEntity";
import SkillType from "@domain/models/SkillType";
import { singleton } from "tsyringe";
import ISkillDbm, { SkillTypeDbm } from "../cosmosDbModels/ISkillDbm";

@singleton()
export default class SkillDbmMapper {

  entityToDbm(entity: SkillEntity): ISkillDbm {
    return {
      id: entity.id,
      normalizedName: entity.normalizedName,
      isSelectableForEmploymentProfile: entity.isSelectableForEmploymentProfile,
      type: this.skillTypeToDbm(entity.type),
      name: entity.name,
    };
  }

  dbmToEntity(dbm: ISkillDbm): SkillEntity {
    return new SkillEntity(
      dbm.id,
      dbm.normalizedName,
      dbm.isSelectableForEmploymentProfile,
      this.skillTypeDbmToValue(dbm.type),
      dbm.name,
    );
  }

  skillTypeDbmToValue(dbm: SkillTypeDbm): SkillType {
    switch (dbm) {
      case "hard":
        return SkillType.Hard;
      case "soft":
        return SkillType.Soft;
      default:
        throw new ValueError(`${dbm} is not valid SkillTypeDbm`);
    }
  }

  skillTypeToDbm(value: SkillType): SkillTypeDbm {
    switch (value) {
      case SkillType.Hard:
        return "hard";
      case SkillType.Soft:
        return "soft";
    }
  }
}