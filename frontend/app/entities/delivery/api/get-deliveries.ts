import { api } from "~/shared/api/client";

export const getDeliveries = async () => {
  const resposne = await api.get("/deliveries");

  return resposne.data;
};
