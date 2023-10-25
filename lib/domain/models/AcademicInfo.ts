import AcademicDegree from "./AcademicDegree";

export default class AcademicInfo {
  constructor(
    public readonly personId: string,
    public readonly createdAt: Date,
    public readonly updatedAt: Date,
    public readonly degress: AcademicDegree[]
  ) {

  }
}
