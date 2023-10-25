import IdiomEntity from "./IdiomEntity";
import IdiomLevel from "./IdiomLevel";

export default class IdiomLevelMatch {
  constructor(
    public readonly idiom: IdiomEntity,
    public readonly level: IdiomLevel
  ) { }
}
