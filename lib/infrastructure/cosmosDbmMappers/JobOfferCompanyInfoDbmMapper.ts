import JobOfferCompanyInfo from "@domain/models/JobOfferCompanyInfo";
import IJobOfferCompanyInfoDbm from "../cosmosDbModels/IJobOfferCompanyInfoDbm";
import { singleton } from "tsyringe";
import EconomicSectorDbmMapper from "./EconomicSectorDbmMapper";

@singleton()
class JobOfferCompanyInfoDbmMapper {

  constructor(
    private economicSectorDbmMapper: EconomicSectorDbmMapper,
  ){ }

  dbmToValue(dbm: IJobOfferCompanyInfoDbm): JobOfferCompanyInfo {
    return new JobOfferCompanyInfo(
      dbm.companyId,
      dbm.name,
      dbm.economicSector ? this.economicSectorDbmMapper.dbmToEntity(dbm.economicSector) : null,
    );
  }

  valueToDbm(value: JobOfferCompanyInfo): IJobOfferCompanyInfoDbm {
    return {
      companyId: value.companyId,
      name: value.name,
      economicSector: value.economicSector 
        ? this.economicSectorDbmMapper.entityToDbm(value.economicSector) 
        : null,
    };
  }

}

export default JobOfferCompanyInfoDbmMapper;
