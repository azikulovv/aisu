<script setup lang="ts">
import { useStore } from "~/entities/store";
import { DetailDeliveryList } from "~/widgets/delivery";
import { DetailStoreHeader, DetailStoreInfo } from "~/widgets/store";

definePageMeta({
  middleware: "auth",
});

const route = useRoute();
const { store, isLoading, error, loadStore } = useStore();

onMounted(async () => {
  await loadStore(route.params.id as string);
});
</script>

<template>
  <DetailStoreHeader />

  <div
    v-if="isLoading"
    class="rounded-lg bg-(--color-surface-0) p-4 text-sm text-(--color-subtext-0)"
  >
    Загрузка магазина…
  </div>

  <p
    v-else-if="error"
    class="rounded-lg bg-(--color-danger)/10 p-4 text-sm text-(--color-danger)"
  >
    {{ error }}
  </p>

  <template v-else-if="store">
    <DetailStoreInfo />
    <DetailDeliveryList
      :deliveries="store.deliveries"
      class="mt-7"
    />
  </template>
</template>
