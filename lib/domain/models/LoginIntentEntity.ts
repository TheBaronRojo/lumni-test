import Entity from "./Entity";
import UserEntity from "./UserEntity";

export type LoginIntentEntityFactoryRequest = {
  user: UserEntity,
  wasSuccess: boolean,
};

export default class LoginIntentEntity extends Entity<LoginIntentEntity> {

  static factory(id: string, request: LoginIntentEntityFactoryRequest): LoginIntentEntity {
    const entity = new LoginIntentEntity(
      id,
      new Date(),
      new Date(),
      null,
      request.user.id,
      request.wasSuccess,
    );
    entity.validate();
    entity.setAsNew();
    return entity;
  }

  constructor(
    id: string,
    createdAt: Date,
    updatedAt: Date,
    discardedAt: Date | null,
    public readonly userId: string,
    public readonly wasSuccess: boolean
  ) {
    super(id, createdAt, updatedAt, discardedAt);
  }

  setAsSuccess() {
    this.mutable().wasSuccess = true;
  }

  override validate(): void {
    super.validate();
    // TODO: Add validations
  }
}
