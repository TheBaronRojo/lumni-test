import ICurrencyDto from "./ICurrencyDto";

interface IRemunerationRangeDto {
  currency: ICurrencyDto;
  rangeStart: number;
  rangeTop: number;
}

export default IRemunerationRangeDto;
