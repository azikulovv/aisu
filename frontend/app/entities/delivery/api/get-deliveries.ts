import { api } from "~/shared/api/client";

export const getDeliveries = async () => {
  const resposne = await api.get(`/delivery`);

  return resposne.data;
};
