import { authenticate } from "@app/common/middleware/auth";
import { validate } from "@app/common/utils/validate";
import { pool } from "@app/infrastructure/db";
import express, { type Router } from "express";
import { DeliveryController } from "./delivery.controller";
import { DeliveryRepository } from "./delivery.repository";
import { DeliveryService } from "./delivery.service";
import {
  createDeliverySchema,
  updateDeliveryPaymentSchema,
} from "./delivery.schemas";

export const deliveryRouter: Router = express.Router();
const repository = new DeliveryRepository(pool);
const service = new DeliveryService(repository);
const controller = new DeliveryController(service);

deliveryRouter.get("/", authenticate, controller.getDeliveries);
deliveryRouter.patch(
  "/:id/payment",
  authenticate,
  validate({ body: updateDeliveryPaymentSchema }),
  controller.updatePayment,
);
deliveryRouter.get("/:id", authenticate, controller.getDelivery);
deliveryRouter.post(
  "/",
  authenticate,
  validate({ body: createDeliverySchema }),
  controller.create,
);
