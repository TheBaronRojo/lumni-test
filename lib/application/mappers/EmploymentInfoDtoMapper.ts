import EmploymentInfo from "@domain/models/EmploymentInfo";
import { singleton } from "tsyringe";
import IEmploymentInfoDto from "../models/IEmploymentInfoDto";
import IdiomLevelMatchDtoMapper from "./IdiomLevelMatchDtoMapper";
import EconomicSectorDtoMapper from "./EconomicSectorDtoMapper";
import RemunerationRangeDtoMapper from "./RemunerationRangeDtoMapper";
import SkillDtoMapper from "./SkillDtoMapper";

@singleton()
export default class EmploymentInfoDtoMapper {

  constructor(
    private remunerationRangeDtoMapper: RemunerationRangeDtoMapper,
    private idiomLevelMatchDtoMapper: IdiomLevelMatchDtoMapper,
    private skillDtoMapper: SkillDtoMapper,
    private economicSectorDtoMapper: EconomicSectorDtoMapper,
  ) { }


  valueToDto(value: EmploymentInfo): IEmploymentInfoDto {

    return {
      personId: value.personId,
      createdAt: value.createdAt.toISOString(),
      updatedAt: value.updatedAt.toISOString(),
      complementaryTraining: [...value.complementaryTraining],
      idioms: value.idioms.map(x => this.idiomLevelMatchDtoMapper.valueToDto(x)),
      isAvailableToTravel: value.isAvailableToTravel,
      isAvailableToChangeResidence: value.isAvailableToChangeResidence,
      monthsOfCertifiableExperience: value.monthsOfCertifiableExperience,
      skills: value.skills.map(x => this.skillDtoMapper.entityToDto(x)),
      sectorsOfLaboralExperience: value.sectorsOfLaboralExperience.map(x => this.economicSectorDtoMapper.entityToDto(x)),
      sectorsOfInterestForEmployment: value.sectorsOfInterestForEmployment.map(x => this.economicSectorDtoMapper.entityToDto(x)),
      remunerationRequirement: value.remunerationRequirement === null
        ? null
        : this.remunerationRangeDtoMapper.valueToDto(value.remunerationRequirement),
      techSkills: [...value.techSkills],
      linkedInUrl: value.linkedInUrl,
      githubUrl: value.githubUrl,
      portfolioUrl: value.portfolioUrl,
      preferredTypeOfOffice: value.preferredTypeOfOffice,
    };
  }
}
