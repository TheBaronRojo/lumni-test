import IJobOfferSummaryDto from "@application/models/IJobOfferSummaryDto";
import TypeOfOffice from "@domain/models/TypeOfOffice";
import remunerationOfferForStudent from "@presentation/jobOffers/remunerationOfferDtoForStudent";
import ILocationPresentationOptions from "@presentation/locations/ILocationPresentationOptions";
import locationSummaryDtoForHumans from "@presentation/locations/locationSummaryDtoForHumans";
import Button from "@view/common/Button";
import Card from "@view/common/Card";
import styles from "./JobOfferPreviewCard.module.css";

export interface IJobOfferPreviewCardProps {
  jobOffer: IJobOfferSummaryDto;
  onShowDetailClick?: (dto: IJobOfferSummaryDto) => void;
}

const JobOfferPreviewCard = ({
  jobOffer,
  onShowDetailClick,
}: IJobOfferPreviewCardProps) => {


  const locationOptions: ILocationPresentationOptions = {
    hideDepartment: true,
  };

  const _text = jobOffer.jobFunctions.length > 200
    ? jobOffer.jobFunctions.substring(0, 200) + "..."
    : jobOffer.jobFunctions;

  const location = jobOffer.typeOfOffice === TypeOfOffice.Remote
    ? "Remoto"
    : (jobOffer.typeOfOffice === TypeOfOffice.Presential
      ? (jobOffer.geographyLocations.length === 0
        ? "Presencial"
        : locationSummaryDtoForHumans(jobOffer.geographyLocations.at(0)!, locationOptions)
      )
      : (jobOffer.geographyLocations.length === 0
        ? "Híbrido"
        : locationSummaryDtoForHumans(jobOffer.geographyLocations.at(0)!, locationOptions)
      )
    );

  const salary = jobOffer.remunerationOffer === null 
    ? "A convenir"
    : remunerationOfferForStudent(jobOffer.remunerationOffer, navigator.language);

  const items = [
    <span key={0}><strong>Ubicación: </strong> {location} </span>,
    <span key={1}><strong>Salario: </strong> {salary} </span>,
  ];

  return (
    <Card className={styles.root}>
      <header className={styles.head}>
        {jobOffer.jobRole}
      </header>
      <div className={styles.content}>
        <h1 className={styles.title}>
          {jobOffer.companyInfo.name}
        </h1>
        <p className={styles.description}>
          {_text}
        </p>
        <div className={styles.bottomSection}>
          <div className={styles.itemsContainer}>
            {items.map((item, i) => (
              <p key={i} className={styles.item}>
                {item}
              </p>
            ))}
          </div>
          <div className={styles.buttonContainer}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => { if (onShowDetailClick) onShowDetailClick(jobOffer); }}
            >
              Ver más
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default JobOfferPreviewCard;
