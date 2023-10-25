import IsaStatus from "@domain/models/IsaStatus";
import IAcademicDegreeDto from "./IAcademicDegreeDto";

export default interface IIsaDto {
  id: string;
  personId: string;
  status: IsaStatus;
  academicDegree: IAcademicDegreeDto;
  fundName: string;
}
