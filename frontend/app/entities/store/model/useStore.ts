import { getStore } from "../composables/api/get-store";
import type { StoreItem } from "../model/types";

export const useStore = () => {
  const storeState = useState<StoreItem | null>("state:store", () => null);

  const loadStore = async (storeId: string) => {
    const { store } = await getStore(storeId);
    storeState.value = store;
  };

  return { store: readonly(storeState), loadStore };
};
