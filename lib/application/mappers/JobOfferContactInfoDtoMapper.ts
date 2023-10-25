import { singleton } from "tsyringe";
import IJobOfferContactInfoDto from "../models/IJobOfferContactInfoDto";
import JobOfferContactInfo from "@domain/models/JobOfferContactInfo";

@singleton()
class JobOfferContactInfoDtoMapper {

  valueToDto(value: JobOfferContactInfo): IJobOfferContactInfoDto {
    return {
      personId: value.personId,
      fullName: value.fullName,
      cellphonePrefix: value.cellphonePrefix,
      cellphoneNumber: value.cellphoneNumber,
      email: value.email
    };
  }

}

export default JobOfferContactInfoDtoMapper;
