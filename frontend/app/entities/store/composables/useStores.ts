import type { Store } from "../domain/types";

export const useStores = () => {
  const stores = useState<Store[]>("state:stores", () => []);

  const loadStores = async () => {
    stores.value = [
      {
        id: "1",
        name: "Guangzhou Trading",
        deliveriesCount: 24,
        productsCount: 1280,
      },
      {
        id: "1",
        name: "Guangzhou Trading",
        deliveriesCount: 24,
        productsCount: 1280,
      },
    ];
  };

  return { stores, loadStores };
};
