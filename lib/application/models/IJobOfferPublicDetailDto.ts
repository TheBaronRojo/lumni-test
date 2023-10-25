import AcademicLevel from "@domain/models/AcademicLevel";
import TypeOfJobContract from "@domain/models/TypeOfJobContract";
import TypeOfOffice from "@domain/models/TypeOfOffice";
import IExperienceMonthsRangeDto from "./IExperienceMonthsRangeDto";
import IGeographyLocationSummaryDto from "./IGeographyLocationSummaryDto";
import IIdiomLevelMatchDto from "./IIdiomLevelMatchDto";
import IJobAreaDto from "./IJobAreaDto";
import IJobOfferCompanyInfoDto from "./IJobOfferCompanyInfoDto";
import IJobOfferCustomActionsConfigDto from "./IJobOfferCustomActionsConfigDto";
import IJobOfferProviderPublicDto from "./IJobOfferProviderPublicDto";
import IRemunerationOfferDto from "./IRemunerationOfferDto";
import ISkillDto from "./ISkillDto";

export default interface IJobOfferPublicDetailDto {
  id: string;
  jobRole: string;
  jobFunctions: string;
  jobKnowledgeArea: string | null;
  requiredAcademicLevels: AcademicLevel[];
  requiredAcademicFormation: string | null;
  requiredSkills: ISkillDto[];
  companyInfo: IJobOfferCompanyInfoDto;
  geographyLocations: IGeographyLocationSummaryDto[];
  typeOfOffice: TypeOfOffice | null,
  requiredMonthsOfExperienceRange: IExperienceMonthsRangeDto | null,
  jobArea: IJobAreaDto | null,
  requiredIdioms: IIdiomLevelMatchDto[],
  remunerationOffer: IRemunerationOfferDto;
  typeOfJobContract: TypeOfJobContract | null,
  createdAt: string;
  expiresAt: string | null;
  isAvailabilityToTravelRequired: boolean,
  isAvailabilityToChangeResidenceRequired: boolean,
  customActionsconfig: IJobOfferCustomActionsConfigDto | null,
  provider: IJobOfferProviderPublicDto | null,
}
