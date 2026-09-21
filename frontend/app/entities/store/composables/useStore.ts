import type { StoreItem } from "../domain/types";

export const useStore = () => {
  const store = useState<StoreItem | null>("state:stores", () => null);

  const loadStore = async () => {
    store.value = {
      id: "1",
      name: "Guangzhou Trading",
      location: "Astana",
      deliveriesCount: 24,
      productsCount: 1280,
      deliveries: [],
    };
  };

  return { store, loadStore };
};
