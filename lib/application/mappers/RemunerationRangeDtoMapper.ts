import RemunerationRange from "@domain/models/RemunerationRange";
import IRemunerationRangeDto from "../models/IRemunerationRangeDto";
import { singleton } from "tsyringe";
import CurrencyDtoMapper from "./CurrencyDtoMapper";

@singleton()
class RemunerationRangeDtoMapper {

  constructor(
    private currencyDtoMapper: CurrencyDtoMapper,
  ){}

  valueToDto(value: RemunerationRange): IRemunerationRangeDto {
    return {
      currency: this.currencyDtoMapper.entityToDto(value.currency),
      rangeStart: value.rangeStart,
      rangeTop: value.rangeTop,
    };
  }

}

export default RemunerationRangeDtoMapper;
