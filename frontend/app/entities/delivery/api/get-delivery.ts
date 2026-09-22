import { api } from "~/shared/api/client";
import { mapDelivery } from "../domain/mapper";
import type { Delivery } from "../domain/types";
import type { GetDeliveryResponseDto } from "./types";

export const getDelivery = async (deliveryId: string): Promise<Delivery> => {
  const response = await api.get<GetDeliveryResponseDto>(
    `/delivery/${deliveryId}`,
  );

  return mapDelivery(response.data.delivery);
};
