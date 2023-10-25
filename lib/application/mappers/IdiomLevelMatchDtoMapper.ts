import IdiomLevelMatch from "@domain/models/IdiomLevelMatch";
import { singleton } from "tsyringe";
import IIdiomLevelMatchDto from "../models/IIdiomLevelMatchDto";
import IdiomDtoMapper from "./IdiomDtoMapper";

@singleton()
export default class IdiomLevelMatchDtoMapper {

  constructor(
    private idiomDtoMapper: IdiomDtoMapper,
  ) { }

  valueToDto(value: IdiomLevelMatch): IIdiomLevelMatchDto {
    return {
      idiom: this.idiomDtoMapper.entityToDto(value.idiom),
      level: value.level,
    };
  }

}
