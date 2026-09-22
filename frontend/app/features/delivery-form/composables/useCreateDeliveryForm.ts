import { createDelivery } from "~/entities/delivery/api/create-delivery";
import { useStores } from "~/entities/store";

export interface CreateDeliveryForm {
  storeId: string;
  productName: string;
  quantity: string;
  isPaid: boolean;
}

export const useCreateDeliveryForm = () => {
  const form = ref<CreateDeliveryForm>({
    storeId: "",
    productName: "",
    quantity: "1",
    isPaid: false,
  });

  const isSubmitting = ref(false);
  const { stores, loadStores } = useStores();

  const storeOptions = computed(() =>
    stores.value.map((store) => ({
      label: store.name,
      value: store.id,
    })),
  );

  onMounted(() => {
    void loadStores();
  });

  const submit = async () => {
    isSubmitting.value = true;

    try {
      await createDelivery({
        storeId: form.value.storeId,
        productName: form.value.productName,
        quantity: Number(form.value.quantity),
        isPaid: form.value.isPaid,
      });
      await navigateTo("/deliveries");
    } finally {
      isSubmitting.value = false;
    }
  };

  return { form, isSubmitting, storeOptions, submit };
};
