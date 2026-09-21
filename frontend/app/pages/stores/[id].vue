<script setup lang="ts">
import { Package, Truck } from "lucide-vue-next";
import { useStore } from "~/entities/store/composables/useStore";
import DetailStoreHeader from "~/widgets/store/ui/detail-store-header.vue";
import DetailStoreInfo from "~/widgets/store/ui/detail-store-info.vue";

const store = {
  name: "Guangzhou Trading",
  location: "Guangzhou, China",
  isActive: true,
  deliveriesCount: 24,
  productsCount: 1280,
};

const deliveries = [
  {
    id: 1,
    productName: "Apple AirPods Pro 2",
    productsCount: 120,
    isPaid: true,
    date: "21 сент.",
    time: "14:30",
  },
  {
    id: 2,
    productName: "USB-C Cable 2m",
    productsCount: 85,
    isPaid: false,
    date: "18 сент.",
    time: "11:20",
  },
  {
    id: 3,
    productName: "iPhone 15 Case",
    productsCount: 240,
    isPaid: true,
    date: "14 сент.",
    time: "16:45",
  },
  {
    id: 4,
    productName: "Wireless Charger",
    productsCount: 60,
    isPaid: true,
    date: "10 сент.",
    time: "09:15",
  },
];

const { loadStore } = useStore();

onMounted(async () => {
  await loadStore();
});
</script>

<template>
  <!-- Header -->
  <DetailStoreHeader />

  <!-- Store card -->
  <DetailStoreInfo />

  <!-- Delivery history -->
  <section class="mt-7">
    <div class="mb-3 flex items-center gap-2">
      <Truck :size="18" class="text-(--color-primary)" />

      <h2 class="text-base font-bold">История поставок</h2>
    </div>

    <div class="space-y-2">
      <article
        v-for="delivery in deliveries"
        :key="delivery.id"
        class="rounded-md border border-(--color-border) bg-(--color-surface-0) p-3.5 shadow-(--shadow-sm)"
      >
        <!-- Top -->
        <div class="flex items-start justify-between gap-3">
          <div class="min-w-0">
            <h3 class="truncate text-sm font-semibold">
              {{ delivery.productName }}
            </h3>

            <div
              class="mt-1.5 flex items-center gap-1.5 text-xs text-(--color-subtext-0)"
            >
              <Package :size="13" />

              <span> {{ delivery.productsCount }} шт. </span>
            </div>
          </div>

          <!-- Payment -->
          <span
            class="flex shrink-0 items-center gap-1.5 text-xs font-medium"
            :class="
              delivery.isPaid
                ? 'text-(--color-success)'
                : 'text-(--color-warning)'
            "
          >
            <span
              class="h-1.5 w-1.5 rounded-full"
              :class="
                delivery.isPaid
                  ? 'bg-(--color-success)'
                  : 'bg-(--color-warning)'
              "
            />

            {{ delivery.isPaid ? "Оплачено" : "Не оплачено" }}
          </span>
        </div>

        <!-- Date -->
        <div class="mt-3 text-xs text-(--color-subtext-0)">
          {{ delivery.date }}
          <span class="mx-1">·</span>
          {{ delivery.time }}
        </div>
      </article>
    </div>
  </section>
</template>
