import type { User } from "./types";

export const useUser = () => {
  const userState = useCookie<User | null>("user", {
    default: () => null,
  });

  const tokenState = useCookie<{
    access: string | null;
    refresh: string | null;
  }>("tokens", {
    default: () => ({
      access: null,
      refresh: null,
    }),
  });

  const setUser = (user: User) => {
    userState.value = user;
  };

  const setToken = (token: string) => {
    tokenState.value = {
      access: token,
      refresh: null,
    };
  };

  const clearUser = () => {
    userState.value = null;
    tokenState.value = {
      access: "",
      refresh: "",
    };
  };

  return {
    user: readonly(userState),
    token: readonly(tokenState),
    setUser,
    setToken,
    clearUser,
  };
};
