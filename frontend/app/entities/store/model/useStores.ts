import { getStores } from "../composables/api/get-stores";
import type { Store } from "../model/types";

export const useStores = () => {
  const storesState = useState<Store[]>("state:stores", () => []);

  const loadStores = async () => {
    const { stores } = await getStores();

    storesState.value = stores ?? [];
  };

  return { stores: readonly(storesState), loadStores };
};
