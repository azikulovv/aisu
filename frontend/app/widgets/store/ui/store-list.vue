<script setup lang="ts">
import { StoreCard, useStores } from "~/entities/store";
import EmptyState from "~/widgets/empty-state/ui/empty-state.vue";

const { stores, loadStores } = useStores();

onMounted(() => {
  loadStores();
});
</script>

<template>
  <div class="space-y-2" v-if="stores.length">
    <p class="text-sm font-semibold text-(--color-text)">Все магазины</p>

    <div class="space-y-3">
      <template v-for="(store, index) in stores" :key="index">
        <NuxtLink :to="`/stores/${store.name}`" class="block">
          <StoreCard :store="store" />
        </NuxtLink>
      </template>
    </div>
  </div>

  <EmptyState
    v-else
    :title="'У вас пока нет магазинов'"
    :description="'Создайте первый магазин, чтобы начать добавлять поставки.'"
  />
</template>
