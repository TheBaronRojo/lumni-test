import JobOfferContactInfo from "@domain/models/JobOfferContactInfo";
import { singleton } from "tsyringe";
import IJobOfferContactInfoDbm from "../cosmosDbModels/IJobOfferContactInfoDbm";

@singleton()
class JobOfferContactInfoDbmMapper {

  dbmToValue(dbm: IJobOfferContactInfoDbm): JobOfferContactInfo {
    return new JobOfferContactInfo(
      dbm.personId,
      dbm.fullName,
      dbm.cellphonePrefix,
      dbm.cellphoneNumber,
      dbm.email,
    );
  }

  valueToDbm(value: JobOfferContactInfo): IJobOfferContactInfoDbm {
    return {
      personId: value.personId,
      fullName: value.fullName,
      cellphonePrefix: value.cellphonePrefix,
      cellphoneNumber: value.cellphoneNumber,
      email: value.email,
    };
  }  

}

export default JobOfferContactInfoDbmMapper;
