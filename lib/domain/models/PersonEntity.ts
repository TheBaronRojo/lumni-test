import EmploymentInfo from "./EmploymentInfo";
import Entity from "./Entity";
import IdentificationInfo from "./IdentificationInfo";

export default class PersonEntity extends Entity<PersonEntity> {

  static factory(id: string): PersonEntity {
    return new PersonEntity(
      id,
      new Date(),
      new Date(),
      null,
      null,
      null,
    );
  }

  constructor(
    public readonly id: string,
    public readonly createdAt: Date,
    public readonly updatedAt: Date,
    public readonly discardedAt: Date | null,
    public readonly employmentInfo: EmploymentInfo | null,
    public readonly identificationInfo: IdentificationInfo | null,
  ) {
    super(id, createdAt, updatedAt, discardedAt);
  }

  deleteEmploymentInfo() {
    this.mutable().employmentInfo = null;
  }
}
