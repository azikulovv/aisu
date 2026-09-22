import { Request, Response } from "express";
import type { DeliveryService } from "./delivery.service";

export class DeliveryController {
  constructor(private readonly deliveryService: DeliveryService) {}

  getDeliveries = async (req: Request, res: Response) => {
    const userId = req.user.userId as string;

    const deliveries = await this.deliveryService.getAllByUserId(userId);

    res.json({ deliveries });
  };
}
