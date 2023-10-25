import ICurrencyDbm from "./ICurrencyDbm";

interface IRemunerationRangeDbm {
  currency: ICurrencyDbm;
  rangeStart: number;
  rangeTop: number;
}

export default IRemunerationRangeDbm;
