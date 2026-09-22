import { DeliveryRepository } from "../delivery/delivery.repository";
import { ICreateStoreDto, IStore, IStoreItem } from "./store.interface";
import { StoreRepository } from "./store.repository";

export class StoreService {
  constructor(
    private readonly storeRepository: StoreRepository,
    private readonly deliveryRepository: DeliveryRepository,
  ) {}

  async getAllByUserId(userId: string): Promise<IStore[]> {
    return await this.storeRepository.findAllByUserId(userId);
  }

  async getByIdAndUserId(
    targetStoreId: string,
    userId: string,
  ): Promise<IStoreItem | null> {
    const store = await this.storeRepository.findByIdAndUserId(
      targetStoreId,
      userId,
    );

    const deliveries = await this.deliveryRepository.findAllByStoreIdAndUserId(
      targetStoreId,
      userId,
    );

    if (!store) return null;

    return {
      ...store,
      deliveries,
    };
  }

  async create(dto: ICreateStoreDto): Promise<IStore> {
    return await this.storeRepository.create(dto);
  }
}
