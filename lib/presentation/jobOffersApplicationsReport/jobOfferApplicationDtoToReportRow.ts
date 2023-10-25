import IJobOfferApplicationDto from "@application/models/IJobOfferApplicationDto";
import locationSummaryDtoForHumans from "@presentation/locations/locationSummaryDtoForHumans";
import IJobOfferApplicationReportRow from "./IJobOfferApplicationReportRow";

export default function jobOfferApplicationDtoToReportRow(
  dto: IJobOfferApplicationDto & { cvUrl: string | null },
  locale: string = "es-CO",
  timeZone?: string,
): IJobOfferApplicationReportRow {

  return {
    id: dto.id,
    jobOfferId: dto.jobOffer.id,
    companyName: dto.jobOffer.companyInfo.name,
    jobRole: dto.jobOffer.jobRole,
    personName: dto.personIdentificationInfo.firstName,
    personLastName: dto.personIdentificationInfo.lastName,
    personContactEmail: dto.personContactInfo.email ?? "",
    personLocation: dto.personContactInfo.residentialGeographicLocation === null
      ? ""
      : locationSummaryDtoForHumans(dto.personContactInfo.residentialGeographicLocation),
    createdAt: new Date(dto.createdAt).toLocaleString(locale, { timeZone }),
    cvUrl: dto.cvUrl ?? "",
  };
}
