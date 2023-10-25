import IRemunerationOfferDbm from "../cosmosDbModels/IRemunerationOfferDbm";
import { singleton } from "tsyringe";
import CurrencyDbmMapper from "./CurrencyDbmMapper";
import RemunerationOffer from "@domain/models/RemunerationOffer";

@singleton()
class RemunerationOfferDbmMapper {

  constructor(
    private currencyDbmMapper: CurrencyDbmMapper,
  ) { }

  dbmToValue(dbm: IRemunerationOfferDbm): RemunerationOffer {
    return new RemunerationOffer(
      this.currencyDbmMapper.dbmToEntity(dbm.currency),
      dbm.rangeStart,
      dbm.rangeTop,
    );
  }

  valueToDbm(value: RemunerationOffer): IRemunerationOfferDbm {
    return {
      currency: this.currencyDbmMapper.entityToDbm(value.currency),
      rangeStart: value.rangeStart,
      rangeTop: value.rangeTop,
    };
  }

}

export default RemunerationOfferDbmMapper;
