<script setup lang="ts">
import { DeliveryCard, useDeliveries } from "~/entities/delivery";
import { EmptyState } from "~/widgets/empty-state";

const { deliveries, loadDeliveries } = useDeliveries();

onMounted(() => {
  loadDeliveries();
});
</script>

<template>
  <div class="space-y-2">
    <p class="text-sm font-semibold text-(--color-text)">Все доставки</p>

    <div class="space-y-3" v-if="deliveries.length">
      <template v-for="(delivery, index) in deliveries" :key="index">
        <NuxtLink :to="`/deliveries/${delivery.id}`" class="block">
          <DeliveryCard :delivery="delivery" />
        </NuxtLink>
      </template>
    </div>

    <EmptyState
      v-else
      title="У вас пока нет доставок"
      description="Создайте первую доставку"
    />
  </div>
</template>
