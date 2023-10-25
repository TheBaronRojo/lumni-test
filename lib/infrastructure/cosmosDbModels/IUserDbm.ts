
export type UserDbmRole = "student" | "staff";

interface IUserDbm {
  id: string;
  roles: UserDbmRole[];
  emailConfirmedAt: number | null;
  email: string | null;
  passwordHash: string | null;
  personId: string | null;
}

export default IUserDbm;
