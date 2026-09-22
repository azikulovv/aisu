<script setup lang="ts">
import { useDelivery } from "~/entities/delivery";
import auth from '~/midlleware/auth';
import {
  DeliveryHeader,
  DeliveryInfo,
  DeliverySummary,
} from "~/widgets/detail-delivery";

definePageMeta({
  middleware: auth,
});

const { loadDelivery } = useDelivery();

onMounted(() => {
  loadDelivery("deliveryId");
});
</script>

<template>
  <DeliveryHeader />
  <DeliveryInfo />
  <DeliverySummary />

  <!-- Products
  <section class="mt-8">
    <div class="flex items-center justify-between">
      <h2 class="text-base font-bold text-(--color-text)">Товары</h2>

      <span class="text-xs font-medium text-(--color-subtext-0)">
        {{ delivery.products.length }} позиции
      </span>
    </div>

    <div
      class="mt-3 divide-y divide-(--color-border) overflow-hidden rounded-md border border-(--color-border) bg-[var(--color-surface-0)]"
    >
      <div class="flex items-center justify-between gap-4 px-4 py-3.5">
        <div class="flex min-w-0 items-center gap-3">
          <div
            class="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-(--color-base) text-(--color-subtext-1)"
          >
            <Package :size="17" />
          </div>

          <p class="truncate text-sm font-medium text-(--color-text)">
            {{ "product.name" }}
          </p>
        </div>

        <span class="shrink-0 text-sm font-bold text-(--color-text)">
          × {{ "product.quantity" }}
        </span>
      </div>
    </div>
  </section> -->
</template>
