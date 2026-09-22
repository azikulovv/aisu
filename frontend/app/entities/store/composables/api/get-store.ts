import { api } from "~/shared/api/client";
import type { IGetStoreByIdAndUserIdResponse } from "./types";

export const getStore = async (
  storeId: string,
): Promise<IGetStoreByIdAndUserIdResponse> => {
  const response = await api.get<IGetStoreByIdAndUserIdResponse>(
    `/store/${storeId}`,
  );
  return response.data;
};
