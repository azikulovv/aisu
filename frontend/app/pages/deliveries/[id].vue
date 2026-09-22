<script setup lang="ts">
import { useDelivery } from "~/entities/delivery";
import {
  DeliveryHeader,
  DeliveryInfo,
  DeliverySummary,
} from "~/widgets/detail-delivery";

definePageMeta({
  middleware: "auth",
});

const { delivery, error, isLoading, loadDelivery } = useDelivery();
const route = useRoute();

onMounted(async () => {
  await loadDelivery(route.params.id as string);
});
</script>

<template>
  <DeliveryHeader />
  <div
    v-if="isLoading"
    class="rounded-lg bg-(--color-surface-0) p-4 text-sm text-(--color-subtext-0)"
  >
    Загрузка поставки…
  </div>

  <div
    v-else-if="error"
    class="rounded-lg bg-(--color-danger)/10 p-4 text-sm text-(--color-danger)"
  >
    {{ error }}
  </div>

  <div v-else-if="delivery" class="space-y-6">
    <DeliveryInfo />
    <DeliverySummary />
  </div>
</template>
