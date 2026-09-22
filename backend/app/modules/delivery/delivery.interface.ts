export interface Delivery {
  user_id: string;
  store_id: string;
  store_name: string;

  id: string;
  product_name: string;
  quantity: number;
  is_paid: boolean;
  created_at: string;
  updated_at: string;
}

export interface ICreateDeliveryDto {
  user_id: string;
  store_id: string;
  product_name: string;
  quantity: number;
  is_paid: boolean;
}

export interface ICreateDeliveryRequest {
  storeId: string;
  productName: string;
  quantity: number;
  isPaid: boolean;
}

export interface IUpdateDeliveryPaymentRequest {
  isPaid: boolean;
}
