import type {
  ICreateStoreResponse,
  ICreateStoreResponseDto,
  StoreDto,
} from "../api/types";
import type { Store } from "./types";

export const mapStore = (data: StoreDto): Store => ({
  id: data.id,
  name: data.name,
  location: data.location,
  deliveriesCount: data.deliveries_count,
  productsCount: data.products_count,
});

export const mapCreateStore = (
  data: ICreateStoreResponseDto,
): ICreateStoreResponse => {
  return {
    message: data.message,
    store: {
      id: data.store.id,
      name: data.store.name,
      location: data.store.location,
      createdAt: data.store.created_at,
      updatedAt: data.store.updated_at,
    },
  };
};
