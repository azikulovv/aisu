import { Request, Response } from "express";
import { StoreService } from "./store.service";

export class StoreController {
  constructor(private readonly storeService: StoreService) {}

  getStores = async (_req: Request, res: Response) => {
    const stores = await this.storeService.getAllStores();

    res.json({ stores });
  };

  getStore = async (req: Request, res: Response) => {
    const targetStoreId = req.params.id as string;

    const store = await this.storeService.getStoreById(targetStoreId);

    res.json({ store });
  };
}
