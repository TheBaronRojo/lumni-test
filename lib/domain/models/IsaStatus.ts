import IsaEmploymentStatus from "./IsaEmploymentStatus";
import IsaGeneralStatus from "./IsaGeneralStatus";

export default class IsaStatus {
  constructor(
    public readonly general: IsaGeneralStatus,
    public readonly employment: IsaEmploymentStatus,
  ) { }

}
