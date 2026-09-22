import { DeliveryRepository } from "../delivery/delivery.repository";
import type {
  ICreateStoreDto,
  IStore,
  IStoreItem,
  IStoreSummary,
} from "./store.interface";
import { StoreRepository } from "./store.repository";

export class StoreService {
  constructor(
    private readonly storeRepository: StoreRepository,
    private readonly deliveryRepository: DeliveryRepository,
  ) {}

  async getAllByUserId(userId: string): Promise<IStoreSummary[]> {
    return this.storeRepository.findAllByUserId(userId);
  }

  async getByIdAndUserId(
    targetStoreId: string,
    userId: string,
  ): Promise<IStoreItem | null> {
    const store = await this.storeRepository.findByIdAndUserId(
      targetStoreId,
      userId,
    );

    if (!store) return null;

    const deliveries = await this.deliveryRepository.findAllByStoreIdAndUserId(
      targetStoreId,
      userId,
    );

    return {
      ...store,
      deliveries,
    };
  }

  async create(dto: ICreateStoreDto): Promise<IStore> {
    return this.storeRepository.create(dto);
  }
}
