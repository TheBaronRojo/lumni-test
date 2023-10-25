import { ValueError } from "@domain/errors";
import TypeOfJobContract from "@domain/models/TypeOfJobContract";
import TypeOfJobContractDbm from "@infrastructure/cosmosDbModels/TypeOfJobContractDbm";
import { singleton } from "tsyringe";

@singleton()
export default class TypeOfJobContractDbmMapper {
  valueToDbm(value: TypeOfJobContract): TypeOfJobContractDbm {
    switch(value) {
      case TypeOfJobContract.FixedTerm:
        return "fixedTerm";
      case TypeOfJobContract.IndefiniteTerm:
        return "indefiniteTerm";
      case TypeOfJobContract.ProvisionOfServices:
        return "provisionOfServices";
      case TypeOfJobContract.SpecificProjecOrService:
        return "specificProjecOrService";
    }
  }

  dbmToValue(dbm: TypeOfJobContractDbm): TypeOfJobContract {
    switch(dbm) {
      case "fixedTerm":
        return TypeOfJobContract.FixedTerm;
      case "indefiniteTerm":
        return TypeOfJobContract.IndefiniteTerm;
      case "provisionOfServices":
        return TypeOfJobContract.ProvisionOfServices;
      case "specificProjecOrService":
        return TypeOfJobContract.SpecificProjecOrService;
      default:
        throw new ValueError(`${dbm} is not a valid TypeOfJobContractDbm`);
    }
  }
}
