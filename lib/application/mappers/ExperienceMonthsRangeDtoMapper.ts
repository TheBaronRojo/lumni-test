import IExperienceMonthsRangeDto from "@application/models/IExperienceMonthsRangeDto";
import ExperienceMonthsRange from "@domain/models/ExperienceMonthsRange";
import { singleton } from "tsyringe";

@singleton()
export default class ExperienceMonthsRangeDtoMapper {

  valueToDto(value: ExperienceMonthsRange): IExperienceMonthsRangeDto {
    return {
      from: value.from,
      to: value.to,
    };
  }

}
