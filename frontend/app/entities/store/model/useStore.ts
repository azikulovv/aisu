import { getStoreByUserIdAndUserId } from "../composables/api/get-store-by-id-and-userId";
import type { StoreItem } from "../model/types";

export const useStore = () => {
  const storeState = useState<StoreItem | null>("state:store", () => null);

  const loadStore = async (storeId: string) => {
    const { store } = await getStoreByUserIdAndUserId(storeId);
    storeState.value = store;
  };

  return { store: readonly(storeState), loadStore };
};
