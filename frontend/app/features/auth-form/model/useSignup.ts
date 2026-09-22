import { useUser } from "~/entities/user/model/useUser";
import { signup } from "../api/signup";
import { getAuthErrorMessage } from "./auth-error";

interface Form {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  passwordConfirmation: string;
}

export const useSignup = () => {
  const { setUser, setToken } = useUser();

  const form = ref<Form>({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    passwordConfirmation: "",
  });

  const isSubmitting = ref(false);
  const errorMessage = ref("");

  const submit = async () => {
    errorMessage.value = validateForm(form.value);

    if (errorMessage.value) return;

    isSubmitting.value = true;

    try {
      const response = await signup({
        email: form.value.email,
        firstName: form.value.firstName,
        lastName: form.value.lastName,
        password: form.value.password,
      });

      setUser(response.user);
      setToken(response.accessToken);

      await navigateTo("/");
    } catch (error) {
      errorMessage.value = getAuthErrorMessage(
        error,
        "Не удалось зарегистрироваться. Попробуйте ещё раз",
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

function validateForm(form: Form): string {
  if (form.firstName.trim().length < 2) {
    return "Имя должно содержать минимум 2 символа";
  }

  if (form.lastName.trim().length < 2) {
    return "Фамилия должна содержать минимум 2 символа";
  }

  if (!/^\S+@\S+\.\S+$/.test(form.email.trim())) {
    return "Введите корректный email";
  }

  if (form.password.length < 8) {
    return "Пароль должен содержать минимум 8 символов";
  }

  if (form.password !== form.passwordConfirmation) {
    return "Пароли не совпадают";
  }

  return "";
}
