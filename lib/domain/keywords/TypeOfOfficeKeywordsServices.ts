import { singleton } from "tsyringe";
import KeywordsServices from "./KeywordsServices";
import TypeOfOffice from "../models/TypeOfOffice";

@singleton()
export default class TypeOfOfficeKeywordsServices {

  constructor(
    private keywordsServices: KeywordsServices
  ) { }


  generateTypeOfOfficeKeywords(typeOfOffice: TypeOfOffice): string {
    let words: string;
    switch (typeOfOffice) {
      case TypeOfOffice.Hybrid:
        words = "Híbrido"; 
        break;
      case TypeOfOffice.Remote:
        words = "Remoto virtual"; 
        break;
      case TypeOfOffice.Presential:
        words = "Presencial"; 
        break;
    }
    return this.keywordsServices.extractKeyWordsFromString(words);
  }

}
