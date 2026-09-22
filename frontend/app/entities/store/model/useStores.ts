import { getStoresByUserId } from "../composables/api/get-stores-by-userId";
import type { Store } from "../model/types";

export const useStores = () => {
  const storesState = useState<Store[]>("state:stores", () => []);

  const loadStores = async () => {
    const { stores } = await getStoresByUserId();

    storesState.value = stores ?? [];
  };

  return { stores: readonly(storesState), loadStores };
};
