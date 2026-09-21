<script setup lang="ts">
import { StoreCard, useStores } from "~/entities/store";

const { stores, loadStores } = useStores();

onMounted(() => {
  loadStores();
});
</script>

<template>
  <div class="space-y-2">
    <p class="text-sm font-semibold text-(--color-text)">Все магазины</p>

    <div class="space-y-3">
      <template v-for="(store, index) in stores" :key="index">
        <NuxtLink :to="`/stores/${store.name}`" class="block">
          <StoreCard :store="store" />
        </NuxtLink>
      </template>
    </div>
  </div>
</template>
