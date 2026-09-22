import { authenticate } from "@app/common/middleware/auth";
import { validate } from "@app/common/utils/validate";
import express, { type Router } from "express";
import { controller } from "./store.container";
import { createStoreSchema } from "./store.schemas";

export const storeRouter: Router = express.Router();

storeRouter.get("/", authenticate, controller.getStores);
storeRouter.get("/:id", authenticate, controller.getStore);
storeRouter.post(
  "/",
  authenticate,
  validate({ body: createStoreSchema }),
  controller.create,
);
