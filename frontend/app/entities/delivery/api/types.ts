export interface CreateDeliveryPayload {
  storeId: string;
  productName: string;
  isPaid: boolean;
}

export interface DeliveryDto {
  id: string;
  user_id: string;
  store_id: string;
  product_name: string;
  is_paid: boolean;
  created_at: string;
  updated_at: string;
}

export interface GetDeliveriesResponseDto {
  deliveries: DeliveryDto[];
}

export interface GetDeliveryResponseDto {
  delivery: DeliveryDto;
}

export interface CreateDeliveryResponseDto {
  message: string;
  delivery: DeliveryDto;
}
