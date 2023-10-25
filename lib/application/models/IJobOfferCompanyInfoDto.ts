import IEconomicSectorDto from "./IEconomicSectorDto";

export default interface IJobOfferCompanyInfoDto {
  companyId: string | null;
  name: string;
  economicSector: IEconomicSectorDto | null;
}
