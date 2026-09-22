import { getAuthErrorMessage } from "./auth-error";
import { useUser } from "~/entities/user/model/useUser";
import { signin } from "../api/signin";

interface Form {
  email: string;
  password: string;
}

export const useSignin = () => {
  const { setUser, setToken } = useUser();

  const form = ref<Form>({
    email: "",
    password: "",
  });

  const isSubmitting = ref(false);
  const errorMessage = ref("");

  const submit = async () => {
    errorMessage.value = "";
    isSubmitting.value = true;

    try {
      const response = await signin({
        email: form.value.email,
        password: form.value.password,
      });

      setUser(response.user);
      setToken(response.accessToken);

      await navigateTo("/");
    } catch (error) {
      errorMessage.value = getAuthErrorMessage(
        error,
        "Не удалось войти. Проверьте email и пароль",
      );
    } finally {
      isSubmitting.value = false;
    }
  };

  return {
    form,
    isSubmitting,
    errorMessage,
    submit,
  };
};
