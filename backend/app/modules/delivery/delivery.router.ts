import { authenticate } from "@app/common/middleware/auth";
import { pool } from "@app/infrastructure/db";
import express, { type Router } from "express";
import { DeliveryController } from "./delivery.controller";
import { DeliveryRepository } from "./delivery.repository";
import { DeliveryService } from "./delivery.service";

export const deliveryRouter: Router = express.Router();
const repository = new DeliveryRepository(pool);
const service = new DeliveryService(repository);
const controller = new DeliveryController(service);

deliveryRouter.get("/", authenticate, controller.getDeliveries);
