import { mapDelivery } from "~/entities/delivery/domain/mapper";
import { api } from "~/shared/api/client";
import { mapStore } from "../model/mapper";
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
      ...mapStore(store),
      deliveries: store.deliveries.map(mapDelivery),
    },
  } satisfies IGetStoreByIdAndUserIdResponse;
};
