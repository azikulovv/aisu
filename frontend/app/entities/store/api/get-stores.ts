import { api } from "~/shared/api/client";
import { mapStore } from "../model/mapper";
import type {
  IGetStoresByUserIdResponse,
  IGetStoresByUserIdResponseDto,
} from "./types";

export const getStores = async (): Promise<IGetStoresByUserIdResponse> => {
  const response = await api.get<IGetStoresByUserIdResponseDto>("/store");

  return {
    stores: response.data.stores.map(mapStore),
  };
};
