<script setup lang="ts">
import BaseButton from "~/shared/ui/base-button.vue";
import BaseInput from "~/shared/ui/base-input.vue";
import BaseSelect from "~/shared/ui/base-select.vue";

const company = ref("");
const product = ref("");
const quantity = ref("");
const deliveryDate = ref("");
const deliveryTime = ref("");
const isPaid = ref(false);

const companies = [
  {
    label: "Guangzhou Trading",
    value: "guangzhou",
  },
  {
    label: "Shenzhen Electronics",
    value: "shenzhen",
  },
  {
    label: "Yiwu Market",
    value: "yiwu",
  },
];

const products = [
  {
    label: "Apple AirPods Pro 2",
    value: "airpods-pro-2",
  },
  {
    label: "USB-C кабель 2m",
    value: "usb-c-cable",
  },
  {
    label: "iPhone 15",
    value: "iphone-15",
  },
];

const isSubmitting = ref(false);

const submit = async () => {
  isSubmitting.value = true;

  try {
    const payload = {
      companyId: company.value,
      productId: product.value,
      quantity: Number(quantity.value),
      deliveryDate: deliveryDate.value,
      deliveryTime: deliveryTime.value,
      isPaid: isPaid.value,
    };

    console.log(payload);

    // await $fetch('/api/deliveries', {
    //   method: 'POST',
    //   body: payload,
    // })

    await new Promise((resolve) => setTimeout(resolve, 500));

    await navigateTo("/deliveries");
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<template>
  <!-- Header -->
  <header class="mb-6">
    <h1 class="text-2xl font-bold tracking-tight text-(--color-text)">
      Новая доставка
    </h1>

    <p class="mt-1 text-sm text-(--color-subtext-1)">
      Добавьте информацию о доставке
    </p>
  </header>

  <!-- Form -->
  <form class="space-y-4" @submit.prevent="submit">
    <!-- Company -->
    <BaseSelect
      v-model="company"
      label="Компания"
      placeholder="Выберите компанию"
      :options="companies"
    />

    <!-- Product -->
    <BaseInput
      v-model="product"
      label="Продукт"
      placeholder="Выберите продукт"
    />

    <!-- Quantity -->
    <BaseInput
      v-model="quantity"
      label="Количество"
      type="number"
      placeholder="0"
    />

    <!-- Payment -->
    <div
      class="flex items-center justify-between rounded-md border border-(--color-border) bg-(--color-surface-0) px-4 py-3"
    >
      <div>
        <p class="text-sm font-semibold text-(--color-text)">Оплата</p>

        <p class="mt-0.5 text-xs text-(--color-subtext-0)">
          Доставка уже оплачена
        </p>
      </div>

      <button
        type="button"
        role="switch"
        :aria-checked="isPaid"
        class="relative h-6 w-11 rounded-full transition duration-200"
        :class="isPaid ? 'bg-(--color-success)' : 'bg-(--color-crust)'"
        @click="isPaid = !isPaid"
      >
        <span
          class="absolute top-0.5 h-5 w-5 rounded-full bg-white shadow-sm transition duration-200"
          :class="isPaid ? 'left-5.5' : 'left-0.5'"
        />
      </button>
    </div>

    <!-- Submit -->
    <BaseButton
      class="w-full"
      :type="'submit'"
      variant="primary"
      :loading="isSubmitting"
    >
      Создать доставку
    </BaseButton>
  </form>
</template>
