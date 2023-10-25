import { singleton } from "tsyringe";
import { randomInt } from "node:crypto";

@singleton()
export default class RandomServices {

  generateRandomRumberWithLength(length: number): number {
    const min = "1" + "0".repeat(length - 1);
    const max = "9".repeat(length);
    return randomInt(+min, +max);
  }

}
