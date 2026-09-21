<script setup lang="ts">
import { useStores } from "~/entities/store/composables/useStores";
import StoreCard from "~/entities/store/ui/store-card.vue";

const { stores } = useStores();
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
