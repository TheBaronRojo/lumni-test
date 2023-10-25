import IIsaStatusDto from "@application/models/IIsaStatusDto";
import IsaStatus from "@domain/models/IsaStatus";
import { singleton } from "tsyringe";

@singleton()
export default class IsaStatusDtoMapper {

  valueToDto(value: IsaStatus): IIsaStatusDto {
    return {
      general: value.general,
      employment: value.employment,
    };
  }

}
