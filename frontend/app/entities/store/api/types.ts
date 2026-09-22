import type { DeliveryDto } from "~/entities/delivery/api/types";
import type { Store, StoreItem } from "../model/types";

export interface ICreateStorePayload {
  name: string;
  location: string;
}

export interface ICreateStoreResponse {
  message: string;
  store: {
    id: string;
    name: string;
    location: string;
    updatedAt: string;
    createdAt: string;
  };
}

export interface ICreateStoreResponseDto {
  message: string;
  store: {
    id: string;
    name: string;
    location: string;
    updated_at: string;
    created_at: string;
  };
}

export interface StoreDto {
  id: string;
  name: string;
  location: string;
  updated_at: string;
  created_at: string;
  deliveries_count: number;
  products_count: number;
}

export interface IGetStoresByUserIdResponse {
  stores: Store[];
}

export interface IGetStoresByUserIdResponseDto {
  stores: StoreDto[];
}

export interface IGetStoreByIdAndUserIdResponse {
  store: StoreItem;
}

export interface IGetStoreByIdAndUserIdResponseDto {
  store: StoreDto & {
    deliveries: DeliveryDto[];
  };
}
