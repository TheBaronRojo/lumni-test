// import IdentificationInfo, { PersonDocumentType } from "@common/services/domain/models/IdentificationInfo";
import IdentificationInfo from "@domain/models/IdentificationInfo";
import IIdentificationInfoDbm from "../cosmosDbModels/IIdentificationInfoDbm";

export default class IdentificationInfoDbmMapper {

  dbmToValue(dbm: IIdentificationInfoDbm): IdentificationInfo {
    return new IdentificationInfo(
      dbm.personId,
      new Date(dbm.createdAt),
      new Date(dbm.updatedAt),
      dbm.firstName,
      dbm.middleName,
      dbm.lastName,
      // (() => {
      //   switch (dbm.documentType) {
      //     case "colombian_cc":
      //       return PersonDocumentType.COLOMBIAN_CC;
      //     case "colombian_ti":
      //       return PersonDocumentType.COLOMBIAN_TI;
      //     case "passport":
      //       return PersonDocumentType.PASSPORT;
      //     case null:
      //       return null;
      //     default:
      //       throw new Error(`invalid Person document type in person with id: ${dbm.personId}`)
      //   }
      // })(),
      dbm.identificationNumber,
    );
  }

  valueToDbm(value: IdentificationInfo): IIdentificationInfoDbm {
    return {
      personId: value.personId,
      createdAt: value.createdAt.getTime(),
      updatedAt: value.updatedAt.getTime(),
      firstName: value.firstName,
      middleName: value.middleName,
      lastName: value.lastName,
      // documentType: (() => {
      //   switch (value.documentType) {
      //     case PersonDocumentType.COLOMBIAN_CC:
      //       return "colombian_cc";
      //     case PersonDocumentType.COLOMBIAN_TI:
      //       return "colombian_ti";
      //     case PersonDocumentType.PASSPORT:
      //       return "passport";
      //     case null:
      //       return null;
      //   }
      // })(),
      identificationNumber: value.identificationNumber,
    }
  }
}
