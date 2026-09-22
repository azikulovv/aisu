export interface Delivery {
  user_id: string;
  store_id: string;

  id: string;
  product_name: string;
  is_paid: boolean;
  created_at: string;
  updated_at: string;
}

export interface ICreateDeliveryDto {
  user_id: string;
  store_id: string;
  product_name: string;
  is_paid: boolean;
}

export interface ICreateDeliveryRequest {
  storeId: string;
  productName: string;
  isPaid: boolean;
}
