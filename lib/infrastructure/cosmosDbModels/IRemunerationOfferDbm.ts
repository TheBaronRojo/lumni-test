import ICurrencyDbm from "./ICurrencyDbm";

interface IRemunerationOfferDbm {
  currency: ICurrencyDbm;
  rangeStart: number | null;
  rangeTop: number | null;
}

export default IRemunerationOfferDbm;
