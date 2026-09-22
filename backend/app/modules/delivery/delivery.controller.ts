import { notFound } from "@app/common/errors/app-error";
import type { Request, Response } from "express";
import type { ICreateDeliveryRequest } from "./delivery.interface";
import type { DeliveryService } from "./delivery.service";

export class DeliveryController {
  constructor(private readonly deliveryService: DeliveryService) {}

  getDeliveries = async (req: Request, res: Response) => {
    const userId = req.user.userId;

    const deliveries = await this.deliveryService.getAllByUserId(userId);

    res.json({ deliveries });
  };

  create = async (
    req: Request<Record<string, never>, unknown, ICreateDeliveryRequest>,
    res: Response,
  ) => {
    const delivery = await this.deliveryService.create({
      user_id: req.user.userId,
      store_id: req.body.storeId,
      product_name: req.body.productName,
      is_paid: req.body.isPaid,
    });

    if (!delivery) {
      throw notFound("Магазин не найден");
    }

    res.status(201).json({
      message: "Доставка успешно создана!",
      delivery,
    });
  };
}
