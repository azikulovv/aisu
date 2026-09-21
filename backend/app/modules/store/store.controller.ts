import { Request, Response } from "express";
import { StoreService } from "./store.service";

export class StoreController {
  constructor(private readonly storeService: StoreService) {}

  getStores = async (req: Request, res: Response) => {
    const stores = await this.storeService.getStores();

    res.json({ stores });
  };
}
