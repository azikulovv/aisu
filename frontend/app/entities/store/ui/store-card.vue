<script setup lang="ts">
import type { Store } from "../composables/useStores";

defineProps<{ store: Store }>();
</script>

<template>
  <article
    class="flex w-full items-center justify-between gap-4 rounded-lg border border-(--color-border) bg-(--color-surface-0) p-4 font-(--font-sans) shadow-(--shadow-sm) transition duration-150 hover:shadow-(--shadow-md)"
  >
    <!-- Store info -->
    <div class="min-w-0">
      <div class="flex items-center gap-2">
        <!-- Status -->
        <span
          class="h-2 w-2 shrink-0 rounded-full"
          :class="
            store.isActive ? 'bg-(--color-success)' : 'bg-(--color-overlay-1)'
          "
        />

        <h3 class="truncate text-sm font-semibold text-(--color-text)">
          {{ store.name }}
        </h3>
      </div>

      <!-- Stats -->
      <div
        class="mt-2 flex items-center gap-3 text-xs text-(--color-subtext-0)"
      >
        <span> {{ store.deliveriesCount }} поставок </span>

        <span class="h-1 w-1 rounded-full bg-(--color-overlay-1)" />

        <span> {{ store.productsCount }} товаров </span>
      </div>
    </div>

    <!-- Arrow -->
    <div
      class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-(--color-base) text-(--color-subtext-0)"
    >
      <svg
        class="h-4 w-4"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="m9 18 6-6-6-6" />
      </svg>
    </div>
  </article>
</template>
