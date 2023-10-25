import RemunerationOffer from "@domain/models/RemunerationOffer";
import IRemunerationOfferDto from "../models/IRemunerationOfferDto";
import { singleton } from "tsyringe";
import CurrencyDtoMapper from "./CurrencyDtoMapper";

@singleton()
class RemunerationOfferDtoMapper {

  constructor(
    private currencyDtoMapper: CurrencyDtoMapper,
  ){}

  valueToDto(value: RemunerationOffer): IRemunerationOfferDto {
    return {
      currency: this.currencyDtoMapper.entityToDto(value.currency),
      rangeStart: value.rangeStart,
      rangeTop: value.rangeTop,
    };
  }

}

export default RemunerationOfferDtoMapper;
