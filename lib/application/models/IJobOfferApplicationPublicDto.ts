import JobOfferApplicationStatus from "@domain/models/JobOfferApplicationStatus";
import IContactInfoDto from "./IContactInfoDto";
import IEmploymentInfoDto from "./IEmploymentInfoDto";
import IIdentificationInfoDto from "./IIdentificationInfoDto";
import IJobOfferPublicDetailDto from "./IJobOfferPublicDetailDto";

export default interface IJobOfferApplicationPublicDto {
  id: string;
  jobOffer: IJobOfferPublicDetailDto;
  personIdentificationInfo: IIdentificationInfoDto;
  personContactInfo: IContactInfoDto;
  personEmploymentInfo: IEmploymentInfoDto;
  createdAt: string;
  status: JobOfferApplicationStatus;
}
