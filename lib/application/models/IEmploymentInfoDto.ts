import IIdiomLevelMatchDto from "./IIdiomLevelMatchDto";
import IEconomicSectorDto from "./IEconomicSectorDto";
import IRemunerationRangeDto from "./IRemunerationRangeDto";
import ISkillDto from "./ISkillDto";
import type TypeOfOffice from "@domain/models/TypeOfOffice";

export default interface IEmploymentInfoDto {
  personId: string;
  createdAt: string;
  updatedAt: string;
  complementaryTraining: string[];
  idioms: IIdiomLevelMatchDto[];
  isAvailableToTravel: boolean | null;
  isAvailableToChangeResidence: boolean | null;
  monthsOfCertifiableExperience: number | null;
  skills: ISkillDto[];
  sectorsOfLaboralExperience: IEconomicSectorDto[];
  sectorsOfInterestForEmployment: IEconomicSectorDto[];
  remunerationRequirement: IRemunerationRangeDto | null;
  techSkills: string[];
  linkedInUrl: string | null;
  githubUrl: string | null;
  portfolioUrl: string | null;
  preferredTypeOfOffice: TypeOfOffice | null;
}
