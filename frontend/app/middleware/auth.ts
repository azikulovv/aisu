import { useUser } from "~/entities/user/model/useUser";

export default defineNuxtRouteMiddleware(() => {
  const { user, token } = useUser();

  if (!user.value || !token.value.access) {
    return navigateTo("/auth/signin");
  }
});
