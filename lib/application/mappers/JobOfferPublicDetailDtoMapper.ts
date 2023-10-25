import JobOfferEntity from "@domain/models/JobOfferEntity";
import GeographyLocationSummaryDtoMapper from "./GeographyLocationSummaryDtoMapper";
import { singleton } from "tsyringe";
import SkillDtoMapper from "./SkillDtoMapper";
import JobAreaDtoMapper from "./JobAreaDtoMapper";
import IdiomLevelMatchDtoMapper from "./IdiomLevelMatchDtoMapper";
import JobOfferCustomActionsConfigDtoMapper from "./JobOfferCustomActionsConfigDtoMapper";
import JobOfferCompanyInfoDtoMapper from "./JobOfferCompanyInfoDtoMapper";
import IJobOfferPublicDetailDto from "@application/models/IJobOfferPublicDetailDto";
import JobOfferProviderPublicDtoMapper from "./JobOfferProviderPublicDtoMapper";
import ExperienceMonthsRangeDtoMapper from "./ExperienceMonthsRangeDtoMapper";
import RemunerationOfferDtoMapper from "./RemunerationOfferDtoMapper";

@singleton()
class JobOfferPublicDetailDtoMapper {

  constructor(
    private remunerationOfferDtoMaper: RemunerationOfferDtoMapper,
    private geographyLocationDtoMapper: GeographyLocationSummaryDtoMapper,
    private jobOfferCompanyInfoDtoMapper: JobOfferCompanyInfoDtoMapper,
    private skillDtoMapper: SkillDtoMapper,
    private experienceMonthsRangeDtoMapper: ExperienceMonthsRangeDtoMapper,
    private jobAreaDtoMapper: JobAreaDtoMapper,
    private idiomLevelMatchDtoMapper: IdiomLevelMatchDtoMapper,
    private jobOfferCustomActionsConfigDtoMapper: JobOfferCustomActionsConfigDtoMapper,
    private jobOfferProviderPublicDtoMapper: JobOfferProviderPublicDtoMapper,
  ) {

  }

  entityToDto(entity: JobOfferEntity): IJobOfferPublicDetailDto {
    return {
      id: entity.id,
      jobRole: entity.jobRole,
      jobFunctions: entity.jobFunctions,
      jobKnowledgeArea: entity.jobKnowledgeArea,
      requiredAcademicLevels: entity.requiredAcademicLevels,
      requiredAcademicFormation: entity.requiredAcademicFormation,
      requiredSkills: entity.requiredSkills.map(x => this.skillDtoMapper.entityToDto(x)),
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
      expiresAt: entity.expiresAt?.toISOString() ?? null,
      isAvailabilityToTravelRequired: entity.isAvailabilityToTravelRequired,
      isAvailabilityToChangeResidenceRequired: entity.isAvailabilityToChangeResidenceRequired,
      customActionsconfig: entity.customActionsconfig === null
        ? null
        : this.jobOfferCustomActionsConfigDtoMapper.valueToDto(entity.customActionsconfig),
      provider: entity.provider === null 
        ? null
        : this.jobOfferProviderPublicDtoMapper.entityToDto(entity.provider),
    }
  }
}

export default JobOfferPublicDetailDtoMapper;
