import type { NextFunction, Request, Response } from "express";
import * as v from "valibot";

type Schemas = {
  body?: v.GenericSchema;
  query?: v.GenericSchema;
  params?: v.GenericSchema;
};

export const validate =
  (schemas: Schemas) => (req: Request, _res: Response, next: NextFunction) => {
    if (schemas.body) {
      req.body = v.parse(schemas.body, req.body);
    }

    if (schemas.query) {
      req.query = v.parse(schemas.query, req.query) as Request["query"];
    }

    if (schemas.params) {
      req.params = v.parse(schemas.params, req.params) as Request["params"];
    }

    next();
  };
