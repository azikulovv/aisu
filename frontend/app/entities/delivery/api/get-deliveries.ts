import { api } from "~/shared/api/client";
import { mapDelivery } from "../domain/mapper";
import type { Delivery } from "../domain/types";
import type { GetDeliveriesResponseDto } from "./types";

export const getDeliveries = async (): Promise<Delivery[]> => {
  const response = await api.get<GetDeliveriesResponseDto>("/delivery");

  return response.data.deliveries.map(mapDelivery);
};
