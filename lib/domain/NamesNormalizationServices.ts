import { singleton } from "tsyringe";

@singleton()
export default class NamesNormalizationServices {

  normalize(rawName: string): string {
    return rawName.toString()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[\r\n]+/g," ")
      .toUpperCase()
      .split(" ")
      .filter(x => x.length > 0)
      .join("_");
  }

}
