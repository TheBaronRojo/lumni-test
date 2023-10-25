import IJobOfferCompanyInfoDto from "@application/models/IJobOfferCompanyInfoDto";
import JobOfferCompanyInfo from "@domain/models/JobOfferCompanyInfo";
import { singleton } from "tsyringe";
import EconomicSectorDtoMapper from "./EconomicSectorDtoMapper";

@singleton()
export default class JobOfferCompanyInfoDtoMapper {

  constructor(
    private economicSectorDtoMapper: EconomicSectorDtoMapper,
  ) { }

  valueToDto(value: JobOfferCompanyInfo): IJobOfferCompanyInfoDto {
    return {
      companyId: value.companyId,
      name: value.name,
      economicSector: value.economicSector === null
        ? null
        : this.economicSectorDtoMapper.entityToDto(value.economicSector),
    };
  }

}