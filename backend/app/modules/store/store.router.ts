import express, { type Router } from "express";
import { controller } from "./store.container";

export const storeRouter: Router = express.Router();

storeRouter.get("/", controller.getStores);
storeRouter.get("/:id", controller.getStore);
