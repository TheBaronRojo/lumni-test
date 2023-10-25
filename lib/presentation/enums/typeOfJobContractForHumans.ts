import TypeOfJobContract from "@domain/models/TypeOfJobContract";

export default function typeOfJobContractForHumans(typeOfJobContract: TypeOfJobContract): string {
  switch(typeOfJobContract) {
    case TypeOfJobContract.IndefiniteTerm:
      return "Término indefinido";
    case TypeOfJobContract.FixedTerm:
      return "Término fijo";
    case TypeOfJobContract.ProvisionOfServices:
      return "Prestación de servicios";
    case TypeOfJobContract.SpecificProjecOrService:
      return "Obra labor";
  }
}
