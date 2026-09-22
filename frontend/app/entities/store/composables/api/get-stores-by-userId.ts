import { api } from "~/shared/api/client";
import type { IGetStoresByUserIdResponse } from "./types";

export const getStoresByUserId =
  async (): Promise<IGetStoresByUserIdResponse> => {
    const response = await api.get<IGetStoresByUserIdResponse>("/stores");
    return response.data;
  };
