import express, { type Router } from "express";
import { controller } from "./auth.container";

export const authRouter: Router = express.Router();

authRouter.post("/signup", controller.signup);
