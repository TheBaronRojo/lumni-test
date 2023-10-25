import ContactInfo from "./ContactInfo";
import EmploymentInfo from "./EmploymentInfo";
import IdentificationInfo from "./IdentificationInfo";
import JobOfferApplicationStatus from "./JobOfferApplicationStatus";
import JobOfferEntity from "./JobOfferEntity";

export type JobOfferApplicationBasicFactoryRequest = Omit<Partial<JobOfferApplicationEntity>, "id"> & {
  jobOffer: JobOfferEntity;
  personIdentificationInfo: IdentificationInfo;
  personContactInfo: ContactInfo;
  personEmploymentInfo: EmploymentInfo;
};

export default class JobOfferApplicationEntity {

  static factory(
    id: string,
    request: JobOfferApplicationBasicFactoryRequest
  ): JobOfferApplicationEntity {
    return new JobOfferApplicationEntity(
      id,
      request.jobOffer,
      request.personIdentificationInfo,
      request.personContactInfo,
      request.personEmploymentInfo,
      new Date(),
      JobOfferApplicationStatus.Created,
      null,
    );
  }

  constructor(
    public readonly id: string,
    public readonly jobOffer: JobOfferEntity,
    public readonly personIdentificationInfo: IdentificationInfo,
    public readonly personContactInfo: ContactInfo,
    public readonly personEmploymentInfo: EmploymentInfo,
    public readonly createdAt: Date,
    public readonly status: JobOfferApplicationStatus,
    public readonly discardedAt: Date | null,
  ) { }

  private mutable(): { -readonly [P in keyof JobOfferApplicationEntity]: JobOfferApplicationEntity[P] } {
    return this;
  }

  discard() {
    this.mutable().discardedAt = new Date();
    this.mutable().status = JobOfferApplicationStatus.Inactive;
  }

  isActive(): boolean {
    return this.discardedAt === null
      && this.status !== JobOfferApplicationStatus.Inactive;
  }
}
