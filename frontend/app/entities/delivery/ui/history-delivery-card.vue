<script lang="ts" setup>
import { Package } from "lucide-vue-next";
import type { Delivery } from "../domain/types";

defineProps<{ delivery: Delivery }>();
</script>

<template>
  <article
    class="rounded-md border border-(--color-border) bg-(--color-surface-0) p-3.5 shadow-(--shadow-sm)"
  >
    <!-- Top -->
    <div class="flex items-start justify-between gap-3">
      <div class="min-w-0">
        <h3 class="truncate text-sm font-semibold">
          {{ delivery.productName }}
        </h3>

        <div
          class="mt-1.5 flex items-center gap-1.5 text-xs text-(--color-subtext-0)"
        >
          <Package :size="13" />

          <span>{{ delivery.storeId }}</span>
        </div>
      </div>

      <!-- Payment -->
      <span
        class="flex shrink-0 items-center gap-1.5 text-xs font-medium"
        :class="
          delivery.isPaid ? 'text-(--color-success)' : 'text-(--color-warning)'
        "
      >
        <span
          class="h-1.5 w-1.5 rounded-full"
          :class="
            delivery.isPaid ? 'bg-(--color-success)' : 'bg-(--color-warning)'
          "
        />

        {{ delivery.isPaid ? "Оплачено" : "Не оплачено" }}
      </span>
    </div>

    <!-- Date -->
    <div class="mt-3 text-xs text-(--color-subtext-0)">
      {{ delivery.createdAt }}
      <span class="mx-1">·</span>
      {{ delivery.updatedAt }}
    </div>
  </article>
</template>
