import type { DeliveryDto } from "../api/types";
import type { Delivery } from "./types";

export const mapDelivery = (delivery: DeliveryDto): Delivery => ({
  id: delivery.id,
  storeId: delivery.store_id,
  productName: delivery.product_name,
  isPaid: delivery.is_paid,
  createdAt: delivery.created_at,
  updatedAt: delivery.updated_at,
});
