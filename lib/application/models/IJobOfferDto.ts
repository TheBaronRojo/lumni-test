import IJobOfferContactInfoDto from "./IJobOfferContactInfoDto";
import IGeographyLocationSummaryDto from "./IGeographyLocationSummaryDto";
import ISkillDto from "./ISkillDto";
import AcademicLevel from "@domain/models/AcademicLevel";
import TypeOfOffice from "@domain/models/TypeOfOffice";
import IExperienceMonthsRangeDto from "./IExperienceMonthsRangeDto";
import TypeOfJobContract from "@domain/models/TypeOfJobContract";
import IJobAreaDto from "./IJobAreaDto";
import IIdiomLevelMatchDto from "./IIdiomLevelMatchDto";
import IJobOfferCustomActionsConfigDto from "./IJobOfferCustomActionsConfigDto";
import IJobOfferCompanyInfoDto from "./IJobOfferCompanyInfoDto";
import IJobOfferProviderDto from "./IJobOfferProviderDto";
import IRemunerationOfferDto from "./IRemunerationOfferDto";

interface IJobOfferDto {
  id: string;
  jobRole: string;
  jobFunctions: string;
  jobKnowledgeArea: string | null;
  requiredAcademicLevels: AcademicLevel[];
  requiredAcademicFormation: string | null;
  requiredSkills: ISkillDto[];
  contactInfo: IJobOfferContactInfoDto | null;
  companyInfo: IJobOfferCompanyInfoDto;
  geographyLocations: IGeographyLocationSummaryDto[];
  typeOfOffice: TypeOfOffice | null,
  requiredMonthsOfExperienceRange: IExperienceMonthsRangeDto | null,
  jobArea: IJobAreaDto | null,
  requiredIdioms: IIdiomLevelMatchDto[],
  remunerationOffer: IRemunerationOfferDto;
  typeOfJobContract: TypeOfJobContract | null,
  createdAt: string;
  updatedAt: string;
  expiresAt: string | null;
  isAvailabilityToTravelRequired: boolean,
  isAvailabilityToChangeResidenceRequired: boolean,
  totalNumberOfVacancies: number,
  isApprovedForPublication: boolean,
  customActionsconfig: IJobOfferCustomActionsConfigDto | null,
  provider: IJobOfferProviderDto | null,
}

export default IJobOfferDto;
