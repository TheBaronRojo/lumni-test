import IJobAreaDto from "@application/models/IJobAreaDto";
import JobAreaEntity from "@domain/models/JobAreaEntity";
import { singleton } from "tsyringe";

@singleton()
export default class JobAreaDtoMapper {

  entityToDto(entity: JobAreaEntity): IJobAreaDto {
    return {
      id: entity.id,
      normalizedName: entity.normalizedName,
      isSelectableForEmploymentProfile: entity.isSelectableForEmploymentProfile,
      name: entity.name,
    };
  }
}
