import { getDelivery } from "../api/get-delivery";
import type { Delivery } from "../domain/types";

export const useDelivery = () => {
  const delivery = useState<Delivery | null>("state:delivery", () => null);
  const isLoading = ref(false);
  const error = ref<string | null>(null);

  const loadDelivery = async (deliveryId: string) => {
    isLoading.value = true;
    error.value = null;
    delivery.value = null;

    try {
      delivery.value = await getDelivery(deliveryId);
    } catch {
      error.value = "Не удалось загрузить поставку";
    } finally {
      isLoading.value = false;
    }
  };

  return {
    delivery: readonly(delivery),
    error: readonly(error),
    isLoading,
    loadDelivery,
  };
};
