import { ISessionDataDto } from "./ISessionDataDto";

export interface ISessionDataWithTokenDto extends ISessionDataDto {
  token: string;
}
