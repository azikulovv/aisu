export interface Store {
  name: string;
  deliveriesCount: number;
  productsCount: number;
  isActive?: boolean;
}

export const useStores = () => {
  const stores = useState<Store[]>("state:stores", () => [
    {
      name: "Guangzhou Trading",
      deliveriesCount: 24,
      productsCount: 1280,
    },
    {
      name: "Guangzhou Trading",
      deliveriesCount: 24,
      productsCount: 1280,
    },
    {
      name: "Guangzhou Trading Active False",
      deliveriesCount: 24,
      productsCount: 1280,
      isActive: false,
    },
    {
      name: "Guangzhou Trading",
      deliveriesCount: 24,
      productsCount: 1280,
    },
    {
      name: "Guangzhou Trading",
      deliveriesCount: 24,
      productsCount: 1280,
    },
  ]);

  return { stores };
};
