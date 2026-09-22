import { useUser } from "~/entities/user/model/useUser";

export default defineNuxtRouteMiddleware((to, from) => {
  const { user, token } = useUser();

  if (!user.value || !token.access) return navigateTo("/auth/signin");
});
