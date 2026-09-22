import { authenticate } from "@app/common/middleware/auth";
import { validate } from "@app/common/utils/validate";
import express, { type Router } from "express";
import { controller } from "./stores.container";
import { createStoreSchema } from "./stores.schemas";

export const storeRouter: Router = express.Router();

storeRouter.get("/", authenticate, controller.getStoresByUserId);
storeRouter.get("/:id", authenticate, controller.getStoreByUserId);
storeRouter.post(
  "/",
  authenticate,
  validate({ body: createStoreSchema }),
  controller.createStore,
);
