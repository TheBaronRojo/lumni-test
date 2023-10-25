import AcademicDegree from "@domain/models/AcademicDegree";
import { singleton } from "tsyringe";
import IAcademicDegreeDto from "../models/IAcademicDegreeDto";

@singleton()
export default class AcademicDegreeDtoMapper {

  valueToDto(value: AcademicDegree): IAcademicDegreeDto {
    return {
      personId: value.personId,
      createdAt:value.createdAt.toISOString(),
      updatedAt: value.updatedAt.toISOString(),
      degreeObtained: value.degreeObtained,
      egressDate: value.egressDate && value.egressDate.toISOString(),
      academicStatus: value.academicStatus,
    };
  } 
}
