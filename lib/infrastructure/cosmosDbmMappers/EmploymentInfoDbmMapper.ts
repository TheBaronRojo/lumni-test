import EmploymentInfo from "@domain/models/EmploymentInfo";
import { singleton } from "tsyringe";
import IEmploymentInfoDbm from "../cosmosDbModels/IEmploymentInfoDbm";
import IdiomLevelMatchDbmMapper from "./IdiomLevelMatchDbmMapper";
import EconomicSectorDbmMapper from "./EconomicSectorDbmMapper";
import SkillDbmMapper from "./SkillDbmMapper";
import TypeOfOfficeDbmMapper from "./TypeOfOfficeDbmMapper";
import RemunerationRangeDbmMapper from "./RemunerationRangeDbmMapper";
import PersonKeywordsServices from "@domain/keywords/PersonKeywordsServices";

@singleton()
export default class EmploymentInfoDbmMapper {

  constructor(
    private idiomLevelMatchDbmMapper: IdiomLevelMatchDbmMapper,
    private remunerationRangeDbmMapper: RemunerationRangeDbmMapper,
    private personKeywordsServices: PersonKeywordsServices,
    private economicSectorDbmMapper: EconomicSectorDbmMapper,
    private skillDbmMapper: SkillDbmMapper,
    private typeOfOfficeDbmMapper: TypeOfOfficeDbmMapper,
  ) { }

  dbmToValue(dbm: IEmploymentInfoDbm): EmploymentInfo {
    return new EmploymentInfo(
      dbm.id,
      new Date(dbm.createdAt),
      new Date(dbm.updatedAt),
      dbm.complementaryTraining,
      dbm.idioms.map(x => this.idiomLevelMatchDbmMapper.dbmToValue(x)),
      dbm.isAvailableToTravel,
      dbm.isAvailableToChangeResidence,
      dbm.monthsOfCertifiableExperience,
      dbm.skills.map(x => this.skillDbmMapper.dbmToEntity(x)),
      dbm.sectorsOfLaboralExperience.map(x => this.economicSectorDbmMapper.dbmToEntity(x)),
      dbm.sectorsOfInterestForEmployment.map(x => this.economicSectorDbmMapper.dbmToEntity(x)),
      dbm.remunerationRequirement === null
        ? null
        : this.remunerationRangeDbmMapper.dbmToValue(dbm.remunerationRequirement),
      [...dbm.techSkills],
      dbm.linkedInUrl,
      dbm.githubUrl,
      dbm.portfolioUrl,
      dbm.preferredTypeOfOffice === null 
        ? null
        : this.typeOfOfficeDbmMapper.dbmToValue(dbm.preferredTypeOfOffice),
    );
  }

  valueToDbm(value: EmploymentInfo): IEmploymentInfoDbm {
    return {
      id: value.personId,
      createdAt: value.createdAt.getTime(),
      updatedAt: value.updatedAt.getTime(),
      complementaryTraining: value.complementaryTraining,
      idioms: value.idioms.map(x => this.idiomLevelMatchDbmMapper.valueToDbm(x)),
      isAvailableToTravel: value.isAvailableToTravel,
      isAvailableToChangeResidence: value.isAvailableToChangeResidence,
      monthsOfCertifiableExperience: value.monthsOfCertifiableExperience,
      skills: value.skills.map(x => this.skillDbmMapper.entityToDbm(x)),
      sectorsOfLaboralExperience: value.sectorsOfLaboralExperience.map(x => this.economicSectorDbmMapper.entityToDbm(x)),
      sectorsOfInterestForEmployment: value.sectorsOfInterestForEmployment.map(x => this.economicSectorDbmMapper.entityToDbm(x)),
      remunerationRequirement: value.remunerationRequirement === null
        ? null
        : this.remunerationRangeDbmMapper.valueToDbm(value.remunerationRequirement),
      techSkills: [...value.techSkills],
      linkedInUrl: value.linkedInUrl,
      githubUrl: value.githubUrl,
      portfolioUrl: value.portfolioUrl,
      preferredTypeOfOffice: value.preferredTypeOfOffice === null
        ? null
        : this.typeOfOfficeDbmMapper.valueToDbm(value.preferredTypeOfOffice),
      keyWords: this.personKeywordsServices.generateEmploymentInfoKeywords(value),
    };
  }

}
