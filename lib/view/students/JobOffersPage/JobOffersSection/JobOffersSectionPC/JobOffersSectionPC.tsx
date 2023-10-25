import IJobOfferSummaryDto from "@application/models/IJobOfferSummaryDto";
import JobOfferPreviewCard from "@view/students/JobOfferPreviewCard";
import styles from "./JobOffersSectionPC.module.css";

export interface IJobOffersSectionPCProps {
  jobOffers: IJobOfferSummaryDto[],
}

const JobOffersSectionPC = (props: IJobOffersSectionPCProps) => {
  return (
    <section className={styles.root}>
      <div className={styles.previewsContainer}>
        {
          props.jobOffers.map(x => (
            <JobOfferPreviewCard
              key={x.id}
              jobOffer={x}
            />
          ))
        }
      </div>
      <div className={styles.detailContainer}></div>
    </section>
  );
}

export default JobOffersSectionPC;
