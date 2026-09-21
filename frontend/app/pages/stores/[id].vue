<script setup lang="ts">
import { useStore } from "~/entities/store";
import { DetailDeliveryList } from "~/widgets/delivery";
import { DetailStoreHeader, DetailStoreInfo } from "~/widgets/store";

const { loadStore } = useStore();

onMounted(async () => {
  await loadStore();
});
</script>

<template>
  <DetailStoreHeader />
  <DetailStoreInfo />
  <DetailDeliveryList class="mt-7" />
</template>
