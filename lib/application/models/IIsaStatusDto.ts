import IsaEmploymentStatus from "@domain/models/IsaEmploymentStatus";
import IsaGeneralStatus from "@domain/models/IsaGeneralStatus";

export default interface IIsaStatusDto {
  general: IsaGeneralStatus;
  employment: IsaEmploymentStatus;
}
