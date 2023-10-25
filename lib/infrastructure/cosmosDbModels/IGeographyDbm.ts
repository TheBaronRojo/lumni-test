
export type GeographyTypeDbm =  "country" | "state" | "city";

interface IGeographyCosmosDbm {
  id: string;
  name: string;
  type: GeographyTypeDbm;
  parentGeographyId: string | null;
}

export default IGeographyCosmosDbm;
