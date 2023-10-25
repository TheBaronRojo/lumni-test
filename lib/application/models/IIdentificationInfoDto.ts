export default interface IIdentificationInfoDto {
  personId: string;
  createdAt: string;
  updatedAt: string;
  firstName: string;
  middleName: string | null;
  lastName: string;
  // documentType: ;
  identificationNumber: string | null;
}