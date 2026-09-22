<script setup lang="ts">
import { BaseButton, BaseInput } from "~/shared/ui";
import { useSignin } from "../model/useSignin";

const { form, isSubmitting, errorMessage, submit } = useSignin();
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
      type="password"
      autocomplete="current-password"
    />

    <p
      v-if="errorMessage"
      class="rounded-md bg-(--color-danger)/10 px-3 py-2 text-sm text-(--color-danger)"
    >
      {{ errorMessage }}
    </p>

    <BaseButton class="w-full" type="submit" :loading="isSubmitting">
      Войти
    </BaseButton>

    <p class="text-center text-sm text-(--color-subtext-1)">
      Нет аккаунта?
      <NuxtLink
        to="/auth/signup"
        class="font-medium text-(--color-primary) hover:underline"
      >
        Зарегистрироваться
      </NuxtLink>
    </p>
  </form>
</template>
