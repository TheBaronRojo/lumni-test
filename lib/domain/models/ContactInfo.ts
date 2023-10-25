import GeographyLocation from "./GeographyLocation";

export default class ContactInfo {
  constructor(
    public readonly personId: string,
    public readonly createdAt: Date,
    public readonly updatedAt: Date,
    public readonly cellphonePrefix: string | null,
    public readonly cellphoneNumber: string | null,
    public readonly email: string | null,
    public readonly residentialGeographicLocation: GeographyLocation | null,
  ) {

  }
}
