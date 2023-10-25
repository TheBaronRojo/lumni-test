import TypeOfOffice from "@domain/models/TypeOfOffice";
import IOptionValue from "@presentation/optionsLists/IOptionValue";
import typeofofficeForHumans from "@presentation/enums/typeOfOfficeForHumans";

export const typesOfOfficeOptionsValues = [
  TypeOfOffice.Presential,
  TypeOfOffice.Hybrid,
  TypeOfOffice.Remote,
];

const typesOfOfficeOptions: IOptionValue[] = typesOfOfficeOptionsValues
  .map(x => ({value: x, text: typeofofficeForHumans(x)}));

export default typesOfOfficeOptions;
