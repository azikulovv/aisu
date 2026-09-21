import type { Delivery } from "~/entities/delivery/domain/types";

export interface Store {
  id: string;
  name: string;
  location: string;
  deliveriesCount: number;
  productsCount: number;
}

export interface StoreItem extends Store {
  deliveries: Delivery[];
}
