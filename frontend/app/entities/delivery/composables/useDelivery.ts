import type { Delivery } from "../domain/types";

export const useDelivery = () => {
  const delivery = useState<Delivery | null>("state:delivery", () => null);

  const loadDelivery = async (deliveryId: string) => {
    delivery.value = {
      id: "1",
      companyName: "Guangzhou Trading Co.",
      productName: "Apple AirPods Pro 2",
      productsCount: 120,
      isPaid: false,
      createdAt: "createdat",
      updatedAt: "updatedat",
    };
  };

  return { delivery, loadDelivery };
};
