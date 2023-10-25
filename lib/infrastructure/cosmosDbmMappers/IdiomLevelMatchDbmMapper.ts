import IdiomLevelMatch from "@domain/models/IdiomLevelMatch";
import { ValueError } from "@domain/errors";
import IdiomLevel from "@domain/models/IdiomLevel";
import { singleton } from "tsyringe";
import IIdiomLevelMatchDbm, { IdiomLevelDbm } from "../cosmosDbModels/IIdiomLevelMatchDbm";
import IdiomDbmMapper from "./IdiomDbmMapper";

@singleton()
export default class IdiomLevelMatchDbmMapper {

  constructor(
    private idiomDbmMapper: IdiomDbmMapper,
  ) { }

  valueToDbm(value: IdiomLevelMatch): IIdiomLevelMatchDbm {
    return {
      idiom: this.idiomDbmMapper.entityToDbm(value.idiom),
      level: this.idiomLevelToDbm(value.level),
    };
  }

  dbmToValue(dbm: IIdiomLevelMatchDbm): IdiomLevelMatch {
    return new IdiomLevelMatch(
      this.idiomDbmMapper.dbmToEntity(dbm.idiom),
      this.idiomLevelDbmToValue(dbm.level),
    );
  }

  idiomLevelDbmToValue(dbm: IdiomLevelDbm): IdiomLevel {
    switch (dbm) {
      case "basic":
        return IdiomLevel.Basic;
      case "intermediate":
        return IdiomLevel.Intermediate;
      case "advanced":
        return IdiomLevel.Advanced;
      case "native":
        return IdiomLevel.Native;
      default:
        throw new ValueError(`${dbm} is not valid IdiomLevelDbm`);
    }
  }

  idiomLevelToDbm(level: IdiomLevel): IdiomLevelDbm {
    switch (level) {
      case IdiomLevel.Basic:
        return "basic";
      case IdiomLevel.Intermediate:
        return "intermediate";
      case IdiomLevel.Advanced:
        return "advanced";
      case IdiomLevel.Native:
        return "native";
    }
  }

}
