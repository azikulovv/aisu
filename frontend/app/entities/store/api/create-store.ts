import { api } from "~/shared/api/client";
import { mapCreateStore } from "../model/mapper";
import type {
  ICreateStorePayload,
  ICreateStoreResponse,
  ICreateStoreResponseDto,
} from "./types";

export const createStore = async (
  payload: ICreateStorePayload,
): Promise<ICreateStoreResponse> => {
  const response = await api.post<ICreateStoreResponseDto>("/store", payload);
  return mapCreateStore(response.data);
};
