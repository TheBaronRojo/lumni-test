// import IdentificationInfo, { PersonDocumentType } from "@common/services/domain/models/IdentificationInfo";

import IdentificationInfo from "@domain/models/IdentificationInfo";
import { singleton } from "tsyringe";
import IIdentificationInfoDto from "../models/IIdentificationInfoDto";

@singleton()
export default class IdentificationInfoDtoMapper {
  constructor() { }

  valueToDto(value: IdentificationInfo): IIdentificationInfoDto {
    return {
      firstName: value.firstName,
      createdAt: value.createdAt.toISOString(),
      updatedAt: value.createdAt.toISOString(),
      middleName: value.middleName,
      lastName: value.lastName,
      personId: value.personId,
      // documentType: 
      identificationNumber: value.identificationNumber,
    }
  }
}