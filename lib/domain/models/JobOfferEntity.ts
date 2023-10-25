import JobOfferCompanyInfo from "./JobOfferCompanyInfo";
import JobOfferContactInfo from "./JobOfferContactInfo";
import { PropertyError } from "../errors";
import GeographyLocation from "./GeographyLocation";
import SkillEntity from "./SkillEntity";
import AcademicLevel from "./AcademicLevel";
import TypeOfOffice from "./TypeOfOffice";
import JobAreaEntity from "./JobAreaEntity";
import IdiomLevelMatch from "./IdiomLevelMatch";
import TypeOfJobContract from "./TypeOfJobContract";
import JobOfferCustomActionsConfig from "./JobOfferCustomActionsConfig";
import JobOfferProviderEntity from "./JobOfferProviderEntity";
import RemunerationOffer from "./RemunerationOffer";
import ExperienceMonthsRange from "./ExperienceMonthsRange";
import Entity from "./Entity";

export type JobOfferEntityUpdateRequest = Omit<Partial<JobOfferEntity>, "id" | "createdAt" | "updatedAt">;
export type JobOfferBasicFactoryRequest = Omit<Partial<JobOfferEntity>, "id"> & {
  jobRole: string,
  jobFuntions: string,
  companyInfo: JobOfferCompanyInfo,
  remunerationOffer: RemunerationOffer,
  totalNumberOfVacancies: number,
};

class JobOfferEntity extends Entity<JobOfferEntity> {

  static factory(id: string, request: JobOfferBasicFactoryRequest) {
    const entity = new JobOfferEntity(
      id,
      new Date(),
      new Date(),
      null,
      request.jobRole,
      request.jobFuntions,
      request.jobKnowledgeArea ?? null,
      request.requiredAcademicLevels ?? [],
      request.requiredAcademicFormation ?? null,
      request.requiredSkills ?? [],
      request.contactInfo ?? null,
      request.companyInfo,
      request.geographyLocations ?? [],
      request.typeOfOffice ?? null,
      request.requiredMonthsOfExperienceRange ?? null,
      request.jobArea ?? null,
      request.requiredIdioms ?? [],
      request.remunerationOffer,
      request.typeOfJobContract ?? null,
      request.expiresAt ?? null,
      request.isAvailabilityToTravelRequired ?? false,
      request.isAvailabilityToChangeResidenceRequired ?? false,
      request.totalNumberOfVacancies,
      request.isApprovedForPublication ?? false,
      request.customActionsconfig ?? null,
      request.provider ?? null,
    );
    entity.validate();
    entity.setAsNew();
    return entity;
  }

  constructor(
    public readonly id: string,
    public readonly createdAt: Date,
    public readonly updatedAt: Date,
    public readonly discardedAt: Date | null,
    public readonly jobRole: string,
    public readonly jobFunctions: string,
    public readonly jobKnowledgeArea: string | null,
    public readonly requiredAcademicLevels: AcademicLevel[],
    public readonly requiredAcademicFormation: string | null,
    public readonly requiredSkills: readonly SkillEntity[],
    public readonly contactInfo: JobOfferContactInfo | null,
    public readonly companyInfo: JobOfferCompanyInfo,
    public readonly geographyLocations: GeographyLocation[],
    public readonly typeOfOffice: TypeOfOffice | null,
    public readonly requiredMonthsOfExperienceRange: ExperienceMonthsRange | null,
    public readonly jobArea: JobAreaEntity | null,
    public readonly requiredIdioms: readonly IdiomLevelMatch[],
    public readonly remunerationOffer: RemunerationOffer,
    public readonly typeOfJobContract: TypeOfJobContract | null,
    public readonly expiresAt: Date | null,
    public readonly isAvailabilityToTravelRequired: boolean,
    public readonly isAvailabilityToChangeResidenceRequired: boolean,
    public readonly totalNumberOfVacancies: number,
    public readonly isApprovedForPublication: boolean,
    public readonly customActionsconfig: JobOfferCustomActionsConfig | null,
    public readonly provider: JobOfferProviderEntity | null,
  ) {
    super(id, createdAt, updatedAt, discardedAt);
  }

  validate() {
    // TODO: improve validation
    const now = new Date();
    if (this.createdAt > now) {
      throw new PropertyError(this, "createdAt", "is gretter than Now");
    }
    if (this.expiresAt !== null && this.expiresAt <= this.createdAt) {
      throw new PropertyError(this, "expiresAt", "is less than creation time");
    }
  }

  update(updateRequest: JobOfferEntityUpdateRequest) {
    Object.assign(this, updateRequest);
    this.validate();
    this.mutable().updatedAt = new Date();
  }

  approve() {
    this.mutable().isApprovedForPublication = true;
  }

  unapprove() {
    this.mutable().isApprovedForPublication = false;
  }

  updateExpiration(expiresAt: Date) {
    if (expiresAt <= this.createdAt) {
      throw new PropertyError(this, "expiresAt", "is less than creation time");
    }
    this.mutable().expiresAt = expiresAt;
  }

  extendsExpiration(expiresAt: Date) {
    const now = new Date();
    if (expiresAt <= now) {
      throw new PropertyError(this, "expiresAt", "is less than Now");
    }
    this.mutable().expiresAt = expiresAt;
  }

  isExpired(): boolean {
    const now = new Date();
    return this.expiresAt !== null && now > this.expiresAt;
  }

  isPublic(): boolean {
    return this.isApprovedForPublication;
  }

  override discard(): void {
    this.mutable().isApprovedForPublication = false;
    super.discard();
  }

}

export default JobOfferEntity;
