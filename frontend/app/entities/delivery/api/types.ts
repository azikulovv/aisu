export interface CreateDeliveryPayload {
  storeId: string;
  productName: string;
  quantity: number;
  isPaid: boolean;
}

export interface DeliveryDto {
  id: string;
  user_id: string;
  store_id: string;
  store_name: string;
  product_name: string;
  quantity: number;
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

export interface UpdateDeliveryPaymentPayload {
  isPaid: boolean;
}

export interface UpdateDeliveryPaymentResponseDto {
  delivery: DeliveryDto;
}
