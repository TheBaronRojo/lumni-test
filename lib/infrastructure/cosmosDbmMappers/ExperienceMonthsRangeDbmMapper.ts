import ExperienceMonthsRange from "@domain/models/ExperienceMonthsRange";
import IExperienceMonthsRangeDbm from "@infrastructure/cosmosDbModels/IPositiveNumberRangeDbm";
import { singleton } from "tsyringe";

@singleton()
export default class ExperienceMonthsRangeDbmMapper {

  valueToDbm(value: ExperienceMonthsRange): IExperienceMonthsRangeDbm {
    return {
      from: value.from,
      to: value.to,
    };
  }

  dbmToValue(dbm: IExperienceMonthsRangeDbm): ExperienceMonthsRange {
    return new ExperienceMonthsRange(
      dbm.from,
      dbm.to,
    );
  }
}
