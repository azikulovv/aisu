import { asyncHandler } from "@app/common/utils/async-handler";
import { validate } from "@app/common/utils/validate";
import express, { type Router } from "express";
import { controller } from "./auth.container";
import { signUpSchema } from "./auth.schema";

export const authRouter: Router = express.Router();

authRouter.post(
  "/signup",
  validate({ body: signUpSchema }),
  asyncHandler(controller.signup),
);
