import type { NextFunction, Request, Response } from "express";
import { unauthorized } from "../errors/app-error";
import { verifyAccessToken, type JwtPayload } from "../utils/jose";

declare global {
  namespace Express {
    interface Request {
      user: JwtPayload;
    }
  }
}

export const authenticate = async (
  req: Request,
  _res: Response,
  next: NextFunction,
): Promise<void> => {
  const header = req.headers.authorization;
  const token = header?.startsWith("Bearer ") ? header.slice(7) : undefined;

  if (!token) throw unauthorized("Токен авторизации не передан!");

  try {
    req.user = await verifyAccessToken(token);
    next();
  } catch {
    throw unauthorized("Недействительный или просроченный токен!");
  }
};
