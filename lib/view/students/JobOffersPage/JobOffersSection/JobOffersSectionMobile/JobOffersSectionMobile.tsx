import IJobOfferSummaryDto from "@application/models/IJobOfferSummaryDto";
import styles from "./JobOffersSectionMobile.module.css";

export interface IJobOffersSectionMobileProps {
  jobOffers: IJobOfferSummaryDto[],
}

const JobOffersSectionMobile = (props: IJobOffersSectionMobileProps ) => {
  return (
    <section>
      Mobile
    </section>
  );
}

export default JobOffersSectionMobile;
