import { notFound } from "@app/common/errors/app-error";
import type { Request, Response } from "express";
import type { ICreateStoreRequest } from "./store.interface";
import { StoreService } from "./store.service";

export class StoreController {
  constructor(private readonly storeService: StoreService) {}

  getStores = async (req: Request, res: Response) => {
    const userId = req.user.userId;

    const stores = await this.storeService.getAllByUserId(userId);

    res.json({ stores });
  };

  getStore = async (req: Request<{ id: string }>, res: Response) => {
    const store = await this.storeService.getByIdAndUserId(
      req.params.id,
      req.user.userId,
    );

    if (!store) {
      throw notFound("Магазин не найден");
    }

    res.json({ store });
  };

  create = async (
    req: Request<Record<string, never>, unknown, ICreateStoreRequest>,
    res: Response,
  ) => {
    const createdStore = await this.storeService.create({
      ...req.body,
      user_id: req.user.userId,
    });

    res.status(201).json({
      message: "Магазин успешно создан!",
      store: createdStore,
    });
  };
}
