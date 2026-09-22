import { getDelivery } from "../api/get-delivery";
import { updateDeliveryPayment } from "../api/update-delivery-payment";
import type { Delivery } from "../domain/types";

export const useDelivery = () => {
  const delivery = useState<Delivery | null>("state:delivery", () => null);
  const isLoading = ref(false);
  const isUpdatingPayment = ref(false);
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

  const updatePayment = async (isPaid: boolean) => {
    if (!delivery.value) return;

    isUpdatingPayment.value = true;
    error.value = null;

    try {
      delivery.value = await updateDeliveryPayment(delivery.value.id, {
        isPaid,
      });
    } catch {
      error.value = "Не удалось обновить статус оплаты";
    } finally {
      isUpdatingPayment.value = false;
    }
  };

  return {
    delivery: readonly(delivery),
    error: readonly(error),
    isLoading,
    isUpdatingPayment,
    loadDelivery,
    updatePayment,
  };
};
