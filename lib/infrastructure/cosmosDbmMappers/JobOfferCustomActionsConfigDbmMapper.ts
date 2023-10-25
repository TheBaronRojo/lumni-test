import JobOfferCustomActionsConfig from "@domain/models/JobOfferCustomActionsConfig";
import IJobOfferCustomActionsConfigDbm from "@infrastructure/cosmosDbModels/IJobOfferCustomActionsConfigDbm";
import { singleton } from "tsyringe";

@singleton()
export default class JobOfferCustomActionsConfigDbmMapper {

  valueToDbm(value: JobOfferCustomActionsConfig): IJobOfferCustomActionsConfigDbm {
    return {
      detailUrl: value.detailUrl,
      applyUrl: value.applyUrl,
    };
  }

  dbmToValue(dbm: IJobOfferCustomActionsConfigDbm): JobOfferCustomActionsConfig {
    return new JobOfferCustomActionsConfig(
      dbm.detailUrl,
      dbm.applyUrl ?? null,
    );
  }
}
