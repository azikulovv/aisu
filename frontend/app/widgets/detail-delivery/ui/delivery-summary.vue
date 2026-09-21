<script lang="ts" setup>
import { useDelivery } from "~/entities/delivery";

const { delivery } = useDelivery();
</script>

<template>
  <section class="mt-6 grid grid-cols-2 gap-3">
    <div class="rounded-md bg-(--color-surface-0) p-4">
      <p class="text-xs font-medium text-(--color-subtext-0)">Товаров</p>

      <p class="mt-1 text-2xl font-bold text-(--color-primary)">
        {{ delivery?.productsCount }}
      </p>
    </div>

    <div class="rounded-md bg-(--color-surface-0) p-4">
      <p class="text-xs font-medium text-(--color-subtext-0)">Позиций</p>

      <p class="mt-1 text-2xl font-bold text-(--color-text)">
        {{}}
      </p>
    </div>
  </section>
</template>
