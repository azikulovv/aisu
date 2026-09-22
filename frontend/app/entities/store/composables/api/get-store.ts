import { api } from "~/shared/api/client";
import { mapDelivery } from "~/entities/delivery/domain/mapper";
import type {
  IGetStoreByIdAndUserIdResponse,
  IGetStoreByIdAndUserIdResponseDto,
} from "./types";

export const getStore = async (
  storeId: string,
): Promise<IGetStoreByIdAndUserIdResponse> => {
  const response = await api.get<IGetStoreByIdAndUserIdResponseDto>(
    `/store/${storeId}`,
  );

  const store = response.data.store;

  return {
    store: {
      id: store.id,
      name: store.name,
      location: store.location,
      deliveriesCount: store.deliveries.length,
      productsCount: 0,
      deliveries: store.deliveries.map(mapDelivery),
    },
  } satisfies IGetStoreByIdAndUserIdResponse;
};
