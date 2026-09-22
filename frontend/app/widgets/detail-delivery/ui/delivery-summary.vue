<script lang="ts" setup>
import { useDelivery } from "~/entities/delivery";

const { delivery } = useDelivery();
</script>

<template>
  <section class="mt-6 grid grid-cols-2 gap-3">
    <div class="rounded-md bg-(--color-surface-0) p-4">
      <p class="text-xs font-medium text-(--color-subtext-0)">Продукт</p>

      <p class="mt-1 truncate text-sm font-bold text-(--color-primary)">
        {{ delivery?.productName }}
      </p>
    </div>

    <div class="rounded-md bg-(--color-surface-0) p-4">
      <p class="text-xs font-medium text-(--color-subtext-0)">Магазин</p>

      <p class="mt-1 truncate text-sm font-bold text-(--color-text)">
        {{ delivery?.storeId }}
      </p>
    </div>
  </section>
</template>
