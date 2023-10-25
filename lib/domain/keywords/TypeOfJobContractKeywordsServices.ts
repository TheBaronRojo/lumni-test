import { singleton } from "tsyringe";
import KeywordsServices from "./KeywordsServices";
import TypeOfJobContract from "../models/TypeOfJobContract";

@singleton()
export default class TypeOfJobContractKeywordsServices {

  constructor(
    private keywordsServices: KeywordsServices
  ) { }


  generateTypeOfJobContractKeywords(typeOfJobContract: TypeOfJobContract): string {
    let words: string;
    switch (typeOfJobContract) {
      case TypeOfJobContract.FixedTerm:
        words = "Término fijo"; 
        break;
      case TypeOfJobContract.IndefiniteTerm:
        words = "Término indefinido"; 
        break;
      case TypeOfJobContract.ProvisionOfServices:
        words = "Prestación Prestador servicios"; 
        break;
      case TypeOfJobContract.SpecificProjecOrService:
        words = "Obra labor"; 
        break;
    }
    return this.keywordsServices.extractKeyWordsFromString(words);
  }

}
