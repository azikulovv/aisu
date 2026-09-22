import { api } from "~/shared/api/client";
import { mapDelivery } from "../domain/mapper";
import type { Delivery } from "../domain/types";
import type {
  UpdateDeliveryPaymentPayload,
  UpdateDeliveryPaymentResponseDto,
} from "./types";

export const updateDeliveryPayment = async (
  deliveryId: string,
  payload: UpdateDeliveryPaymentPayload,
): Promise<Delivery> => {
  const response = await api.patch<UpdateDeliveryPaymentResponseDto>(
    `/delivery/${deliveryId}/payment`,
    payload,
  );

  return mapDelivery(response.data.delivery);
};
