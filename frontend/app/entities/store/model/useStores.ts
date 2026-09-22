import type { Store } from "../model/types";

export const useStores = () => {
  const stores = useState<Store[]>("state:stores", () => []);

  const loadStores = async () => {
    stores.value = [];
  };

  return { stores, loadStores };
};
