import IJobOfferSummaryDto from "@application/models/IJobOfferSummaryDto";
import useAppState from "@view/common/AppState/useAppState";
import useDisableBodyScroll from "@view/common/HelpersHooks/useDisableBodyScroll";
import useIsMobile from "@view/common/HelpersHooks/useIsMobile";
import JobOffersPreviewsGridLayout from "@view/common/JobOffersPreviewsGridLayout";
import ModalWithArrows from "@view/common/ModalWithArrows";
import useFetchPublicJobOfferDetail from "@view/students/Api/useFetchPublicJobOfferDetail";
import useFetchPublicJobOffers from "@view/students/Api/useFetchPublicJobOffers";
import JobOfferDetailCard from "@view/students/JobOfferDetailCard";
import JobOfferPreviewCard from "@view/students/JobOfferPreviewCard";
import { useEffect, useState } from "react";
import styles from "./JobOffersSection.module.css";
import { useNotificationModal } from "@view/common/NotificationModal/useNotificationModal";
import NotificationModal from "@view/common/NotificationModal/NotificationModal";
import JobOffersSearcher from "../JobOffersSearcher";
import { BiSearchAlt2 } from "react-icons/bi";

export interface IJobOffersSectionProps {
  //jobOffers: IJobOfferSummaryDto[],
}

const JobOffersSection = (props: IJobOffersSectionProps) => {

  const isMobile = useIsMobile(true);
  const [isMouseEnter, setIsMouseEnter] = useState(false);
  useDisableBodyScroll(!isMobile && isMouseEnter);
  const [searchString, setSearchString] = useState("");
  const { jobOffers, loadingJobOffers } = useFetchPublicJobOffers({
    keyWords: searchString
  });
  

  const onMouseEnter = () => { setIsMouseEnter(true); };
  const onMouseLeave = () => { setIsMouseEnter(false); };

  const [openDetailModal, setOpenDetailModal] = useState(false);
  const [selectedJobOfferId, setSelectedJobOfferId] = useState<string | undefined>(undefined);
  const [hideLeftArrow, setHideLeftArrow] = useState(true);
  const [hideRightArrow, setHideRightArrow] = useState(true);
  const { jobOfferDetail } = useFetchPublicJobOfferDetail({ id: selectedJobOfferId });


  const onApplyToJobOfferClick = () => {

  };

  const showDetail = (jobOffer: IJobOfferSummaryDto) => {
    setOpenDetailModal(true);
    setSelectedJobOfferId(jobOffer.id);
  };

  const onNext = () => {
    if (jobOffers) {
      const jobOfferSelectedIndex = jobOffers.findIndex((offer) => offer.id === selectedJobOfferId)
      const selectedOfferId = jobOffers[jobOfferSelectedIndex + 1].id;
      setSelectedJobOfferId(selectedOfferId);
    }
  };

  const onPrevious = () => {
    if (jobOffers) {
      const jobOfferSelectedIndex = jobOffers.findIndex((offer) => offer.id === selectedJobOfferId)
      const selectedOfferId = jobOffers[jobOfferSelectedIndex - 1].id;
      setSelectedJobOfferId(selectedOfferId);
    }
  };

  useEffect(() => {
    if (jobOffers === undefined) {
      return;
    }
    const index = jobOffers.findIndex((offer) => offer.id === selectedJobOfferId);
    if (index > 0 && jobOfferDetail !== undefined) {
      setHideLeftArrow(false);
    } else {
      setHideLeftArrow(true);
    }
    if (jobOffers !== undefined && (index < jobOffers.length - 1) && jobOfferDetail !== undefined) {
      setHideRightArrow(false);
    } else {
      setHideRightArrow(true);
    }
  }, [jobOffers, jobOfferDetail, selectedJobOfferId]);

  return (
    <section
      className={styles.root}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <header className={styles.header}>
        <JobOffersSearcher
          onSubmit={s => setSearchString(s)}
          resultsCount={jobOffers?.length}
          loading={loadingJobOffers}
        />
      </header>
      <div className={styles.gridSection}>
        <div className={styles.gridContainer}>
          {jobOffers != undefined && jobOffers.length > 0
            ? (
              <JobOffersPreviewsGridLayout className={styles.grid}>
                {jobOffers !== undefined && jobOffers.map(x => (
                  <JobOfferPreviewCard
                    key={x.id}
                    jobOffer={x}
                    onShowDetailClick={() => showDetail(x)}
                  />
                ))}
              </JobOffersPreviewsGridLayout>
            ) : (
              <div className={styles.notFoundMessage}>
                <BiSearchAlt2 className={styles.biSearchIcons} />
                <p>En este momento no hay resultados compatibles. Te avisaremos cuando se encuentren empleos que coincidan con tu preferencia.</p>
              </div>
            )}
        </div>
      </div>
      <ModalWithArrows
        open={openDetailModal}
        onClose={jobOfferDetail ? () => setOpenDetailModal(false) : undefined}
        onNext={onNext}
        onPrevious={onPrevious}
        hideLeftArrow={hideLeftArrow}
        hideRightArrow={hideRightArrow}
      >
        {jobOfferDetail && (
          <JobOfferDetailCard
            className={styles.detailCard}
            jobOffer={jobOfferDetail}
            flags={{
              hasActiveApplication: true,
              onApplicationProcess: false,
            }}
            onApplyClick={onApplyToJobOfferClick}
          />
        )}
      </ModalWithArrows>
    </section>
  );
}

export default JobOffersSection;
