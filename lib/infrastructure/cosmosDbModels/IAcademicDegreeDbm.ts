
export type AcademicStatusDbm = 
  "academicStop"
  | "studing"
  | "graduationProcess"
  | "dropOut"
  | "graduated";

export default interface IAcademicDegreeDbm {
  personId: string;
  createdAt: number;
  updatedAt: number;
  academicStatus: AcademicStatusDbm;
  degreeObtained: string | null;
  egressDate: number | null;
}
