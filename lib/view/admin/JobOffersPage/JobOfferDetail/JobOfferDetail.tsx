import ItemsInfoSection from "@view/common/ItemsInfoSection/ItemsInfoSection";
import InfoSection from "@view/common/InfoSection/InfoSection";
import styles from "./JobOfferDetail.module.css";
import { CSSProperties } from "react";
import idiomLevelForHumans from "@presentation/enums/idiomLevelForHumans";
import typeofofficeForHumans from "@presentation/enums/typeOfOfficeForHumans";
import IJobOfferDto from "@application/models/IJobOfferDto";
import jobOfferDtoStatusForHumans from "@presentation/jobOffers/jobOfferDtoStatusForHumans";
import academicLevelForHumans from "@presentation/enums/academicLevelForHumans";
import typeOfJobContractForHumans from "@presentation/enums/typeOfJobContractForHumans";


export interface IJobOfferDetailProps {
  jobOffer: IJobOfferDto;
  style?: CSSProperties;
}

const JobOfferDetail = ({
  jobOffer,
  style,
}: IJobOfferDetailProps) => {

  const { text: status, color: statusColor } = jobOfferDtoStatusForHumans(jobOffer);

  const currencyFormater = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: jobOffer.remunerationOffer.currency.isoCode,
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  });

  const salaryMin = jobOffer.remunerationOffer.rangeStart === null
    ? ""
    : currencyFormater
      .format(jobOffer.remunerationOffer.rangeStart)
      .replace(/[ARUSCLPMXNE\$]/gi, '')
      .trim();

  const salaryMax = jobOffer.remunerationOffer.rangeTop === null
    ? ""
    : currencyFormater
      .format(jobOffer.remunerationOffer.rangeTop)
      .replace(/[ARUSCLPMXNE\$]/gi, '')
      .trim();

  const salaryRange = (() => {
    if (jobOffer.remunerationOffer.rangeStart && jobOffer.remunerationOffer.rangeTop) {
      return `(${jobOffer.remunerationOffer.currency.isoCode}) ${salaryMin} - ${salaryMax}`;
    }
    if (jobOffer.remunerationOffer.rangeStart) {
      return `Desde (${jobOffer.remunerationOffer.currency.isoCode}) ${salaryMin}`;
    }
    if (jobOffer.remunerationOffer.rangeTop) {
      return `Hasta (${jobOffer.remunerationOffer.currency.isoCode}) ${salaryMax}`;
    }
    return "A convenir";
  })()

  return (
    <div style={style} className={styles.root}>
      <InfoSection label="Estado:">
        <strong style={{ color: statusColor }}>{status}</strong>
      </InfoSection>
      <InfoSection label="Número total de vacantes:">
        {jobOffer.totalNumberOfVacancies}
      </InfoSection>
      <InfoSection label="Cargo:">
        {jobOffer.jobRole}
      </InfoSection>
      <InfoSection label="Funciones del cargo:">
        {jobOffer.jobFunctions}
      </InfoSection>
      <InfoSection label="Área de conocimiento:">
        {jobOffer.jobKnowledgeArea}
      </InfoSection>
      <ItemsInfoSection label="Nivel académico:">
        {jobOffer.requiredAcademicLevels.map((x, i) => (
          <span key={i}>{academicLevelForHumans(x)}</span>
        ))
        }
      </ItemsInfoSection>
      <InfoSection label="Formación requerida:">
        {jobOffer.requiredAcademicFormation === null
          ? ""
          : jobOffer.requiredAcademicFormation
        }
      </InfoSection>
      <ItemsInfoSection label="Habilidades requeridas:">
        {jobOffer.requiredSkills.map((x, i) => (
          <span key={i}>{x.name}</span>
        ))}
      </ItemsInfoSection>
      <InfoSection label="Modalidad de oficina:">
        {jobOffer.typeOfOffice === null
          ? ""
          : typeofofficeForHumans(jobOffer.typeOfOffice)
        }
      </InfoSection>
      <InfoSection label="Experiencia requerida:">
        {jobOffer.requiredMonthsOfExperienceRange === null
          ? ""
          : `${jobOffer.requiredMonthsOfExperienceRange.from ?? "N/A"} - ${jobOffer.requiredMonthsOfExperienceRange.to ?? "N/A"} meses`
        }
      </InfoSection>
      <InfoSection label="Área laboral:">
        {jobOffer.jobArea === null
          ? ""
          : jobOffer.jobArea.name
        }
      </InfoSection>
      <ItemsInfoSection label="Idiomas requeridos:">
        {jobOffer.requiredIdioms.map((x, i) => (
          <span key={i}>{x.idiom.name}: {idiomLevelForHumans(x.level)}</span>
        ))}
      </ItemsInfoSection>
      <InfoSection label="Rango salarial:">
        {salaryRange}
      </InfoSection>
      <InfoSection label="Tipo de contrato:">
        {jobOffer.typeOfJobContract === null
          ? ""
          : typeOfJobContractForHumans(jobOffer.typeOfJobContract)
        }
      </InfoSection>
      <InfoSection label="Se requiere diponibilidad para viajar:">
        {jobOffer.isAvailabilityToTravelRequired ? "Sí" : "No"}
      </InfoSection>
      <InfoSection label="Se requiere diponibilidad para cambiar de residencia:">
        {jobOffer.isAvailabilityToChangeResidenceRequired ? "Sí" : "No"}
      </InfoSection>
      <InfoSection label="Origen de la oferta:">
        {jobOffer.provider?.name ?? ""}
      </InfoSection>
      <InfoSection label="Url personalizada:">
        {jobOffer.customActionsconfig?.applyUrl ?? ""}
      </InfoSection>
    </div>
  );
}
// ItemsInfoSection
export default JobOfferDetail;
