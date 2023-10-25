interface IGeographyLocationSummaryDto {
  countryId: string;
  countryName: string;
  departmentId: string | null;
  departmentName: string | null;
  cityId: string | null;
  cityName: string | null;
}

export default IGeographyLocationSummaryDto;
