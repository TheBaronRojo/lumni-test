import JobOfferEntity from "@domain/models/JobOfferEntity";
import GeographyLocationSummaryDtoMapper from "./GeographyLocationSummaryDtoMapper";
import { singleton } from "tsyringe";
import IJobOfferDto from "@application/models/IJobOfferDto";
import SkillDtoMapper from "./SkillDtoMapper";
import JobOfferContactInfoDtoMapper from "./JobOfferContactInfoDtoMapper";
import ExperienceMonthsRangeDtoMapper from "./ExperienceMonthsRangeDtoMapper";
import JobAreaDtoMapper from "./JobAreaDtoMapper";
import IdiomLevelMatchDtoMapper from "./IdiomLevelMatchDtoMapper";
import JobOfferCustomActionsConfigDtoMapper from "./JobOfferCustomActionsConfigDtoMapper";
import JobOfferCompanyInfoDtoMapper from "./JobOfferCompanyInfoDtoMapper";
import JobOfferProviderDtoMapper from "./JobOfferProviderDtoMapper";
import RemunerationOfferDtoMapper from "./RemunerationOfferDtoMapper";

@singleton()
class JobOfferDtoMapper {

  constructor(
    private remunerationOfferDtoMaper: RemunerationOfferDtoMapper,
    private geographyLocationDtoMapper: GeographyLocationSummaryDtoMapper,
    private jobOfferCompanyInfoDtoMapper: JobOfferCompanyInfoDtoMapper,
    private skillDtoMapper: SkillDtoMapper,
    private jobOfferContactInfoDtoMapper: JobOfferContactInfoDtoMapper,
    private experienceMonthsRangeDtoMapper: ExperienceMonthsRangeDtoMapper,
    private jobAreaDtoMapper: JobAreaDtoMapper,
    private idiomLevelMatchDtoMapper: IdiomLevelMatchDtoMapper,
    private jobOfferCustomActionsConfigDtoMapper: JobOfferCustomActionsConfigDtoMapper,
    private jobOfferProviderDtoMapper: JobOfferProviderDtoMapper,
  ) {

  }

  entityToDto(entity: JobOfferEntity): IJobOfferDto {
    return {
      id: entity.id,
      jobRole: entity.jobRole,
      jobFunctions: entity.jobFunctions,
      jobKnowledgeArea: entity.jobKnowledgeArea,
      requiredAcademicLevels: entity.requiredAcademicLevels,
      requiredAcademicFormation: entity.requiredAcademicFormation,
      requiredSkills: entity.requiredSkills.map(x => this.skillDtoMapper.entityToDto(x)),
      contactInfo: entity.contactInfo === null
        ? null
        : this.jobOfferContactInfoDtoMapper.valueToDto(entity.contactInfo),
      companyInfo: this.jobOfferCompanyInfoDtoMapper.valueToDto(entity.companyInfo),
      geographyLocations: entity.geographyLocations.map(x => this.geographyLocationDtoMapper.valueToDto(x)),
      typeOfOffice: entity.typeOfOffice,
      requiredMonthsOfExperienceRange: entity.requiredMonthsOfExperienceRange === null
        ? null
        : this.experienceMonthsRangeDtoMapper.valueToDto(entity.requiredMonthsOfExperienceRange),
      jobArea: entity.jobArea === null
        ? null
        : this.jobAreaDtoMapper.entityToDto(entity.jobArea),
      requiredIdioms: entity.requiredIdioms.map(x => this.idiomLevelMatchDtoMapper.valueToDto(x)),
      remunerationOffer: this.remunerationOfferDtoMaper.valueToDto(entity.remunerationOffer),
      typeOfJobContract: entity.typeOfJobContract,
      createdAt: entity.createdAt.toISOString(),
      updatedAt: entity.updatedAt.toISOString(),
      expiresAt: entity.expiresAt === null
        ? null
        : entity.expiresAt.toISOString(),
      isAvailabilityToTravelRequired: entity.isAvailabilityToTravelRequired,
      isAvailabilityToChangeResidenceRequired: entity.isAvailabilityToChangeResidenceRequired,
      totalNumberOfVacancies: entity.totalNumberOfVacancies,
      isApprovedForPublication: entity.isApprovedForPublication,
      customActionsconfig: entity.customActionsconfig === null
        ? null
        : this.jobOfferCustomActionsConfigDtoMapper.valueToDto(entity.customActionsconfig),
      provider: entity.provider === null
        ? null
        : this.jobOfferProviderDtoMapper.entityToDto(entity.provider),
    }
  }
}

export default JobOfferDtoMapper;
