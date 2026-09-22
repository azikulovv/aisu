import { useUser } from "~/entities/user/model/useUser";

export default defineNuxtRouteMiddleware((to, from) => {
  const { user, token } = useUser();

  if (!user.value || !token.value.access) return navigateTo("/auth/signin");
});
