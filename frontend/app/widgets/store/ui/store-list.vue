<script setup lang="ts">
import { StoreCard, useStores } from "~/entities/store";
import { EmptyState } from "~/widgets/empty-state";

const { stores, isLoading, error, loadStores } = useStores();

onMounted(() => {
  loadStores();
});
</script>

<template>
  <div
    v-if="isLoading"
    class="rounded-lg bg-(--color-surface-0) p-4 text-sm text-(--color-subtext-0)"
  >
    Загрузка магазинов…
  </div>

  <p
    v-else-if="error"
    class="rounded-lg bg-(--color-danger)/10 p-4 text-sm text-(--color-danger)"
  >
    {{ error }}
  </p>

  <div v-else-if="stores.length" class="space-y-2">
    <p class="text-sm font-semibold text-(--color-text)">Все магазины</p>

    <div class="space-y-3">
      <template v-for="store in stores" :key="store.id">
        <NuxtLink :to="`/stores/${store.id}`" class="block">
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
