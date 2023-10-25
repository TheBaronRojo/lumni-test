import IJobOfferCompanyInfoDbm from "./IJobOfferCompanyInfoDbm";
import IJobOfferContactInfoDbm from "./IJobOfferContactInfoDbm";
import IGeographyLocationDbm from "./IGeographyLocationDbm";
import IRemunerationOfferDbm from "./IRemunerationOfferDbm";
import ISkillDbm from "./ISkillDbm";
import AcademicLevelDbm from "./AcademicLevelDbm";
import TypeOfOfficeDbm from "./TypeOfOfficeDbm";
import IPositiveNumberRangeDbm from "./IPositiveNumberRangeDbm";
import IJobAreaDbm from "./IJobAreaDbm";
import IIDiomLevelMatchDbm from "./IIdiomLevelMatchDbm";
import TypeOfJobContractDbm from "./TypeOfJobContractDbm";
import IJobOfferCustomActionsConfigDbm from "./IJobOfferCustomActionsConfigDbm";
import IJobOfferProviderDbm from "./IJobOfferProviderDbm";

interface IJobOfferDbm {
  id: string;
  createdAt: number;
  updatedAt: number;
  discardedAt?: number | null;
  jobRole: string;
  jobFunctions: string;
  jobKnowledgeArea: string | null;
  requiredAcademicLevel?: AcademicLevelDbm | null;
  requiredAcademicLevels?: AcademicLevelDbm[];
  requiredAcademicFormation: string | null;
  requiredSkills: ISkillDbm[];
  contactInfo: IJobOfferContactInfoDbm | null;
  companyInfo: IJobOfferCompanyInfoDbm;
  geographyLocation?: IGeographyLocationDbm | null;
  geographyLocations?: IGeographyLocationDbm[];
  typeOfOffice?: TypeOfOfficeDbm | null,
  requiredMonthsOfExperienceRange?: IPositiveNumberRangeDbm | null,
  jobArea?: IJobAreaDbm | null,
  requiredIdioms?: IIDiomLevelMatchDbm[],
  remunerationOffer: IRemunerationOfferDbm;
  typeOfJobContract?: TypeOfJobContractDbm | null;
  expiresAt: number | null;
  isAvailabilityToTravelRequired: boolean;
  isAvailabilityToChangeResidenceRequired: boolean;
  totalNumberOfVacancies: number;
  isApprovedForPublication: boolean;
  customActionsconfig?: IJobOfferCustomActionsConfigDbm | null;
  provider?: IJobOfferProviderDbm | null;
  keyWords?: string;
}

export default IJobOfferDbm;
