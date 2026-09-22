import { getDeliveries } from "../api/get-deliveries";
import type { Delivery } from "../domain/types";

export const useDeliveries = () => {
  const deliveriesState = useState<Delivery[]>("state:deliveries", () => []);

  const loadDeliveries = async (storeId: string) => {
    const deliveries = await getDeliveries();

    deliveriesState.value = deliveries;
  };

  return { deliveries: readonly(deliveriesState), loadDeliveries };
};
