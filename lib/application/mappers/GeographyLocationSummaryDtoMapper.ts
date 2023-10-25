import { singleton } from "tsyringe";
import IGeographyLocationSummaryDto from "../models/IGeographyLocationSummaryDto";
import GeographyLocation from "@domain/models/GeographyLocation";

@singleton()
class GeographyLocationSummaryDtoMapper {

  valueToDto(value: GeographyLocation): IGeographyLocationSummaryDto {
    return {
      cityId: value.city?.id ?? null,
      departmentId: value.department?.id ?? null,
      countryId: value.country.id,
      cityName: value.city?.name ?? null,
      departmentName: value.department?.name ?? null,
      countryName: value.country.name,
    };
  }

}

export default GeographyLocationSummaryDtoMapper;
