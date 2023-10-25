import IJobOfferPublicDetailDto from "@application/models/IJobOfferPublicDetailDto";
import isoStringDateToHumanDate from "@presentation/dates/isoStringDateToHumanDate";
import academicLevelForHumans from "@presentation/enums/academicLevelForHumans";
import idiomLevelForHumans from "@presentation/enums/idiomLevelForHumans";
import typeofofficeForHumans from "@presentation/enums/typeOfOfficeForHumans";
import remunerationOfferForStudent from "@presentation/jobOffers/remunerationOfferDtoForStudent";
import ILocationPresentationOptions from "@presentation/locations/ILocationPresentationOptions";
import capitalizeFirstLetter from "@presentation/texts/capitalizeFirstLetter";
import Accordion from "@view/common/Accordion";
import ButtonWithLoading from "@view/common/ButtonWithLoading";
import Card from "@view/common/Card";
import { useMemo, useState } from "react";
import ContentListLocations from "./ContentListLocations";
import styles from "./JobOfferDetailCard.module.css";


export interface IJobOfferDetailCardProps {
  jobOffer?: IJobOfferPublicDetailDto;
  className?: string;
  flags: {
    hasActiveApplication?: boolean;
    onApplicationProcess?: boolean;
  };
  onApplyClick?: () => void;
}

