<script lang="ts" setup>
import { Truck } from "lucide-vue-next";
import { HistoryDeliveryCard, useDeliveries } from "~/entities/delivery";
import { EmptyState } from "~/widgets/empty-state";

const { deliveries, loadDeliveries } = useDeliveries();

onMounted(() => {
  loadDeliveries();
});
</script>

<template>
  <section>
    <div class="mb-3 flex items-center gap-2">
      <Truck :size="18" class="text-(--color-primary)" />

      <h2 class="text-base font-bold">История поставок</h2>
    </div>

    <div class="space-y-2" v-if="deliveries.length">
      <template v-for="(delivery, index) in deliveries" :key="index">
        <NuxtLink :to="`/deliveries/${delivery.id}`">
          <HistoryDeliveryCard :delivery="delivery" />
        </NuxtLink>
      </template>
    </div>

    <EmptyState
      v-else
      title="У вас пока нет доставок"
      description="Создайте первую доставку"
    />
  </section>
</template>
