<script setup lang="ts">
import { ChevronRight } from "lucide-vue-next";
import type { Store } from "../model/types";

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
          class="h-2 w-2 shrink-0 rounded-full bg-(--color-success)"
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
      <ChevronRight :size="16" />
    </div>
  </article>
</template>
