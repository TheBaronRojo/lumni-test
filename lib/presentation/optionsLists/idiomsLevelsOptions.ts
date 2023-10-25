import IdiomLevel from "@domain/models/IdiomLevel";
import IOptionValue from "@presentation/optionsLists/IOptionValue";
import idiomLevelForHumans from "@presentation/enums/idiomLevelForHumans";

export const idiomsLevelsOptionsValues = [
  IdiomLevel.Basic, 
  IdiomLevel.Intermediate, 
  IdiomLevel.Advanced, 
  IdiomLevel.Native
];

const idiomsLevelsOptions: IOptionValue[] = idiomsLevelsOptionsValues
  .map(x => ({value: x, text: idiomLevelForHumans(x)}));

export default idiomsLevelsOptions;
