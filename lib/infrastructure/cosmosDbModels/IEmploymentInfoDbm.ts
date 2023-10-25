import IIdiomLevelMatchDbm from "./IIdiomLevelMatchDbm";
import IEconomicSectorDbm from "./IEconomicSectorDbm";
import ISkillDbm from "./ISkillDbm";
import TypeOfOfficeDbm from "./TypeOfOfficeDbm";
import IRemunerationRangeDbm from "./IRemunerationRangeDbm";

export default interface IEmploymentInfoDbm {
  id: string;
  createdAt: number;
  updatedAt: number;
  complementaryTraining: string[];
  idioms: IIdiomLevelMatchDbm[];
  isAvailableToTravel: boolean | null;
  isAvailableToChangeResidence: boolean | null;
  monthsOfCertifiableExperience: number | null;
  skills: ISkillDbm[];
  sectorsOfLaboralExperience: IEconomicSectorDbm[];
  sectorsOfInterestForEmployment: IEconomicSectorDbm[];
  remunerationRequirement: IRemunerationRangeDbm | null;
  techSkills: string[];
  linkedInUrl: string | null;
  githubUrl: string | null;
  portfolioUrl: string | null;
  preferredTypeOfOffice: TypeOfOfficeDbm | null;
  keyWords: string;
}
