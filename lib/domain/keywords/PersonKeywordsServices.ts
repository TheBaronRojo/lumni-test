import { singleton } from "tsyringe";
import KeywordsServices from "./KeywordsServices";
import EmploymentInfo from "../models/EmploymentInfo";
import TypeOfOfficeKeywordsServices from "./TypeOfOfficeKeywordsServices";

@singleton()
export default class PersonKeywordsServices {

  constructor(
    private keywordsServices: KeywordsServices,
    private typeOfOfficeKeywordsServices: TypeOfOfficeKeywordsServices,
  ) { }

  generateEmploymentInfoKeywords(employmentInfo: EmploymentInfo): string {
    const { 
      idioms, 
      skills, 
      sectorsOfLaboralExperience, 
      sectorsOfInterestForEmployment,
      complementaryTraining,
      techSkills,
      preferredTypeOfOffice,
    } = employmentInfo;

    const keyWordsArray = [
      this.keywordsServices.extractKeyWordsFromArray(idioms.map(x => x.idiom.name)),
      this.keywordsServices.extractKeyWordsFromArray(skills.map(x => x.name)),
      this.keywordsServices.extractKeyWordsFromArray(sectorsOfLaboralExperience.map(x => x.name)),
      this.keywordsServices.extractKeyWordsFromArray(sectorsOfInterestForEmployment.map(x => x.name)),
      this.keywordsServices.extractKeyWordsFromArray(complementaryTraining),
      this.keywordsServices.extractKeyWordsFromArray(techSkills),
    ];

    if (preferredTypeOfOffice !== null) {
      keyWordsArray.push(this.typeOfOfficeKeywordsServices.generateTypeOfOfficeKeywords(preferredTypeOfOffice));
    }
    const keyWords = this.keywordsServices.concatKeyWords(keyWordsArray);
    return keyWords;
  }

}
