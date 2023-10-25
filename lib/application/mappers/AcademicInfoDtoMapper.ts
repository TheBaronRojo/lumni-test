import AcademicInfo from "@domain/models/AcademicInfo";
import { singleton } from "tsyringe";
import IAcademicInfoDto from "../models/IAcademicInfoDto";
import AcademicDegreeDtoMapper from "./AcademicDegreeDtoMapper";

@singleton()
export class AcademicInfoDtoMapper {
  constructor(
    private academicDegreeDtoMapper: AcademicDegreeDtoMapper
  ){}

  valueToDto(value: AcademicInfo): IAcademicInfoDto {
    return {
      personId: value.personId,
      createdAt:value.createdAt.toISOString(),
      updatedAt: value.updatedAt.toISOString(),
      degress: value.degress.map(x => this.academicDegreeDtoMapper.valueToDto(x)),
    };
  } 
}