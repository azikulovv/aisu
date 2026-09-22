import { createStore } from "~/entities/store/composables/api/create-store";

export interface Form {
  name: string;
  location: string;
}

export const useCreateStoreForm = () => {
  const form = ref<Form>({
    name: "",
    location: "",
  });

  const isSubmitting = ref(false);

  const submit = async () => {
    isSubmitting.value = true;

    try {
      await createStore(form.value);
      await navigateTo("/stores");
    } finally {
      isSubmitting.value = false;
    }
  };

  return { form, isSubmitting, submit };
};
