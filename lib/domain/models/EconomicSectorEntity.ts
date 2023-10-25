export default class EconomicSectorEntity {
  constructor(
    public readonly id: string,
    public readonly normalizedName: string,
    public readonly isSelectableForEmploymentProfile: boolean,
    public readonly name: string,
  ) { }
}
