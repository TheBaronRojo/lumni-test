import IRemunerationRangeDbm from "../cosmosDbModels/IRemunerationRangeDbm";
import { singleton } from "tsyringe";
import CurrencyDbmMapper from "./CurrencyDbmMapper";
import RemunerationRange from "@domain/models/RemunerationRange";

@singleton()
class RemunerationRangeDbmMapper {

  constructor(
    private currencyDbmMapper: CurrencyDbmMapper,
  ) { }

  dbmToValue(dbm: IRemunerationRangeDbm): RemunerationRange {
    return new RemunerationRange(
      this.currencyDbmMapper.dbmToEntity(dbm.currency),
      dbm.rangeStart,
      dbm.rangeTop,
    );
  }

  valueToDbm(value: RemunerationRange): IRemunerationRangeDbm {
    return {
      currency: this.currencyDbmMapper.entityToDbm(value.currency),
      rangeStart: value.rangeStart,
      rangeTop: value.rangeTop,
    };
  }

}

export default RemunerationRangeDbmMapper;
