export default interface IIdentificationInfoDbm {
  personId: string;
  createdAt: number;
  updatedAt: number;
  firstName: string;
  middleName: string | null;
  lastName: string;
  // documentType: "passport" | "colombian_cc" | "colombian_ti" | null;
  identificationNumber: string | null;
}
