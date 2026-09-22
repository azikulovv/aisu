import axios from "axios";
import { useUser } from "~/entities/user/model/useUser";

export const api = axios.create({
  timeout: 5000,
});

api.interceptors.request.use((config) => {
  config.baseURL = useRuntimeConfig().public.apiBase;

  const { token } = useUser();

  if (token.value.access) {
    config.headers.Authorization = `Bearer ${token.value.access}`;
  }

  return config;
});
