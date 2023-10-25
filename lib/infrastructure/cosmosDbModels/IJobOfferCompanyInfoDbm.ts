import IEconomicSectorDbm from "./IEconomicSectorDbm";

interface IJobOfferCompanyInfoDbm {
  companyId: string | null;
  name: string;
  economicSector?: IEconomicSectorDbm | null;
}

export default IJobOfferCompanyInfoDbm;
