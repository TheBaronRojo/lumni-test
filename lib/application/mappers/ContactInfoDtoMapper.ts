import ContactInfo from "@domain/models/ContactInfo";
import { singleton } from "tsyringe";
import IContactInfoDto from "../models/IContactInfoDto";
import GeographyLocationSummaryDtoMapper from "./GeographyLocationSummaryDtoMapper";

@singleton()
export default class ContactInfoDtoMapper {

  constructor(
    private geographyLocationDtoMapper: GeographyLocationSummaryDtoMapper,
  ) { }


  valueToDto(value: ContactInfo): IContactInfoDto {
    return {
      personId: value.personId,
      cellphonePrefix: value.cellphonePrefix,
      cellphoneNumber: value.cellphoneNumber,
      email: value.email,
      residentialGeographicLocation: value.residentialGeographicLocation === null
        ? null
        : this.geographyLocationDtoMapper.valueToDto(value.residentialGeographicLocation),
    };
  }

}