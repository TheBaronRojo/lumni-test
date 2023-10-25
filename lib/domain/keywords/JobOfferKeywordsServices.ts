import { singleton } from "tsyringe";
import KeywordsServices from "./KeywordsServices";
import JobOfferEntity from "../models/JobOfferEntity";
import TypeOfOfficeKeywordsServices from "./TypeOfOfficeKeywordsServices";
import AcademicLevelKeywordsServices from "./AcademicLevelKeywordsServices";
import TypeOfJobContractKeywordsServices from "./TypeOfJobContractKeywordsServices";

@singleton()
export default class JobOfferKeywordsServices {

  constructor(
    private keywordsServices: KeywordsServices,
    private academicLevelKeywordsServices: AcademicLevelKeywordsServices,
    private typeOfOfficeKeywordsServices: TypeOfOfficeKeywordsServices,
    private typeOfJobContractKeywordsServices: TypeOfJobContractKeywordsServices,
  ) { }


  generateJobOffersKeywords(jobOffer: JobOfferEntity): string {
    const keyWordsArray = [
      this.keywordsServices.extractKeyWordsFromString(jobOffer.jobRole),
      this.keywordsServices.extractKeyWordsFromString(jobOffer.jobFunctions),
      this.keywordsServices.extractKeyWordsFromArray(jobOffer.requiredIdioms.map(x => x.idiom.name)),
      this.keywordsServices.extractKeyWordsFromArray(jobOffer.requiredSkills.map(x => x.name)),
    ];

    if (jobOffer.jobArea !== null) {
      keyWordsArray.push(
        this.keywordsServices.extractKeyWordsFromString(jobOffer.jobArea.name)
      );
    }

    jobOffer.requiredAcademicLevels.forEach(x => {
      keyWordsArray.push(
        this.academicLevelKeywordsServices.generateAcademicLevelKeywords(x)
      )
    });

    if (jobOffer.typeOfOffice !== null) {
      keyWordsArray.push(
        this.typeOfOfficeKeywordsServices.generateTypeOfOfficeKeywords(jobOffer.typeOfOffice),
      );
    }

    jobOffer.geographyLocations.forEach(x => {
      keyWordsArray.push(
        this.keywordsServices.extractKeyWordsFromString(
          x.country.name
        )
      );
      if (x.department !== null) {
        keyWordsArray.push(
          this.keywordsServices.extractKeyWordsFromString(
            x.department.name
          )
        );
      }
      if (x.city !== null) {
        keyWordsArray.push(
          this.keywordsServices.extractKeyWordsFromString(
            x.city.name
          )
        );
      }
    });

    if (jobOffer.typeOfJobContract !== null) {
      keyWordsArray.push(
        this.typeOfJobContractKeywordsServices.generateTypeOfJobContractKeywords(
          jobOffer.typeOfJobContract
        )
      );
    }

    const keyWords = this.keywordsServices.concatKeyWords(keyWordsArray);
    return keyWords;
  }

}
