import EconomicSectorEntity from "./EconomicSectorEntity";

class JobOfferCompanyInfo {

  constructor(
    public readonly companyId: string | null,
    public readonly name: string,
    public readonly economicSector: EconomicSectorEntity | null,
  ) { }
}

export default JobOfferCompanyInfo;
