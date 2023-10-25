import IIsaDto from "@application/models/IIsaDto";
import IsaEntity from "@domain/models/IsaEntity";
import { singleton } from "tsyringe";
import AcademicDegreeDtoMapper from "./AcademicDegreeDtoMapper";
import IsaStatusDtoMapper from "./IsaStatusDtoMapper";

@singleton()
export class IsaDtoMapper {

  constructor(
    private academicDegreeDtoMapper: AcademicDegreeDtoMapper,
    private isaStatusDtoMapper: IsaStatusDtoMapper,
  ) { }

  entityToDto(entity: IsaEntity): IIsaDto {
    return {
      id: entity.id,
      personId: entity.personId,
      status: this.isaStatusDtoMapper.valueToDto(entity.status),
      academicDegree: this.academicDegreeDtoMapper.valueToDto(entity.academicDegree),
      fundName: entity.fundName,
    };
  }

}
