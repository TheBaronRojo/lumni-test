import AcademicStatus from "./AcademicStatus";

export default class AcademicDegree {
  constructor(
    public readonly personId: string,
    public readonly createdAt: Date,
    public readonly updatedAt: Date,
    public readonly academicStatus: AcademicStatus,
    public readonly degreeObtained: string | null,
    public readonly egressDate: Date | null,
  ) { }
}
