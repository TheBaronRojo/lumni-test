import { singleton } from "tsyringe";
import * as shortUUID from "short-uuid";


@singleton()
export default class IdsGenerationServices {

  nextId(): string {
    return shortUUID.generate();
  }

}
