import type { Delivery } from "../domain/types";

export const useDelivery = () => {
  const delivery = useState<Delivery | null>("state:delivery", () => null);

  const loadDelivery = async (deliveryId: string) => {
    delivery.value = {
      id: "1",
      storeId: "store-1",
      productName: "Apple AirPods Pro 2",
      isPaid: false,
      createdAt: "createdat",
      updatedAt: "updatedat",
    };
  };

  return { delivery, loadDelivery };
};
