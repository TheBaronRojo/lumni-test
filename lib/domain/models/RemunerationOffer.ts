import CurrencyEntity from "./CurrencyEntity";
import { PropertyError } from "../errors";

class RemunerationOffer {
  constructor(
    public readonly currency: CurrencyEntity,
    public readonly rangeStart: number | null,
    public readonly rangeTop: number | null,
  ) {
    if(rangeStart !== null && rangeStart < 0) {
      throw new PropertyError(this, "rangeStart", "Should be gretter than 0");
    }

    if(rangeStart !== null && rangeTop !== null && rangeTop < rangeStart) {
      throw new PropertyError(this, "rangeTop", "Should be gretter than range start");
    }
  }
}

export default RemunerationOffer;
