<script setup lang="ts">
import type { Delivery } from "../domain/types";

defineProps<{ delivery: Delivery }>();
</script>

<template>
  <article
    class="w-full rounded-lg border border-(--color-border) bg-(--color-surface-0) p-4 font-(--font-sans) shadow-(--shadow-sm)"
  >
    <!-- Store + status -->
    <div class="flex items-center justify-between gap-3">
      <h3 class="truncate text-base font-bold text-(--color-text)">
        {{ delivery.storeName }}
      </h3>

      <span
        class="flex shrink-0 items-center gap-1.5 text-xs font-medium"
        :class="delivery.isPaid ? 'text-(--color-success)' : 'text-(--color-warning)'"
      >
        <span
          class="h-1.5 w-1.5 rounded-full"
          :class="delivery.isPaid ? 'bg-(--color-success)' : 'bg-(--color-warning)'"
        />

        {{ delivery.isPaid ? "Оплачено" : "Не оплачено" }}
      </span>
    </div>

    <!-- Product -->
    <p class="mt-2 truncate text-sm text-(--color-subtext-1)">
      {{ delivery.productName }}
    </p>

    <!-- Meta -->
    <div class="mt-4 text-xs text-(--color-subtext-0)">
          {{ delivery.quantity }} шт.
    </div>
  </article>
</template>
