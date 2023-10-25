import GeographyEntity from "./GeographyEntity";

class GeographyLocation {

  constructor(
    public readonly country: GeographyEntity,
    public readonly department: GeographyEntity | null,
    public readonly city: GeographyEntity | null,
  ) {
    // TODO We need activate this validations and Log this errors
    // if(country.type !== GeographyType.Country) {
    //   throw new ValueError(this, "country", "Not valid Country");
    // }

    // if(department.type !== GeographyType.State) {
    //   throw new ValueError(this, "department", "Not valid Department");
    // }

    // if(department.parentGeographyId !== country.id) {
    //   throw new ValueError(this, "department", "Department is Not child of Country");
    // }

    // if(city.type !== GeographyType.City) {
    //   throw new ValueError(this, "city", "Not valid City");
    // }

    // if(city.parentGeographyId !== department.id) {
    //   throw new ValueError(this, "city", "City is Not child of Department");
    // }
  }

}

export default GeographyLocation;
