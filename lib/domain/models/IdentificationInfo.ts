// export const enum PersonDocumentType {
//   PASSPORT,
//   COLOMBIAN_CC,
//   COLOMBIAN_TI,  
// }

export default class IdentificationInfo {
  constructor(
    public readonly personId: string,
    public readonly createdAt: Date,
    public readonly updatedAt: Date,
    public readonly firstName: string,
    public readonly middleName: string | null,
    public readonly lastName: string,
    // public documentType: PersonDocumentType | null,
    public identificationNumber: string | null,
  ) { }

  fullName(): string {
    return [
      this.firstName,
      this.middleName,
      this.lastName,
    ]
      .filter(x => x != null && x.length > 0)
      .join(" ");
  }
}
