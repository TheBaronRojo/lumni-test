import "@container";
import * as exceptions from "@storyofams/next-api-decorators/dist/exceptions";
import { createMiddlewareDecorator, NextFunction } from "@storyofams/next-api-decorators";
import { NextApiRequest, NextApiResponse } from "next";


export const LogRequests = createMiddlewareDecorator(
  async (req: NextApiRequest, res: NextApiResponse, next: NextFunction) => {
    // TODO: implement
  
  
    next();
  }
);

export function logExceptions(
  exception: any,
  req: NextApiRequest,
  res: NextApiResponse
) {

  // // TODO: implement



  var _a;
  const statusCode = exception instanceof exceptions.HttpException ? exception.statusCode : 500;
  const message = exception instanceof exceptions.HttpException ? exception.message : 'An unknown error occurred.';
  const errors = exception instanceof exceptions.HttpException && ((_a = exception.errors) === null || _a === void 0 ? void 0 : _a.length) ? exception.errors : [message];
  res.status(statusCode).json({
    statusCode,
    message,
    errors,
    stack: exception instanceof Error && process.env.NODE_ENV === 'development' ? exception.stack : undefined
  });
}
