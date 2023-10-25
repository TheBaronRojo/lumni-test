import { createMiddlewareDecorator, createParamDecorator, NextFunction, UnauthorizedException } from "@storyofams/next-api-decorators";
import { NextApiRequest, NextApiResponse } from "next";
import multer from "multer";

const storage = multer.memoryStorage()
const upload = multer({ 
  storage,
  limits: { fileSize: 6291456 }
  })

export const UploadFiles = createMiddlewareDecorator(
  (req: NextApiRequest, res: NextApiResponse, next: NextFunction) => {
    upload.any()(req as any, res as any, next as any);
  }
);

export const AllFiles = createParamDecorator<UploadedFile[]>(
  req => { 
    return (req as any).files
  }
);

export interface UploadedFile {
  fieldname: string;
  originalname: string;
  mimetype: string;
  buffer: Buffer;
  size: number;
}
