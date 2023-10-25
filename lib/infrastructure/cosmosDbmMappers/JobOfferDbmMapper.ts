import JobOfferEntity from "@domain/models/JobOfferEntity";
import IJobOfferDbm from "../cosmosDbModels/IJobOfferDbm";
import RemunerationOfferDbmMapper from "./RemunerationOfferDbmMapper";
import GeographyLocationDbmMapper from "./GeographyLocationDbmMapper";
import JobOfferCompanyInfoDbmMapper from "./JobOfferCompanyInfoDbmMapper";
import { singleton } from "tsyringe";
import JobOfferContactInfoDbmMapper from "./JobOfferContactInfoDbmMapper";
import SkillDbmMapper from "./SkillDbmMapper";
import ExperienceMonthsRangeDbmMapper from "./ExperienceMonthsRangeDbmMapper";
import TypeOfOfficeDbmMapper from "./TypeOfOfficeDbmMapper";
import JobAreaDbmMapper from "./JobAreaDbmMapper";
import IdiomLevelMatchDbmMapper from "./IdiomLevelMatchDbmMapper";
import TypeOfJobContractDbmMapper from "./TypeOfJobContractDbmMapper";
import AcademicLevelDbmMapper from "./AcademicLevelDbmMapper";
import JobOfferCustomActionsConfigDbmMapper from "./JobOfferCustomActionsConfigDbmMapper";
import JobOfferProviderDbmMapper from "./JobOfferProviderDbmMapper";
import JobOfferKeywordsServices from "@domain/keywords/JobOfferKeywordsServices";

@singleton()
class JobOfferDbmMapper {

  constructor(
    private remunerationOfferDbmMaper: RemunerationOfferDbmMapper,
    private geographyLocationDbmMapper: GeographyLocationDbmMapper,
    private contactInfoDbmMapper: JobOfferContactInfoDbmMapper,
    private companyInfoDbmMapper: JobOfferCompanyInfoDbmMapper,
    private skillDbmMapper: SkillDbmMapper,
    private positiveNumberRangeDbmMapper: ExperienceMonthsRangeDbmMapper,
    private typeOfOfficeDbmMapper: TypeOfOfficeDbmMapper,
    private jobAreaDbmMapper: JobAreaDbmMapper,
    private idiomLevelMatchDbmMapper: IdiomLevelMatchDbmMapper,
    private typeOfJobContractDbmMapper: TypeOfJobContractDbmMapper,
    private academicLevelDbmMapper: AcademicLevelDbmMapper,
    private jobOfferCustomActionsConfigMapper: JobOfferCustomActionsConfigDbmMapper,
    private jobOfferProviderDbmMapper: JobOfferProviderDbmMapper,
    private jobOfferKeywordsServices: JobOfferKeywordsServices,
  ) { }

  dbmToEntity(dbm: IJobOfferDbm): JobOfferEntity {

    const geographiesLocationsDbms = dbm.geographyLocations ?? (
      dbm.geographyLocation
        ? [dbm.geographyLocation]
        : []
    );

    return new JobOfferEntity(
      dbm.id,
      new Date(dbm.createdAt),
      new Date(dbm.updatedAt),
      dbm.discardedAt == null
        ? null
        : new Date(dbm.discardedAt),
      dbm.jobRole,
      dbm.jobFunctions,
      dbm.jobKnowledgeArea,
      dbm.requiredAcademicLevels === undefined
        ? dbm.requiredAcademicLevel !== null && dbm.requiredAcademicLevel !== undefined
          ? [this.academicLevelDbmMapper.dbmToValue(dbm.requiredAcademicLevel)]
          : []
        : dbm.requiredAcademicLevels.map(x => this.academicLevelDbmMapper.dbmToValue(x)),
      dbm.requiredAcademicFormation,
      dbm.requiredSkills.map(x => this.skillDbmMapper.dbmToEntity(x)),
      dbm.contactInfo === null
        ? null
        : this.contactInfoDbmMapper.dbmToValue(dbm.contactInfo),
      this.companyInfoDbmMapper.dbmToValue(dbm.companyInfo),
      geographiesLocationsDbms.map(x => this.geographyLocationDbmMapper.dbmToValue(x)),
      dbm.typeOfOffice == null ? null : this.typeOfOfficeDbmMapper.dbmToValue(dbm.typeOfOffice),
      dbm.requiredMonthsOfExperienceRange == null
        ? null
        : this.positiveNumberRangeDbmMapper.dbmToValue(dbm.requiredMonthsOfExperienceRange),
      dbm.jobArea == null
        ? null
        : this.jobAreaDbmMapper.dbmToEntity(dbm.jobArea),
      dbm.requiredIdioms === undefined
        ? []
        : dbm.requiredIdioms.map(x => this.idiomLevelMatchDbmMapper.dbmToValue(x)),
      this.remunerationOfferDbmMaper.dbmToValue(dbm.remunerationOffer),
      dbm.typeOfJobContract == null
        ? null
        : this.typeOfJobContractDbmMapper.dbmToValue(dbm.typeOfJobContract),
      dbm.expiresAt === null ? null : new Date(dbm.expiresAt),
      dbm.isAvailabilityToTravelRequired,
      dbm.isAvailabilityToChangeResidenceRequired,
      dbm.totalNumberOfVacancies,
      dbm.isApprovedForPublication,
      dbm.customActionsconfig == null
        ? null
        : this.jobOfferCustomActionsConfigMapper.dbmToValue(dbm.customActionsconfig),
      dbm.provider == null
        ? null
        : this.jobOfferProviderDbmMapper.dbmToEntity(dbm.provider),
    );
  }

