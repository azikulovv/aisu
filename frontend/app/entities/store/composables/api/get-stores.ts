import { api } from "~/shared/api/client";
import type { IGetStoresByUserIdResponse } from "./types";

export const getStores = async (): Promise<IGetStoresByUserIdResponse> => {
  const response = await api.get<IGetStoresByUserIdResponse>("/store");
  return response.data;
};
