<script setup lang="ts">
import { BaseButton, BaseInput, BaseSelect } from "~/shared/ui";
import { useCreateDeliveryForm } from "../composables/useCreateDeliveryForm";

const { form, isSubmitting, storeOptions, submit } = useCreateDeliveryForm();
</script>

<template>
  <form class="space-y-4" @submit.prevent="submit">
    <BaseSelect
      v-model="form.storeId"
      label="Магазин"
      placeholder="Выберите магазин"
      :options="storeOptions"
    />

    <BaseInput
      v-model="form.productName"
      label="Продукт"
      placeholder="Введите название продукта"
    />

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
        :aria-checked="form.isPaid"
        class="relative h-6 w-11 rounded-full transition duration-200"
        :class="form.isPaid ? 'bg-(--color-success)' : 'bg-(--color-crust)'"
        @click="form.isPaid = !form.isPaid"
      >
        <span
          class="absolute top-0.5 h-5 w-5 rounded-full bg-white shadow-sm transition duration-200"
          :class="form.isPaid ? 'left-5.5' : 'left-0.5'"
        />
      </button>
    </div>

    <BaseButton
      class="w-full"
      type="submit"
      variant="primary"
      :loading="isSubmitting"
    >
      Создать доставку
    </BaseButton>
  </form>
</template>
