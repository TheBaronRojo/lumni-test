import bcrypt from "bcrypt";
import Entity from "./Entity";
import UserEntity from "./UserEntity";

export type OneTimePasswordEntityFactoryRequest = {
  user: UserEntity,
  password: string,
};


export default class OneTimePasswordEntity extends Entity<OneTimePasswordEntity> {

  static EXPIRATION_MINUTES = 5;

  static factory(
    id: string,
    request: OneTimePasswordEntityFactoryRequest
  ): OneTimePasswordEntity {

    const passwordHash = bcrypt.hashSync(request.password, 10);
    const expiresAt = new Date();
    expiresAt.setMinutes(expiresAt.getMinutes() + OneTimePasswordEntity.EXPIRATION_MINUTES);

    return new OneTimePasswordEntity(
      id,
      new Date(),
      new Date(),
      null,
      request.user.id,
      passwordHash,
      expiresAt,
    );
  }

  constructor(
    id: string,
    createdAt: Date,
    updatedAt: Date,
    discardedAt: Date | null,
    public readonly userId: string,
    public readonly passwordHash: string,
    public readonly expiresAt: Date,
  ) {
    super(id, createdAt, updatedAt, discardedAt);
  }

  isExpired(): boolean {
    return new Date() > this.expiresAt;
  }

  public async validatePassword(password: string): Promise<boolean> {
    const isValidPassword = await bcrypt.compare(password, this.passwordHash);
    return isValidPassword;
  }
}
