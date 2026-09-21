<script setup lang="ts">
import { DeliveryCard, useDeliveries } from "~/entities/delivery";

const { deliveries } = useDeliveries();
</script>

<template>
  <div class="space-y-2">
    <p class="text-sm font-semibold text-(--color-text)">Все доставки</p>

    <div class="space-y-3">
      <template v-for="(delivery, index) in deliveries" :key="index">
        <NuxtLink :to="`/deliveries/${delivery.productName}`" class="block">
          <DeliveryCard :delivery="delivery" />
        </NuxtLink>
      </template>
    </div>
  </div>
</template>
