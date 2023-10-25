import { singleton } from "tsyringe";
import KeywordsServices from "./KeywordsServices";
import AcademicLevel from "../models/AcademicLevel";

@singleton()
export default class AcademicLevelKeywordsServices {

  constructor(
    private keywordsServices: KeywordsServices
  ) { }


  generateAcademicLevelKeywords(academicLevel: AcademicLevel): string {
    let words: string;
    switch(academicLevel) {
      case AcademicLevel.Technical:
        words = "Técnico Técnica"; break;
      case AcademicLevel.Tenogologist:
        words = "Tecnológico Tecnológica Tecnólogo Tecnóloga"; break;
      case AcademicLevel.Professional:
        words = "Profesional Graduado Universitario"; break;
      case AcademicLevel.Specialization:
        words = "Especialización"; break;
      case AcademicLevel.Master:
        words = "Maestría Master"; break;
    }
    return this.keywordsServices.extractKeyWordsFromString(words);
  }

}
