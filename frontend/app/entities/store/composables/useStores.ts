import type { Store } from "../domain/types";

export const useStores = () => {
  const stores = useState<Store[]>("state:stores", () => []);

  const loadStores = async () => {
    stores.value = [];
  };

  return { stores, loadStores };
};
