import { api } from "~/shared/api/client";
import { mapDelivery } from "../domain/mapper";
import type { Delivery } from "../domain/types";
import type {
  CreateDeliveryPayload,
  CreateDeliveryResponseDto,
} from "./types";

export const createDelivery = async (
  payload: CreateDeliveryPayload,
): Promise<Delivery> => {
  const response = await api.post<CreateDeliveryResponseDto>(
    "/delivery",
    payload,
  );

  return mapDelivery(response.data.delivery);
};