const JobOfferDetailCard = ({
  jobOffer,
  className,
  flags,
  onApplyClick,
}: IJobOfferDetailCardProps) => {

  const locationOptions: ILocationPresentationOptions = {
    hideDepartment: true,
  };

  const [showListLocations, setShowListLocations] = useState(false);

  const toggleListLocations = () => {
    setShowListLocations(x => !x)
  };

  const showListLocationsTitle = () => {
    return showListLocations ? "Cerrar lista" : "Abrir lista"
  }

  const info = useMemo(() => {
    if (!jobOffer) return [];

    const salary = jobOffer.remunerationOffer === null
      ? "A convenir"
      : remunerationOfferForStudent(jobOffer.remunerationOffer, navigator.language);

    const typeOfOffice = jobOffer.typeOfOffice === null
      ? ""
      : typeofofficeForHumans(jobOffer.typeOfOffice)

    return [
      { title: "Área", text: jobOffer.jobArea?.name ?? "" },
      { title: "Modalidad", text: typeOfOffice },
      { title: "Salario", text: salary },
      {
        title: "Experiencia requerida",
        text: jobOffer.requiredMonthsOfExperienceRange?.from
          ? jobOffer.requiredMonthsOfExperienceRange.from.toString() + " Meses"
          : "",
      },
      { title: "Fecha de creación", text: isoStringDateToHumanDate(jobOffer.createdAt) },
      {
        title: "Fecha de vencimiento",
        text: jobOffer.expiresAt ? isoStringDateToHumanDate(jobOffer.expiresAt) : "",
      },
    ].filter(x => x.text !== "");
  }, [jobOffer]);

  const listLocations = useMemo(() => {
    if (!jobOffer) return {};

    const locations = jobOffer.geographyLocations.map((x, i) => (
      <ContentListLocations
        key={i}
        items={[x.countryName, x.departmentName, x.cityName]
          .filter(x => x !== null)
          .map(capitalizeFirstLetter as (x: string | null) => string)
          .join(" / ")
        }
      />
    ))

    return {
      title: locations.length === 1 ? "Ubicación:" : "Ubicaciones:",
      items: locations
    }


  }, [jobOffer]);

  const requirements = useMemo(() => {
    if (!jobOffer) return undefined;

    const academicLevels = jobOffer.requiredAcademicLevels.map((x) => academicLevelForHumans(x));

    //Separate texts with commas and the last element with the letter "o".
    const getAcademicLevelsText = academicLevels.map((levelAcademic, index) => {
      let academicLevelText = "";

      if (academicLevels.length === 1) {
        return academicLevels[0]
      };

      if (academicLevels.length > 1) {
        levelAcademic = academicLevels[index]
        academicLevelText += (academicLevels.length - 1 === index)
          ? " o " + levelAcademic
          : (academicLevels.length - 2 === index)
            ? levelAcademic
            : levelAcademic + ", "
      }

      return academicLevelText;

    }).join(" ");

    return [
      {
        title: "Formación requerida",
        items: jobOffer.requiredAcademicFormation === null
          ? []
          : [
            `${capitalizeFirstLetter(jobOffer.requiredAcademicFormation)}`
            + `(${getAcademicLevelsText})`
          ],
      },
      {
        title: "Requisitos adicionales",
        items: (() => {
          const items = [];
          if (jobOffer.isAvailabilityToTravelRequired) {
            items.push("Disponibilidad para viajar")
          }
          if (jobOffer.isAvailabilityToChangeResidenceRequired) {
            items.push("Cambio de lugar de residencia")
          }
          return items;
        })(),
      },
      {
        title: "Habilidades requeridas",
        items: jobOffer.requiredSkills
          .map(x => `${x.name}`),
      },
      {
        title: "Idiomas requeridos",
        items: jobOffer.requiredIdioms
          .map(x => `${x.idiom.name} - ${idiomLevelForHumans(x.level)}`),
      }
    ].filter(x => x.items.length > 0);
  }, [jobOffer]);

  const buttonLabel = useMemo(() => {
    if (flags.hasActiveApplication)
      return `Has aplicado`;
    if (jobOffer?.customActionsconfig?.applyUrl) {
      if (jobOffer?.provider) {
        // return `Aplicar en ${jobOffer.provider.name}`;
        return `Ir al sitio original de la oferta (${jobOffer.provider.name})`
      }
      return `Ir al sitio original de la oferta ()`;
    }
    return `Aplicar`;
  }, [jobOffer, flags]);

  return (
    <Card className={styles.root + (className ? ` ${className}` : "")}>
      <header className={styles.head}>
        {jobOffer?.jobRole ?? ""}
      </header>
      <div className={styles.content}>
        <div className={styles.title}>
          <h1>
            {jobOffer?.companyInfo?.name
              && jobOffer.companyInfo.name
            }
          </h1>
          <div>
            <ButtonWithLoading
              loading={flags.onApplicationProcess === true}
              variant="contained"
              color={flags.hasActiveApplication ? "secondary" : "primary"}
              onClick={onApplyClick}
            >
              {buttonLabel}
            </ButtonWithLoading>
          </div>
        </div>

        <div>
          <h3>Descripción del cargo:</h3>
          <p className={styles.description}>
            {jobOffer?.jobFunctions ?? ""}
          </p>
        </div>

        <div className={styles.infoContainer}>
          {info.map((infoItem, i) => (
            <div key={i} className={styles.infoItem}>
              <h3>{infoItem.title}:</h3>
              <p>{infoItem.text}</p>
            </div>
          ))}
        </div>

        <div className={styles.listLocationsContainer}>
          {
            <div className={styles.locations}>
              <h3>{listLocations.title}</h3>
              {
                listLocations.items !== undefined && listLocations.items.length <= 4

                  ? <ContentListLocations items={listLocations.items} />
                  :
                  <>
                    <button className={styles.textButton} onClick={(): void => toggleListLocations()}>
                      <span className={styles.textOpenOrCloseList}>{showListLocationsTitle()}</span>
                    </button>
                    <div className={showListLocations ? styles.locationContainer : ""} >
                      <Accordion open={showListLocations}>
                        {listLocations.items}
                      </Accordion>
                    </div>
                  </>
              }
            </div>
          }
        </div>

        {requirements && <div className={styles.requirementsContainer}>
          {requirements.map((requirement, i) => (
            <div key={i} className={styles.requirement}>
              <h3>{requirement.title}:</h3>
              <ul>
                {requirement.items.map((ritem, j) => (
                  <li key={j}>{ritem}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>}
      </div>
    </Card>
  );
}

export default JobOfferDetailCard;
