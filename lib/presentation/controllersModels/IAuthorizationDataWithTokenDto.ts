import IAuthorizationDataDto from "@application/models/IAuthorizationDataDto";

interface IAuthorizationDataWithTokenDto extends IAuthorizationDataDto {
  token: string;
}

export default IAuthorizationDataWithTokenDto;
