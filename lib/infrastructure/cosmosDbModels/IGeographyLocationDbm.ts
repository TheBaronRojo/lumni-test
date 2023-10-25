import IGeographyCosmosDbm from "./IGeographyDbm";

interface IGeographyLocationDbm {
  country: IGeographyCosmosDbm;
  state: IGeographyCosmosDbm | null;
  city: IGeographyCosmosDbm | null;
}

export default IGeographyLocationDbm;
