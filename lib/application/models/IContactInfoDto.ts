import IGeographyLocationSummaryDto from "./IGeographyLocationSummaryDto";

export default interface IContactInfoDto {
  personId: string,
  cellphonePrefix: string | null,
  cellphoneNumber: string | null,
  email: string | null,
  residentialGeographicLocation: IGeographyLocationSummaryDto | null,
}