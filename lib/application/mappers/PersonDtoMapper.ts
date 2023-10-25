import { singleton } from "tsyringe";
import PersonEntity from "@domain/models/PersonEntity";
import IPersonDto from "../models/IPersonDto";
import EmploymentInfoDtoMapper from "./EmploymentInfoDtoMapper";
import IdentificationInfoDtoMapper from "./IdentificationInfoDtoMapper";

@singleton()
export default class PersonDtoMapper {

  constructor(
    private employmentInfoDtoMapper: EmploymentInfoDtoMapper,
    private identificationInfoDtoMapper: IdentificationInfoDtoMapper,
  ) { }


  entityToDto(entity: PersonEntity): IPersonDto {
    return {
      id: entity.id,
      createdAt: entity.createdAt.getTime(),
      employmentInfo: entity.employmentInfo === null
        ? null
        : this.employmentInfoDtoMapper.valueToDto(entity.employmentInfo),
      identificationInfo: entity.identificationInfo === null
        ? null
        : this.identificationInfoDtoMapper.valueToDto(entity.identificationInfo),      
    };
  }
}
