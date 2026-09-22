<script setup lang="ts">
import type { Delivery } from '../domain/types';


defineProps<{ delivery: Delivery }>();
</script>

<template>
  <article
    class="w-full rounded-lg border border-(--color-border) bg-(--color-surface-0) p-4 font-(--font-sans) shadow-(--shadow-sm)"
  >
    <!-- Company + status -->
    <div class="flex items-center justify-between gap-3">
      <h3 class="truncate text-base font-bold text-(--color-text)">
        {{ delivery.companyName }}
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
    <div class="mt-4 flex items-end justify-between">
      <div>
        <p
          class="text-[11px] font-medium uppercase tracking-wide text-(--color-subtext-0)"
        >
          Количество
        </p>

        <p class="mt-0.5 text-lg font-bold text-(--color-primary)">
          {{ delivery.productsCount }}
        </p>
      </div>

      <div class="text-right">
        <p class="text-sm font-medium text-(--color-text)">
          {{ delivery.deliveryDate }}
        </p>

        <p class="mt-0.5 text-xs text-(--color-subtext-0)">
          {{ delivery.deliveryTime }}
        </p>
      </div>
    </div>
  </article>
</template>
