import IJobOfferCustomActionsConfigDto from "@application/models/IJobOfferCustomActionsConfigDto";
import JobOfferCustomActionsConfig from "@domain/models/JobOfferCustomActionsConfig";
import { singleton } from "tsyringe";

@singleton()
export default class JobOfferCustomActionsConfigDtoMapper {

  valueToDto(value: JobOfferCustomActionsConfig): IJobOfferCustomActionsConfigDto {
    return {
      detailUrl: value.detailUrl,
      applyUrl: value.applyUrl,
    };
  }

}
