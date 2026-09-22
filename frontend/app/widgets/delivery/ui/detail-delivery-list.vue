<script lang="ts" setup>
import { Truck } from "lucide-vue-next";
import { HistoryDeliveryCard } from "~/entities/delivery";
import type { Delivery } from "~/entities/delivery/domain/types";
import { EmptyState } from "~/widgets/empty-state";

defineProps<{ deliveries: Delivery[] }>();
</script>

<template>
  <section>
    <div class="mb-3 flex items-center gap-2">
      <Truck :size="18" class="text-(--color-primary)" />

      <h2 class="text-base font-bold">История поставок</h2>
    </div>

    <div class="space-y-2" v-if="deliveries.length">
      <template v-for="delivery in deliveries" :key="delivery.id">
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
