<script setup lang="ts">
import { BaseButton, BaseInput } from "~/shared/ui";
import { useCreateStoreForm } from "../composables/useCreateStoreForm";

const { form, isSubmitting, submit } = useCreateStoreForm();
</script>

<template>
  <form class="space-y-4" @submit.prevent="submit">
    <BaseInput
      v-model="form.company"
      label="Компания"
      placeholder="Введите название компании"
    />

    <BaseButton
      class="w-full"
      :type="'submit'"
      variant="primary"
      :loading="isSubmitting"
    >
      Создать компанию
    </BaseButton>
  </form>
</template>