  entityToDbm(entity: JobOfferEntity): IJobOfferDbm {
    return {
      id: entity.id,
      jobRole: entity.jobRole,
      jobFunctions: entity.jobFunctions,
      jobKnowledgeArea: entity.jobKnowledgeArea,
      requiredAcademicLevels: entity.requiredAcademicLevels.map(x => this.academicLevelDbmMapper.valueToDbm(x)),
      requiredAcademicFormation: entity.requiredAcademicFormation,
      requiredSkills: entity.requiredSkills.map(x => this.skillDbmMapper.entityToDbm(x)),
      contactInfo: entity.contactInfo === null
        ? null
        : this.contactInfoDbmMapper.valueToDbm(entity.contactInfo),
      companyInfo: this.companyInfoDbmMapper.valueToDbm(entity.companyInfo),
      geographyLocations: entity.geographyLocations.map(x => this.geographyLocationDbmMapper.valueToDbm(x)),
      typeOfOffice: entity.typeOfOffice === null
        ? null
        : this.typeOfOfficeDbmMapper.valueToDbm(entity.typeOfOffice),
      requiredMonthsOfExperienceRange: entity.requiredMonthsOfExperienceRange === null
        ? null
        : this.positiveNumberRangeDbmMapper.valueToDbm(entity.requiredMonthsOfExperienceRange),
      jobArea: entity.jobArea === null
        ? null
        : this.jobAreaDbmMapper.entityToDbm(entity.jobArea),
      requiredIdioms: entity.requiredIdioms.map(x => this.idiomLevelMatchDbmMapper.valueToDbm(x)),
      remunerationOffer: this.remunerationOfferDbmMaper.valueToDbm(entity.remunerationOffer),
      typeOfJobContract: entity.typeOfJobContract === null
        ? null
        : this.typeOfJobContractDbmMapper.valueToDbm(entity.typeOfJobContract),
      updatedAt: entity.updatedAt.getTime(),
      createdAt: entity.createdAt.getTime(),
      expiresAt: entity.expiresAt === null ? null : entity.expiresAt.getTime(),
      isAvailabilityToTravelRequired: entity.isAvailabilityToTravelRequired,
      isAvailabilityToChangeResidenceRequired: entity.isAvailabilityToChangeResidenceRequired,
      totalNumberOfVacancies: entity.totalNumberOfVacancies,
      isApprovedForPublication: entity.isApprovedForPublication,
      customActionsconfig: entity.customActionsconfig === null
        ? null
        : this.jobOfferCustomActionsConfigMapper.valueToDbm(entity.customActionsconfig),
      provider: entity.provider === null
        ? null
        : this.jobOfferProviderDbmMapper.entityToDbm(entity.provider),
      keyWords: this.jobOfferKeywordsServices.generateJobOffersKeywords(entity),
    };
  }

}

export default JobOfferDbmMapper;
