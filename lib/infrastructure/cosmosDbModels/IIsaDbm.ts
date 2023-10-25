import IAcademicDegreeDbm from "./IAcademicDegreeDbm";

export type IsaStatusDbm = 
  "active" 
  | "ceded"
  | "default"
  | "expelled"
  | "finalConciliation"
  | "finalizedPayments"
  | "inactive"
  | "manualActivation"
  | "outOfTheFound"
  | "permanentDefault"
  | "recoveredFromDefault"
  | "retired"; 

export default interface IIsaDbm {
  id: string; 
  personId: string;
  status: IsaStatusDbm;
  academicDegree: IAcademicDegreeDbm;
  fundName: string;
}
