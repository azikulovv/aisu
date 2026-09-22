import type { User } from "./types";

export const useUser = () => {
  const userState = useState<User | null>("state:user", () => null);
  const tokenState = useState("state:token", () => ({
    access: "",
    refresh: "",
  }));

  const setUser = (user: User) => {
    userState.value = user;
  };

  const setToken = (token: string) => {
    tokenState.value.access = token;
  };

  return {
    user: readonly(userState),
    token: readonly(tokenState.value),
    setUser,
    setToken,
  };
};
