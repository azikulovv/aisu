import { api } from "~/shared/api/client";
import type { CreateDeliveryPayload } from "./types";

export const createDelivery = async (
  payload: CreateDeliveryPayload,
): Promise<void> => {
  await api.post("/delivery", payload);
};
