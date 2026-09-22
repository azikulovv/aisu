<script setup lang="ts">
import { DeliveryCard, useDeliveries } from "~/entities/delivery";
import { EmptyState } from "~/widgets/empty-state";

const { deliveries, isLoading, error, loadDeliveries } = useDeliveries();

onMounted(() => {
  loadDeliveries();
});
</script>

<template>
  <div class="space-y-2">
    <p class="text-sm font-semibold text-(--color-text)">Все доставки</p>

    <div
      v-if="isLoading"
      class="rounded-lg bg-(--color-surface-0) p-4 text-sm text-(--color-subtext-0)"
    >
      Загрузка поставок…
    </div>

    <p
      v-else-if="error"
      class="rounded-lg bg-(--color-danger)/10 p-4 text-sm text-(--color-danger)"
    >
      {{ error }}
    </p>

    <div v-else-if="deliveries.length" class="space-y-3">
      <template v-for="delivery in deliveries" :key="delivery.id">
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
