<script lang="ts" setup>
import { Truck } from "lucide-vue-next";
import { HistoryDeliveryCard, useDeliveries } from "~/entities/delivery";

const { deliveries, loadDeliveries } = useDeliveries();

onMounted(() => {
  loadDeliveries("storeId");
});
</script>

<template>
  <section>
    <div class="mb-3 flex items-center gap-2">
      <Truck :size="18" class="text-(--color-primary)" />

      <h2 class="text-base font-bold">История поставок</h2>
    </div>

    <div class="space-y-2">
      <template v-for="(delivery, index) in deliveries" :key="index">
        <NuxtLink :to="`/deliveries/${delivery.id}`">
          <HistoryDeliveryCard :delivery="delivery" />
        </NuxtLink>
      </template>
    </div>
  </section>
</template>
