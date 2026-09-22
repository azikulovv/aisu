import { DeliveriesRepository } from "../deliveries/deliveries.repository";
import { ICreateStoreDto, IStore, IStoreItem } from "./stores.interface";
import { StoreRepository } from "./stores.repository";

export class StoreService {
  constructor(
    private readonly storeRepository: StoreRepository,
    private readonly deliveriesRepository: DeliveriesRepository,
  ) {}

  async getAllStoresByUserId(userId: string): Promise<IStore[]> {
    return await this.storeRepository.findAllByUserId(userId);
  }

  async getStoreByIdAndUserId(
    targetStoreId: string,
    userId: string,
  ): Promise<IStoreItem | null> {
    const store = await this.storeRepository.findByIdAndUserId(
      targetStoreId,
      userId,
    );

    const deliveries =
      await this.deliveriesRepository.findAllByStoreId(targetStoreId);

    if (!store) return null;

    return {
      ...store,
      deliveries,
    };
  }

  async createStore(dto: ICreateStoreDto): Promise<IStore> {
    return await this.storeRepository.create(dto);
  }
}
