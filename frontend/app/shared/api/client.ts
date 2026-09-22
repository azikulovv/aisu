import axios from "axios";
import { useUser } from "~/entities/user/model/useUser";

export const api = axios.create({
  baseURL: "http://localhost:3040/api",
  timeout: 5000,
});

api.interceptors.request.use((config) => {
  const { token } = useUser();

  if (token.value.access) {
    config.headers.Authorization = `Bearer ${token.value.access}`;
  }

  return config;
});
