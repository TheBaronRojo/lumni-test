import CurrencyEntity from "./CurrencyEntity";
import { PropertyError } from "../errors";

class RemunerationRange {
  constructor(
    public readonly currency: CurrencyEntity,
    public readonly rangeStart: number,
    public readonly rangeTop: number,
  ) {
    if(rangeStart < 0) {
      throw new PropertyError(this, "rangeStart", "Should be gretter than 0");
    }

    if(rangeTop < rangeStart) {
      throw new PropertyError(this, "rangeTop", "Should be gretter than range start");
    }
  }
}

export default RemunerationRange;
