import IEmploymentInfoDbm from "./IEmploymentInfoDbm";
import IIdentificationInfoDbm from "./IIdentificationInfoDbm";

interface IPersonDbm {
  id: string;
  createdAt: number;
  updatedAt: number;
  discardedAt?: number | null;
  employmentInfo: IEmploymentInfoDbm | null;
  identificationInfo: IIdentificationInfoDbm | null;
}

export default IPersonDbm;
