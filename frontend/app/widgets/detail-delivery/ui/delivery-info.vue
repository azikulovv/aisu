<script setup lang="ts">
import { Check, Clock3, X } from "lucide-vue-next";
import { useDelivery } from "~/entities/delivery";

const { delivery, isUpdatingPayment, updatePayment } = useDelivery();

const togglePayment = () => {
  if (delivery.value) {
    void updatePayment(!delivery.value.isPaid);
  }
};
</script>

<template>
  <section class="mt-6">
    <div class="flex items-start justify-between gap-4">
      <div class="min-w-0">
        <p class="text-xs font-medium text-(--color-subtext-0)">Поставка</p>

        <h1 class="mt-1 text-xl font-bold tracking-tight text-(--color-text)">
          {{ delivery?.storeName }}
        </h1>
      </div>

      <button
        type="button"
        role="switch"
        :aria-checked="delivery?.isPaid"
        :disabled="isUpdatingPayment"
        class="flex shrink-0 items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold"
        :class="
          delivery?.isPaid
            ? 'bg-(--color-success)/10 text-(--color-success)'
            : 'bg-(--color-danger)/10 text-(--color-danger)'
        "
        @click="togglePayment"
      >
        <template v-if="delivery?.isPaid">
          <Check :size="13" />
          Оплачено
        </template>
        <template v-else>
          <X :size="13" />
          Не оплачено
        </template>
      </button>
    </div>

    <div class="mt-5 flex items-center gap-3 text-sm">
      <div
        class="flex h-9 w-9 items-center justify-center rounded-[10px] bg-(--color-surface-1) text-(--color-subtext-1)"
      >
        <Clock3 :size="17" />
      </div>

      <div>
        <p class="font-medium text-(--color-text)">
          {{ delivery?.createdAt }}
        </p>

        <p class="mt-0.5 text-xs text-(--color-subtext-0)">Дата создания</p>
      </div>
    </div>
  </section>
</template>
