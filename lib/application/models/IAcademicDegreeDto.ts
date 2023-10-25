import AcademicStatus from "@domain/models/AcademicStatus";

export default interface IAcademicDegreeDto {
  personId: string,
  createdAt: string,
  updatedAt: string,
  academicStatus: AcademicStatus,
  degreeObtained: string | null,
  egressDate: string | null,
}
