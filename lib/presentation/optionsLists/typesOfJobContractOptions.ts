import TypeOfJobContract from "@domain/models/TypeOfJobContract";
import IOptionValue from "@presentation/optionsLists/IOptionValue";
import typeOfJobContractForHumans from "@presentation/enums/typeOfJobContractForHumans";


export const typesOfJobContractOptionsValues = [
  TypeOfJobContract.FixedTerm,
  TypeOfJobContract.IndefiniteTerm,
  TypeOfJobContract.ProvisionOfServices,
  TypeOfJobContract.SpecificProjecOrService,
];

const typesOfJobContractOptions: IOptionValue[] = typesOfJobContractOptionsValues
  .map(x => ({ value: x, text: typeOfJobContractForHumans(x) }));

export default typesOfJobContractOptions;
