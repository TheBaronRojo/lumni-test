import { ValueError } from "@domain/errors";
import TypeOfOffice from "@domain/models/TypeOfOffice";
import TypeOfOfficeDbm from "@infrastructure/cosmosDbModels/TypeOfOfficeDbm";
import { singleton } from "tsyringe";

@singleton()
export default class TypeOfOfficeDbmMapper {

  valueToDbm(value: TypeOfOffice): TypeOfOfficeDbm {
    switch (value) {
      case TypeOfOffice.Presential:
        return "presential";
      case TypeOfOffice.Remote:
        return "remote";
      case TypeOfOffice.Hybrid:
        return "hybrid";
    }
  }

  dbmToValue(dbm: TypeOfOfficeDbm): TypeOfOffice {
    switch (dbm) {
      case "presential":
        return TypeOfOffice.Presential;
      case "remote":
        return TypeOfOffice.Remote;
      case "hybrid":
        return TypeOfOffice.Hybrid;
      default:
        throw new ValueError(`${dbm} is not valid TypeOfOfficeDbm`);
    }
  }

}
