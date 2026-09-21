import { IStore } from "./store.interface";
import { StoreRepository } from "./store.repository";

export class StoreService {
  constructor(private readonly storeRepository: StoreRepository) {}

  async getStores(): Promise<IStore[]> {
    return await this.storeRepository.findAll();
  }
}
