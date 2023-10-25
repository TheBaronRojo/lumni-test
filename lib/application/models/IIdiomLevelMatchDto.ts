import IdiomLevel from "@domain/models/IdiomLevel";
import IIDiomDto from "./IIdiomDto";

export default interface IIDiomLevelMatch {
  idiom: IIDiomDto;
  level: IdiomLevel;
}
