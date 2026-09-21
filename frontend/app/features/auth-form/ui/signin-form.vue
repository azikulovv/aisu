<script setup lang="ts">
import { BaseButton, BaseInput } from "~/shared/ui";
import { useSignin } from "../composables/useSignin";

const { form, isSubmitting, submit } = useSignin();
</script>

<template>
  <form
    class="space-y-3 p-4 rounded-2xl bg-(--color-surface-1)"
    @submit.prevent="submit"
  >
    <h2 class="text-center font-semibold text-xl">Вход</h2>

    <BaseInput
      label="Email"
      v-model="form.email"
      placeholder="Введите вашу почту"
    />
    <BaseInput
      label="Пароль"
      v-model="form.password"
      placeholder="Введите ваш пароль"
    />

    <BaseButton class="w-full" :loading="isSubmitting">Войти</BaseButton>
  </form>
</template>
