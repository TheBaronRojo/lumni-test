import IsaEntity from "./IsaEntity";

export default class FundingInfo {
  constructor(
    public readonly personId: string,
    public readonly activeIsa: IsaEntity,
  ){}
}
