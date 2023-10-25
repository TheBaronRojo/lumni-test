import ICurrencyDto from "./ICurrencyDto";

interface IRemunerationOfferDto {
  currency: ICurrencyDto;
  rangeStart: number | null;
  rangeTop: number | null;
}

export default IRemunerationOfferDto;
