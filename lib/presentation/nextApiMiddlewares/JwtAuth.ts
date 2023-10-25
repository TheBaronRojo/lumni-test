import { resolveClass } from "@container";
import { createMiddlewareDecorator, NextFunction, UnauthorizedException } from "@storyofams/next-api-decorators";
import { NextApiRequest, NextApiResponse } from "next";
import { createParamDecorator } from "@storyofams/next-api-decorators";
import SessionSignServices from "../SessionSignServices";
import type IAuthorizationDataDto from "@application/models/IAuthorizationDataDto";

export const JwtAuthGuard = createMiddlewareDecorator(
  async (req: NextApiRequest, res: NextApiResponse, next: NextFunction) => {

    const authorization = req.headers["Authorization"] ?? req.headers["authorization"];

    if (typeof authorization != "string")
      throw new UnauthorizedException("Invalid authorization Header");

    const [type, token] = authorization.split(" ").filter(x => x != "");
    if ((type !== "bearer" && type !== "Bearer") || (typeof token !== "string"))
      throw new UnauthorizedException("Invalid authorization Header");

    const sessionSignServices = resolveClass(SessionSignServices);

    try {
      const authInfo = await sessionSignServices.validateAuthorizationToken(token);
      (req as any).__MyAuthInfo__ = authInfo;
      next();
    } catch (e) {
      console.error(e);
      throw new UnauthorizedException("Not authorized token");
    }
  }
);

export const JwtAuth = createMiddlewareDecorator(
  async (req: NextApiRequest, res: NextApiResponse, next: NextFunction) => {

    const authorization = req.headers["Authorization"] ?? req.headers["authorization"];

    if (typeof authorization != "string") return next();

    const [type, token] = authorization.split(" ").filter(x => x != "");
    if ((type !== "bearer" && type !== "Bearer") || (typeof token !== "string")) return next();

    const sessionSignServices = resolveClass(SessionSignServices);

    try {
      const authInfo = await sessionSignServices.validateAuthorizationToken(token);
      (req as any).__MyAuthInfo__ = authInfo;
      next();
    } catch (e) {
      console.error(e);
      throw new UnauthorizedException("Not authorized token");
    }
  }
);


export const AuthInfo = createParamDecorator<IAuthorizationDataDto | null>(
  req => (req as any).__MyAuthInfo__
);
