import type { Delivery } from "../delivery/delivery.interface";

export interface IStore {
  id: string;
  name: string;
  location: string;
  updated_at: string;
  created_at: string;
}

export interface IStoreSummary extends IStore {
  deliveries_count: number;
  products_count: number;
}

export interface IStoreItem extends IStoreSummary {
  deliveries: Delivery[];
}

export interface ICreateStoreDto {
  user_id: string;
  name: string;
  location: string;
}

export interface ICreateStoreRequest {
  name: string;
  location: string;
}
