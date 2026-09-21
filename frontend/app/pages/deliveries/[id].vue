<script setup lang="ts">
import {
  ArrowLeft,
  Check,
  Clock3,
  Package,
  Pencil,
  Trash2,
} from "lucide-vue-next";
import BaseButton from "~/shared/ui/base-button.vue";

const delivery = {
  id: "DLV-00124",
  companyName: "Guangzhou Trading Co.",
  deliveredAt: "21 сентября 2026",
  deliveredTime: "14:30",
  isPaid: true,
  products: [
    {
      id: 1,
      name: "Apple AirPods Pro 2",
      quantity: 120,
    },
    {
      id: 2,
      name: "USB-C кабель 2m",
      quantity: 80,
    },
    {
      id: 3,
      name: "iPhone 15",
      quantity: 15,
    },
  ],
};

const totalProducts = computed(() =>
  delivery.products.reduce((total, product) => total + product.quantity, 0),
);
</script>

<template>
  <main
    class="min-h-screen bg-[var(--color-base)] pb-28 font-[var(--font-sans)]"
  >
    <div class="mx-auto w-full max-w-lg px-4 pt-5">
      <!-- Header -->
      <header class="flex items-center justify-between">
        <button
          type="button"
          aria-label="Назад"
          class="flex h-10 w-10 items-center justify-center rounded-full text-[var(--color-subtext-1)] transition hover:bg-[var(--color-mantle)] hover:text-[var(--color-text)] active:scale-95"
          @click="navigateTo('/deliveries')"
        >
          <ArrowLeft :size="20" />
        </button>

        <div class="flex items-center gap-1">
          <BaseButton variant="ghost" size="sm" aria-label="Редактировать">
            <Pencil :size="17" />
          </BaseButton>

          <BaseButton variant="ghost" size="sm" aria-label="Удалить">
            <Trash2 :size="17" />
          </BaseButton>
        </div>
      </header>

      <!-- Delivery info -->
      <section class="mt-6">
        <div class="flex items-start justify-between gap-4">
          <div class="min-w-0">
            <p class="text-xs font-medium text-[var(--color-subtext-0)]">
              Поставка
            </p>

            <h1
              class="mt-1 text-xl font-bold tracking-tight text-[var(--color-text)]"
            >
              {{ delivery.companyName }}
            </h1>
          </div>

          <span
            class="flex shrink-0 items-center gap-1.5 rounded-full bg-[var(--color-success)]/10 px-2.5 py-1 text-xs font-semibold text-[var(--color-success)]"
          >
            <Check :size="13" />
            Оплачено
          </span>
        </div>

        <!-- Date -->
        <div class="mt-5 flex items-center gap-3 text-sm">
          <div
            class="flex h-9 w-9 items-center justify-center rounded-[10px] bg-[var(--color-surface-1)] text-[var(--color-subtext-1)]"
          >
            <Clock3 :size="17" />
          </div>

          <div>
            <p class="font-medium text-[var(--color-text)]">
              {{ delivery.deliveredAt }}
            </p>

            <p class="mt-0.5 text-xs text-[var(--color-subtext-0)]">
              {{ delivery.deliveredTime }}
            </p>
          </div>
        </div>
      </section>

      <!-- Summary -->
      <section class="mt-6 grid grid-cols-2 gap-3">
        <div class="rounded-[var(--radius-md)] bg-[var(--color-surface-0)] p-4">
          <p class="text-xs font-medium text-[var(--color-subtext-0)]">
            Товаров
          </p>

          <p class="mt-1 text-2xl font-bold text-[var(--color-primary)]">
            {{ totalProducts }}
          </p>
        </div>

        <div class="rounded-[var(--radius-md)] bg-[var(--color-surface-0)] p-4">
          <p class="text-xs font-medium text-[var(--color-subtext-0)]">
            Позиций
          </p>

          <p class="mt-1 text-2xl font-bold text-[var(--color-text)]">
            {{ delivery.products.length }}
          </p>
        </div>
      </section>

      <!-- Products -->
      <section class="mt-8">
        <div class="flex items-center justify-between">
          <h2 class="text-base font-bold text-[var(--color-text)]">Товары</h2>

          <span class="text-xs font-medium text-[var(--color-subtext-0)]">
            {{ delivery.products.length }} позиции
          </span>
        </div>

        <div
          class="mt-3 divide-y divide-[var(--color-border)] overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface-0)]"
        >
          <div
            v-for="product in delivery.products"
            :key="product.id"
            class="flex items-center justify-between gap-4 px-4 py-3.5"
          >
            <div class="flex min-w-0 items-center gap-3">
              <div
                class="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-[var(--color-base)] text-[var(--color-subtext-1)]"
              >
                <Package :size="17" />
              </div>

              <p class="truncate text-sm font-medium text-[var(--color-text)]">
                {{ product.name }}
              </p>
            </div>

            <span class="shrink-0 text-sm font-bold text-[var(--color-text)]">
              × {{ product.quantity }}
            </span>
          </div>
        </div>
      </section>

      <!-- Bottom action -->
      <div class="mt-6">
        <BaseButton variant="secondary" class="w-full">
          <Pencil :size="17" />
          Редактировать поставку
        </BaseButton>
      </div>
    </div>
  </main>
</template>
