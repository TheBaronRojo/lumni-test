import IJobOfferDto from "@application/models/IJobOfferDto";
import isoStringDateToHumanDate from "@presentation/dates/isoStringDateToHumanDate";
import jobOfferDtoStatusForHumans from "@presentation/jobOffers/jobOfferDtoStatusForHumans";
import capitalizeFirstLetter from "@presentation/texts/capitalizeFirstLetter";
import IJobOfferRow from "./IJobOfferRow";

export default function jobOfferToRow(dto: IJobOfferDto): IJobOfferRow {

  const locationsNames = dto.geographyLocations.map(x =>
    [x.countryName, x.departmentName, x.cityName]
      .filter(x => x !== null)
      .map(capitalizeFirstLetter as (x: string | null) => string)
      .join(", ")
  );

  const location = <span>{locationsNames.join(" / ")}</span>;

  const { text: status, color: statusColor } = jobOfferDtoStatusForHumans(dto);

  const currencyFormater = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: dto.remunerationOffer.currency.isoCode,
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  });

  const salaryMin = dto.remunerationOffer.rangeStart === null
    ? "N/A"
    : currencyFormater
      .format(dto.remunerationOffer.rangeStart)
      .replace(/[ARUSCLPMXNE\$]/gi, '')
      .trim();
  const salaryMax = dto.remunerationOffer.rangeTop === null
    ? "N/A"
    : currencyFormater
      .format(dto.remunerationOffer.rangeTop)
      .replace(/[ARUSCLPMXNE\$]/gi, '')
      .trim();
  const salaryRange = `(${dto.remunerationOffer.currency.isoCode}) ${salaryMin} - ${salaryMax}`;

  return {
    id: dto.id,
    jobRole: dto.jobRole,
    company: dto.companyInfo.name ?? "",
    creationTime: isoStringDateToHumanDate(dto.createdAt),
    expirationTime: dto.expiresAt ? isoStringDateToHumanDate(dto.expiresAt) : "",
    knowledgeArea: dto.jobKnowledgeArea === null
      ? "N/A"
      : dto.jobKnowledgeArea,
    location,
    status,
    statusColor: <div style={{ width: "100%", height: "100%", background: statusColor }} />,
    salaryRange
  };
}
