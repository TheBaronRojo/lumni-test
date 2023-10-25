import IGeographyLocationDbm from "./IGeographyLocationDbm";

export default interface IContactInfoDbm {
  personId: string;
  createdAt: number;
  updatedAt: number;
  cellphonePrefix: string | null;
  cellphoneNumber: string | null;
  email: string | null;
  residentialGeographicLocation: IGeographyLocationDbm | null;
}