
export default class CurrencyEntity {
  constructor(
    public readonly id: string,
    public readonly isoCode: string,     // ISO 4217
    public readonly isSelectableForEmploymentProfile: boolean,
    public readonly name: string,
  ) { }
}
