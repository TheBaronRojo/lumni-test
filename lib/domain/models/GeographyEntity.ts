import GeographyType from "./GeographyType";


class GeographyEntity {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly type: GeographyType,
    public readonly parentGeographyId: string | null,
  ) {

  }
}

export default GeographyEntity;
