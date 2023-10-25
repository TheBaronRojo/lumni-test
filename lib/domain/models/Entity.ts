import { BussinessError } from "@domain/errors";
import { validateDateProperty, validateIdProperty } from "@domain/validation/propertyValidators";

export type MutableEntity<T> = { -readonly [P in keyof T]: T[P] };

export interface IEntityProps {
  readonly id: string;
  readonly createdAt: Date;
  readonly updatedAt: Date;
  readonly discardedAt: Date | null;
}

export default class Entity<T extends IEntityProps> implements IEntityProps {

  private _wasMutated = false;
  private _isNew = false;

  constructor(
    public readonly id: string,
    public readonly createdAt: Date,
    public readonly updatedAt: Date,
    public readonly discardedAt: Date | null,
  ) { }

  setAsNew() {
    this._isNew = true;
  }

  wasMutated(): boolean {
    return this._wasMutated;
  }

  isNew(): boolean {
    return this._isNew;
  }

  protected mutable(): MutableEntity<T> {
    if (this.discardedAt !== null) {
      throw new BussinessError(`Discarded  ${this.constructor.name} can't be modified`);
    }
    this._wasMutated = true;
    (this as MutableEntity<IEntityProps>).updatedAt = new Date();
    return this as any;
  }

  discard() {
    if (this.isDiscarded()) {
      throw new BussinessError(`${this.constructor.name} with id ${this.id} is already discarded`);
    }
    (this as MutableEntity<IEntityProps>).discardedAt = new Date();
    this._wasMutated = true;
  }

  isDiscarded(): boolean {
    return this.discardedAt !== null;
  }

  undoDiscard() {
    if (!this.isDiscarded()) {
      throw new BussinessError(`${this.constructor.name} with id ${this.id} is not discarded`);
    }
    (this as MutableEntity<IEntityProps>).discardedAt = null;
    this._wasMutated = true;
  }

  validate() {
    validateIdProperty(this, "id");
    validateDateProperty(this, "createdAt");
    validateDateProperty(this, "updatedAt");
    validateDateProperty(this, "discardedAt", { nullable: true });
  }

}
