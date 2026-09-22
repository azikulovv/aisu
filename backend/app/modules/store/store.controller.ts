import { Request, Response } from "express";
import { StoreService } from "./store.service";

export class StoreController {
  constructor(private readonly storeService: StoreService) {}

  getStores = async (req: Request, res: Response) => {
    const userId = req.user.userId;

    const stores = await this.storeService.getAllByUserId(userId);

    res.json({ stores });
  };

  getStore = async (req: Request, res: Response) => {
    const userId = req.user.userId;
    const targetStoreId = req.params.id as string;

    const store = await this.storeService.getByIdAndUserId(
      targetStoreId,
      userId,
    );

    res.json({ store });
  };

  create = async (req: Request, res: Response) => {
    const payload = req.body;

    const createdStore = await this.storeService.create({
      ...payload,
      user_id: req.user.userId,
    });

    res.status(201).json({
      message: "Магазин успешно создан!",
      store: createdStore,
    });
  };
}
