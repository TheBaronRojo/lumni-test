import IAcademicDegreeDto from "./IAcademicDegreeDto";

export default interface IAcademicInfoDto {
  personId: string;
  createdAt: string
  updatedAt: string;
  degress: IAcademicDegreeDto[];
}
