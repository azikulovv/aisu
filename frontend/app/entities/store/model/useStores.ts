import { getStores } from "../api/get-stores";
import type { Store } from "../model/types";

export const useStores = () => {
  const storesState = useState<Store[]>("state:stores", () => []);
  const isLoading = ref(false);
  const error = ref<string | null>(null);

  const loadStores = async () => {
    isLoading.value = true;
    error.value = null;

    try {
      const { stores } = await getStores();
      storesState.value = stores;
    } catch {
      error.value = "Не удалось загрузить магазины";
    } finally {
      isLoading.value = false;
    }
  };

  return {
    stores: readonly(storesState),
    isLoading,
    error: readonly(error),
    loadStores,
  };
};
