import { Request, Response } from "express";
import { StoreService } from "./stores.service";

export class StoreController {
  constructor(private readonly storeService: StoreService) {}

  getStoresByUserId = async (req: Request, res: Response) => {
    const userId = req.user.userId;

    const stores = await this.storeService.getAllStoresByUserId(userId);

    res.json({ stores });
  };

  getStoreByUserId = async (req: Request, res: Response) => {
    const userId = req.user.userId;
    const targetStoreId = req.params.id as string;

    const store = await this.storeService.getStoreByIdAndUserId(
      targetStoreId,
      userId,
    );

    res.json({ store });
  };

  createStore = async (req: Request, res: Response) => {
    const payload = req.body;

    const createdStore = await this.storeService.createStore({
      ...payload,
      user_id: req.user.userId,
    });

    res.status(201).json({
      message: "Магазин успешно создан!",
      store: createdStore,
    });
  };
}
