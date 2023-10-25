import IGeographyLocationSummaryDto from "@application/models/IGeographyLocationSummaryDto";
import capitalizeFirstLetter from "@presentation/texts/capitalizeFirstLetter";
import ILocationPresentationOptions from "./ILocationPresentationOptions";

export default function locationSummaryDtoForHumans(
  location: IGeographyLocationSummaryDto,
  options?: ILocationPresentationOptions
) {
  const country = options && options.hideCountry
    ? null
    : capitalizeFirstLetter(location.countryName);

  const department = !location.departmentName || (options && options.hideDepartment)
    ? null
    : capitalizeFirstLetter(location.departmentName);

  const city = !location.cityName || (options && options.hideCity)
    ? null
    : capitalizeFirstLetter(location.cityName);

  let names = [city, department, country].filter(x => x !== null);
  if (options && options.countryFirst) {
    names = names.reverse();
  }
  return names.join(", ");
}
