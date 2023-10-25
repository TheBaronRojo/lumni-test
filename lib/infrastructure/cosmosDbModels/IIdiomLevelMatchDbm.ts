import IIDiomDbm from "./IIdiomDbm";

export type IdiomLevelDbm = "basic" | "intermediate" | "advanced" | "native";

export default interface IIDiomLevelMatchDbm {
  idiom: IIDiomDbm;
  level: IdiomLevelDbm;
}
