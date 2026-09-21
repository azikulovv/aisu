export interface Form {
  company: string;
}

export const useCreateStoreForm = () => {
  const form = ref<Form>({
    company: "",
  });

  const isSubmitting = ref(false);

  const submit = async () => {
    isSubmitting.value = true;

    try {
      console.log(form.value);

      // await $fetch('/api/deliveries', {
      //   method: 'POST',
      //   body: payload,
      // })

      await new Promise((resolve) => setTimeout(resolve, 500));

      // await navigateTo("/deliveries");
    } finally {
      isSubmitting.value = false;
    }
  };

  return { form, isSubmitting, submit };
};
