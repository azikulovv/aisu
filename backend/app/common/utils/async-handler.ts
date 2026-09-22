import type { NextFunction, Request, Response } from "express";

type Handler<TRequest extends Request = Request> = (
  req: TRequest,
  res: Response,
  next: NextFunction,
) => Promise<unknown>;

export const asyncHandler = <TRequest extends Request>(
  handler: Handler<TRequest>,
) =>
  (req: Request, res: Response, next: NextFunction): void => {
    void handler(req as TRequest, res, next).catch(next);
  };
