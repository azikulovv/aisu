<script setup lang="ts">
import { useStore } from "~/entities/store/composables/useStore";

const { store } = useStore();
</script>

<template>
  <section
    class="rounded-lg border border-(--color-border) bg-(--color-surface-0) p-4 shadow-(--shadow-sm)"
  >
    <!-- Name -->
    <div class="flex items-center gap-2">
      <span class="h-2 w-2 rounded-full bg-(--color-success)" />

      <h2 class="text-base font-bold">
        {{ store?.name }}
      </h2>
    </div>

    <p class="mt-1 text-sm text-[var(--color-subtext-0)]">
      {{ "store.location" }}
    </p>

    <!-- Stats -->
    <div class="mt-5 grid grid-cols-2 gap-3">
      <div class="rounded-[var(--radius-md)] bg-[var(--color-base)] p-3">
        <p class="text-xs text-[var(--color-subtext-0)]">Поставки</p>

        <p class="mt-1 text-xl font-bold text-[var(--color-text)]">
          {{ store?.deliveriesCount }}
        </p>
      </div>

      <div class="rounded-[var(--radius-md)] bg-[var(--color-base)] p-3">
        <p class="text-xs text-[var(--color-subtext-0)]">Товары</p>

        <p class="mt-1 text-xl font-bold text-[var(--color-primary)]">
          {{ store?.productsCount }}
        </p>
      </div>
    </div>
  </section>
</template>
