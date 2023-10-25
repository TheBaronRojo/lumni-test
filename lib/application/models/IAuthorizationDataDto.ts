import UserRole from "@domain/models/UserRole";

interface IAuthorizationDataDto {
  userId: string;
  roles: UserRole[];
  expiration: string;
  personId: string | null;
}

export default IAuthorizationDataDto;
