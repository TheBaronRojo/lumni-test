import TypeOfOffice from "@domain/models/TypeOfOffice";
import IGeographyLocationSummaryDto from "./IGeographyLocationSummaryDto";
import IJobOfferCompanyInfoDto from "./IJobOfferCompanyInfoDto";
import IRemunerationOfferDto from "./IRemunerationOfferDto";


interface IJobOfferSummaryDto {
  id: string;
  jobRole: string;
  jobFunctions: string;
  companyInfo: IJobOfferCompanyInfoDto;
  geographyLocations: IGeographyLocationSummaryDto[];
  typeOfOffice: TypeOfOffice | null;
  remunerationOffer: IRemunerationOfferDto;
  createdAt: string;
  expiresAt: string | null;
}

export default IJobOfferSummaryDto;
