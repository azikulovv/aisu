import { ICreateStoreDto, IStore } from "./store.interface";
import { StoreRepository } from "./store.repository";

export class StoreService {
  constructor(private readonly storeRepository: StoreRepository) {}

  async getAllStoresByUserId(userId: string): Promise<IStore[]> {
    return await this.storeRepository.findAllByUserId(userId);
  }

  async getStoreById(targetStoreId: string): Promise<IStore | null> {
    return await this.storeRepository.findById(targetStoreId);
  }

  async createStore(dto: ICreateStoreDto): Promise<IStore> {
    return await this.storeRepository.create(dto);
  }
}
