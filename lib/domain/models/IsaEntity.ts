import AcademicDegree from "./AcademicDegree";
import IsaStatus from "./IsaStatus";

export default class IsaEntity {
  constructor(
    public readonly id: string,
    public readonly personId: string,
    public readonly status: IsaStatus,
    public readonly academicDegree: AcademicDegree,
    public readonly fundName: string,
    public readonly fundAllowSendPromotionalCommunications: boolean,
  ) { }
}
