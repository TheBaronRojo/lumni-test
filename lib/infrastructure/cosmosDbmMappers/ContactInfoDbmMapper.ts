import ContactInfo from "@domain/models/ContactInfo";
import { singleton } from "tsyringe";
import IContactInfoDbm from "../cosmosDbModels/IContactInfoDbm";
import GeographyLocationDbmMapper from "./GeographyLocationDbmMapper";

@singleton()
export default class ContactInfoDbmMapper {
  constructor(
    private geographyLocationDbmMapper: GeographyLocationDbmMapper
  ) { }

  valueToDbm(value: ContactInfo): IContactInfoDbm {
    return {
      personId: value.personId,
      createdAt: value.createdAt.getTime(),
      updatedAt: value.updatedAt.getTime(),
      cellphonePrefix: value.cellphonePrefix,
      cellphoneNumber: value.cellphoneNumber,
      email: value.email,
      residentialGeographicLocation: value.residentialGeographicLocation === null
        ? null
        : this.geographyLocationDbmMapper.valueToDbm(value.residentialGeographicLocation),
    }
  }

  dbmToValue(dbm: IContactInfoDbm): ContactInfo {
    return new ContactInfo(
      dbm.personId,
      new Date(dbm.createdAt),
      new Date(dbm.updatedAt),
      dbm.cellphonePrefix,
      dbm.cellphoneNumber,
      dbm.email,
      dbm.residentialGeographicLocation === null
        ? null
        : this.geographyLocationDbmMapper.dbmToValue(dbm.residentialGeographicLocation),
    );
  }
}
