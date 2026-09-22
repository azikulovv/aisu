import { getStore } from "../api/get-store";
import type { StoreItem } from "../model/types";

export const useStore = () => {
  const storeState = useState<StoreItem | null>("state:store", () => null);
  const isLoading = ref(false);
  const error = ref<string | null>(null);

  const loadStore = async (storeId: string) => {
    isLoading.value = true;
    error.value = null;
    storeState.value = null;

    try {
      const { store } = await getStore(storeId);
      storeState.value = store;
    } catch {
      error.value = "Не удалось загрузить магазин";
    } finally {
      isLoading.value = false;
    }
  };

  return {
    store: readonly(storeState),
    isLoading,
    error: readonly(error),
    loadStore,
  };
};
