import { singleton } from "tsyringe";
import IAuthorizationDataDto from "@application/models/IAuthorizationDataDto";
import IAuthorizationDataWithTokenDto from "./controllersModels/IAuthorizationDataWithTokenDto";
import * as jsonwebtoken from "jsonwebtoken";
import { ISessionDataDto } from "./controllersModels/ISessionDataDto";
import { ISessionDataWithTokenDto } from "./controllersModels/ISessionDataWithTokenDto";

@singleton()
class SessionSignServices {

  private secretKey: string;

  constructor() {
    this.secretKey = 'dummy-secret-key';
  }

  async signAuthorization(authorization: IAuthorizationDataDto): Promise<IAuthorizationDataWithTokenDto> {
    const tokenInfo = {
      userId: authorization.userId,
      roles: authorization.roles,
      personId: authorization.personId ?? undefined,
    };

    const token = jsonwebtoken.sign(tokenInfo, this.secretKey, {
      expiresIn: this.calculateSecondsBeforeExpiration(authorization.expiration),
    });

    return {
      ...authorization,
      token
    };
  }

  async signSession(session: ISessionDataDto): Promise<ISessionDataWithTokenDto> {
    const tokenInfo = {
      userId: session.userId,
    };

    const token = jsonwebtoken.sign(tokenInfo, this.secretKey, {
      expiresIn: this.calculateSecondsBeforeExpiration(session.expiration),
    });

    return {
      ...session,
      token
    };
  }

  async validateAuthorizationToken(token: string): Promise<IAuthorizationDataDto> {
    const payload = jsonwebtoken.verify(token, this.secretKey) as any;
    return {
      userId: payload.userId,
      roles: payload.roles,
      personId: payload.personId ?? null,
      expiration: new Date(payload.exp * 1000).toISOString(),
    };
  }

  async validateSessionToken(token: string): Promise<ISessionDataDto> {
    const payload = jsonwebtoken.verify(token, this.secretKey) as any;
    return {
      userId: payload.userId,
      expiration: new Date(payload.exp * 1000).toISOString(),
    };
  }

  // private

  calculateSecondsBeforeExpiration(expiration: string | Date): number {
    return Math.floor((new Date(expiration).getTime() - new Date().getTime()) / 1000);
  }

}

export default SessionSignServices;

