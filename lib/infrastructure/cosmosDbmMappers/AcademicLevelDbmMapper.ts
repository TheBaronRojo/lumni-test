import { ValueError } from "@domain/errors";
import AcademicLevel from "@domain/models/AcademicLevel";
import AcademicLevelDbm from "@infrastructure/cosmosDbModels/AcademicLevelDbm";
import { singleton } from "tsyringe";

@singleton()
export default class AcademicLevelDbmMapper {

  valueToDbm(value: AcademicLevel): AcademicLevelDbm {
    switch (value) {
      case AcademicLevel.Master:
        return "master";
      case AcademicLevel.Professional:
        return "professional";
      case AcademicLevel.Specialization:
        return "specialization";
      case AcademicLevel.Technical:
        return "technical";
      case AcademicLevel.Tenogologist:
        return "tenogologist";
    }
  }

  dbmToValue(dbm: AcademicLevelDbm): AcademicLevel {
    switch (dbm) {
      case "master":
        return AcademicLevel.Master;
      case "professional":
        return AcademicLevel.Professional;
      case "specialization":
        return AcademicLevel.Specialization;
      case "technical":
        return AcademicLevel.Technical;
      case "tenogologist":
        return AcademicLevel.Tenogologist;
      default:
        throw new ValueError(`${dbm} is not valid AcademicLevelDbm`);
    }
  }

}
