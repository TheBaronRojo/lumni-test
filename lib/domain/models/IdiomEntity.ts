export default class IdiomEntity {
  constructor(
    public readonly id: string,
    public readonly isoCode: string, // ISO 639-1
    public readonly isSelectableForEmploymentProfile: boolean,
    public readonly name: string,
  ) { }
}
