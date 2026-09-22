import { getDeliveries } from "../api/get-deliveries";
import type { Delivery } from "../domain/types";

export const useDeliveries = () => {
  const deliveriesState = useState<Delivery[]>("state:deliveries", () => []);
  const isLoading = ref(false);
  const error = ref<string | null>(null);

  const loadDeliveries = async () => {
    isLoading.value = true;
    error.value = null;

    try {
      const deliveries = await getDeliveries();

      deliveriesState.value = deliveries;
    } catch {
      error.value = "Не удалось загрузить поставки";
    } finally {
      isLoading.value = false;
    }
  };

  return {
    deliveries: readonly(deliveriesState),
    isLoading,
    error: readonly(error),
    loadDeliveries,
  };
};
