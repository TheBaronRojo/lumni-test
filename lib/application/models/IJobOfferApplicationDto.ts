import JobOfferApplicationStatus from "@domain/models/JobOfferApplicationStatus";
import IContactInfoDto from "./IContactInfoDto";
import IEmploymentInfoDto from "./IEmploymentInfoDto";
import IIdentificationInfoDto from "./IIdentificationInfoDto";
import IJobOfferDto from "./IJobOfferDto";

export default interface IJobOfferApplicationDto {
  id: string;
  jobOffer: IJobOfferDto;
  personIdentificationInfo: IIdentificationInfoDto;
  personContactInfo: IContactInfoDto;
  personEmploymentInfo: IEmploymentInfoDto;
  createdAt:  string;
  status: JobOfferApplicationStatus;
  discardedAt: string | null;
}
