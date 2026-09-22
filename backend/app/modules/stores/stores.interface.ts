import { Delivery } from "../deliveries/deliveries.interface";

export interface IStore {
  user_id: string;
  id: string;
  name: string;
  location: string;
  updated_at: string;
  created_at: string;
}

export interface IStoreItem extends IStore {
  deliveries: Delivery[];
}

export type ICreateStoreDto = Omit<IStore, "id" | "created_at" | "updated_at">;
