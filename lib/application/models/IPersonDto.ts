import IEmploymentInfoDto from "./IEmploymentInfoDto";
import IIdentificationInfoDto from "./IIdentificationInfoDto";

export default interface IPersonDto {
  id: string;
  createdAt: number;
  employmentInfo: IEmploymentInfoDto | null;
  identificationInfo: IIdentificationInfoDto | null;
}
