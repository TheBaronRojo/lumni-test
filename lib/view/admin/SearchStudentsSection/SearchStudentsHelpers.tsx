import IGeographyLocationSummaryDto from "@application/models/IGeographyLocationSummaryDto";
import IPersonDto from "@application/models/IPersonDto";
import capitalizeFirstLetter from "@presentation/texts/capitalizeFirstLetter";
import ISearchStudentsRow from "./ISearchStudentsRow";
import isoStringDateToHumanDate from "@presentation/dates/isoStringDateToHumanDate";


export function locationToString(location?: IGeographyLocationSummaryDto | null): string {
  if (!location) return "N/A";
  return [location.countryName, location.departmentName, location.cityName]
    .filter(x => x !== null)
    .map(capitalizeFirstLetter as (x: string | null) => string)
    .join(", ");
}

export function factoryFullName(person: IPersonDto) {
  const firstName = person.identificationInfo?.firstName ?? "";
  const middleName = person.identificationInfo?.middleName ?? "";
  const lastName = person.identificationInfo?.lastName ?? "";
  return [firstName, middleName, lastName].filter(x => x.length > 0).join(" ");
}

export function personToRow(person: IPersonDto, index: number): ISearchStudentsRow {
  return {
    id: person.id,
    rowIndex: index + 1,
    registerDate: person.employmentInfo?.createdAt != null &&
      isoStringDateToHumanDate(person.employmentInfo?.createdAt),
    fullName: person.identificationInfo
      ? factoryFullName(person)
      : "N/A",
  };
}
