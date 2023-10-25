import bcrypt from "bcrypt";
import UserRole from "./UserRole";

class UserEntity {

  static factory(id: string): UserEntity {
    return new UserEntity(id, [], null, null, null, null);
  }

  constructor(
    public readonly id: string,
    public readonly roles: UserRole[],
    public readonly emailConfirmedAt: Date | null,
    public readonly email: string | null,
    public readonly passwordHash: string | null,
    public readonly personId: string | null,
  ) {

  }

  public hasConfirmedEmail() {
    return this.emailConfirmedAt !== null;
  }

  public async validatePassword(password: string): Promise<boolean> {
    if (this.passwordHash === null) return false;
    const isValidPassword = await bcrypt.compare(password, this.passwordHash);
    return isValidPassword;
  }
}

export default UserEntity;
