import { api } from "~/shared/api/client";
import type { IGetStoreByIdAndUserIdResponse } from "./types";

export const getStoreByUserIdAndUserId = async (
  storeId: string,
): Promise<IGetStoreByIdAndUserIdResponse> => {
  const response = await api.get<IGetStoreByIdAndUserIdResponse>(
    `/stores/${storeId}`,
  );
  return response.data;
};
