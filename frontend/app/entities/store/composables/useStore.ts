export interface Store {
  name: string;
  deliveriesCount: number;
  productsCount: number;
  isActive?: boolean;
  deliveries: [];
}

export const useStore = () => {
  const store = useState<Store | null>("state:stores", () => null);

  const loadStore = async () => {
    store.value = {
      name: "Guangzhou Trading",
      deliveriesCount: 24,
      productsCount: 1280,
      deliveries: [],
    };
  };

  return { store, loadStore };
};
