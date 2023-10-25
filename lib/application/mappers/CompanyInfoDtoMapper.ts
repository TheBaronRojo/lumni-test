import JobOfferCompanyInfo from "@domain/models/JobOfferCompanyInfo";
import ICompanyInfoDto from "../models/ICompanyInfoDto";
import { singleton } from "tsyringe";

@singleton()
class CompanyInfoDtoMapper {

  valueToDto(value: JobOfferCompanyInfo): ICompanyInfoDto {
    return {
      id: value.companyId,
      name: value.name,
    };
  }

}

export default CompanyInfoDtoMapper;
