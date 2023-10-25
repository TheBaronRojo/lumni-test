import IdentificationInfo from "./IdentificationInfo";
import JobOfferEntity from "./JobOfferEntity";

export type JJobOfferExternalSiteVisitBasicFactoryRequest = Omit<Partial<JobOfferExternalSiteVisitEntity>, "id"> & {
  jobOffer: JobOfferEntity;
  personIdentificationInfo: IdentificationInfo;
};

export default class JobOfferExternalSiteVisitEntity {

  static factory(
    id: string,
    request: JJobOfferExternalSiteVisitBasicFactoryRequest,
  ): JobOfferExternalSiteVisitEntity {
    return new JobOfferExternalSiteVisitEntity(
      id,
      request.personIdentificationInfo,
      request.jobOffer,
      new Date(),
    );
  }

  constructor(
    public readonly id: string,
    public readonly personIdentificationInfo: IdentificationInfo,
    public readonly jobOffer: JobOfferEntity,
    public readonly createdAt: Date,
  ) {

  }

  private mutable(): { -readonly [P in keyof JobOfferExternalSiteVisitEntity]: JobOfferExternalSiteVisitEntity[P] } {
    return this;
  }

}
