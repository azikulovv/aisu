<script setup lang="ts">
import { BaseButton } from "~/shared/ui";
</script>

<template>
  <header class="mb-5 flex items-center gap-3">
    <NuxtLink to="/stores" aria-label="Назад">
      <BaseButton :size="'sm'" :variant="'ghost'">
        <ArrowLeft :size="20" />
      </BaseButton>
    </NuxtLink>

    <h1 class="text-lg font-bold">Магазин</h1>
  </header>
</template>
