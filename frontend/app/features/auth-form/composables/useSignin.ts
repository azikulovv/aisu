interface Form {
  email: string;
  password: string;
}

export const useSignin = () => {
  const form = ref<Form>({
    email: "",
    password: "",
  });
  const isSubmitting = ref<boolean>(false);

  const submit = async () => {
    isSubmitting.value = true;

    try {
    } catch {
    } finally {
      isSubmitting.value = false;
    }
  };

  return { form, isSubmitting, submit };
};
