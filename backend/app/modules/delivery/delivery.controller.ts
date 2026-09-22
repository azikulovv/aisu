import { notFound } from "@app/common/errors/app-error";
import type { Request, Response } from "express";
import type {
  ICreateDeliveryRequest,
  IUpdateDeliveryPaymentRequest,
} from "./delivery.interface";
import type { DeliveryService } from "./delivery.service";

export class DeliveryController {
  constructor(private readonly deliveryService: DeliveryService) {}

  getDeliveries = async (req: Request, res: Response) => {
    const userId = req.user.userId;

    const deliveries = await this.deliveryService.getAllByUserId(userId);

    res.json({ deliveries });
  };

  getDelivery = async (
    req: Request<{ id: string }>,
    res: Response,
  ) => {
    const delivery = await this.deliveryService.getByIdAndUserId(
      req.params.id,
      req.user.userId,
    );

    if (!delivery) {
      throw notFound("Доставка не найдена");
    }

    res.json({ delivery });
  };

  create = async (
    req: Request<Record<string, never>, unknown, ICreateDeliveryRequest>,
    res: Response,
  ) => {
    const delivery = await this.deliveryService.create({
      user_id: req.user.userId,
      store_id: req.body.storeId,
      product_name: req.body.productName,
      quantity: req.body.quantity,
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

  updatePayment = async (
    req: Request<
      { id: string },
      unknown,
      IUpdateDeliveryPaymentRequest
    >,
    res: Response,
  ) => {
    const delivery = await this.deliveryService.updatePayment(
      req.params.id,
      req.user.userId,
      req.body.isPaid,
    );

    if (!delivery) {
      throw notFound("Доставка не найдена");
    }

    res.json({ delivery });
  };
}
