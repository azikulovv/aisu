export interface Delivery {
  companyName: string;
  productName: string;
  productsCount: number;
  isPaid: boolean;
  deliveryDate: string;
  deliveryTime: string;
}

export const useDeliveries = () => {
  const deliveries = useState<Delivery[]>("state:deliveries", () => [
    {
      companyName: "Guangzhou Trading Co.",
      productName: "Apple AirPods Pro 2",
      productsCount: 120,
      isPaid: true,
      deliveryDate: "21 сентября 2026",
      deliveryTime: "14:30",
    },
    {
      companyName: "Guangzhou Trading Co.",
      productName: "Apple AirPods Pro 2",
      productsCount: 120,
      isPaid: true,
      deliveryDate: "21 сентября 2026",
      deliveryTime: "14:30",
    },
    {
      companyName: "Guangzhou Trading Co.",
      productName: "Apple AirPods Pro 2",
      productsCount: 120,
      isPaid: false,
      deliveryDate: "21 сентября 2026",
      deliveryTime: "14:30",
    },
    {
      companyName: "Guangzhou Trading Co.",
      productName: "Apple AirPods Pro 2",
      productsCount: 120,
      isPaid: true,
      deliveryDate: "21 сентября 2026",
      deliveryTime: "14:30",
    },
  ]);

  return { deliveries };
};
