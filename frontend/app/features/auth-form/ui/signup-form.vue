<script setup lang="ts">
import { BaseButton, BaseInput } from "~/shared/ui";
import { useSignup } from "../model/useSignup";

const { form, isSubmitting, errorMessage, submit } = useSignup();
</script>

<template>
  <form
    class="space-y-3 rounded-2xl bg-(--color-surface-1) p-4"
    @submit.prevent="submit"
  >
    <h2 class="text-center text-xl font-semibold">Регистрация</h2>

    <BaseInput
      v-model="form.firstName"
      label="Имя"
      placeholder="Введите ваше имя"
      autocomplete="given-name"
    />

    <BaseInput
      v-model="form.lastName"
      label="Фамилия"
      placeholder="Введите вашу фамилию"
      autocomplete="family-name"
    />

    <BaseInput
      v-model="form.email"
      label="Email"
      placeholder="Введите вашу почту"
      type="email"
      autocomplete="email"
    />

    <BaseInput
      v-model="form.password"
      label="Пароль"
      placeholder="Минимум 8 символов"
      type="password"
      autocomplete="new-password"
    />

    <BaseInput
      v-model="form.passwordConfirmation"
      label="Подтверждение пароля"
      placeholder="Повторите пароль"
      type="password"
      autocomplete="new-password"
    />

    <p
      v-if="errorMessage"
      class="rounded-md bg-(--color-danger)/10 px-3 py-2 text-sm text-(--color-danger)"
    >
      {{ errorMessage }}
    </p>

    <BaseButton class="w-full" type="submit" :loading="isSubmitting">
      Зарегистрироваться
    </BaseButton>

    <p class="text-center text-sm text-(--color-subtext-1)">
      Уже есть аккаунт?
      <NuxtLink
        to="/auth/signin"
        class="font-medium text-(--color-primary) hover:underline"
      >
        Войти
      </NuxtLink>
    </p>
  </form>
</template>
