import { useUser } from "~/entities/user/model/useUser";
import { signin } from "../api/signin";

interface Form {
  email: string;
  password: string;
}

export const useSignin = () => {
  const { setUser } = useUser();

  const form = ref<Form>({
    email: "",
    password: "",
  });

  const isSubmitting = ref(false);

  const submit = async () => {
    isSubmitting.value = true;

    try {
      const response = await signin({
        email: form.value.email,
        password: form.value.password,
      });

      setUser(response.user);

      navigateTo("/");
    } finally {
      isSubmitting.value = false;
    }
  };

  return {
    form,
    isSubmitting,
    submit,
  };
};
