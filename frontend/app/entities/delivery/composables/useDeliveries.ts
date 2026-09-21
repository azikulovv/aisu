import type { Delivery } from "../domain/types";

export const useDeliveries = () => {
  const deliveries = useState<Delivery[]>("state:deliveries", () => []);

  const loadDeliveries = async (storeId: string) => {
    deliveries.value = [
      {
        id: "1",
        companyName: "Guangzhou Trading Co.",
        productName: "Apple AirPods Pro 2",
        productsCount: 120,
        isPaid: true,
        createdAt: "createdat",
        updatedAt: "updatedat",
      },
    ];
  };

  return { deliveries, loadDeliveries };
};
