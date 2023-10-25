import IIdentificationInfoDto from "./IIdentificationInfoDto";
import IJobOfferPublicDetailDto from "./IJobOfferPublicDetailDto";

export default interface IJobOfferExternalSiteVisitDto {
  id: string;
  personIdentificationInfo: IIdentificationInfoDto;
  jobOffer: IJobOfferPublicDetailDto;
  createdAt: string;
}
