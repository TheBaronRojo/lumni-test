import IdiomLevel from "@domain/models/IdiomLevel";

export default function idiomLevelForHumans(idiomLevel: IdiomLevel): string {
  switch (idiomLevel) {
    case IdiomLevel.Basic:
      return "Básico A1-B1";
    case IdiomLevel.Intermediate:
      return "Intermedio B2-C1";
    case IdiomLevel.Advanced:
      return "Avanzado C2";
    case IdiomLevel.Native:
      return "Nativo";
  }
}
