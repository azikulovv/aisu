<script setup lang="ts">
import { Inbox } from "lucide-vue-next";

interface Props {
  title: string;
  description?: string;
}

withDefaults(defineProps<Props>(), {
  description: undefined,
});
</script>

<template>
  <div
    class="flex min-h-70 w-full flex-col items-center justify-center px-6 py-10 text-center"
  >
    <!-- Icon -->
    <div
      class="mb-5 flex size-14 items-center justify-center rounded-lg border border-(--color-border) bg-(--color-mantle) text-(--color-primary) shadow-(--shadow-sm)"
    >
      <Inbox :size="24" :stroke-width="1.8" />
    </div>

    <!-- Content -->
    <div class="max-w-90">
      <h3 class="font-(--font-sans) text-lg leading-[1.4] text-(--color-text)">
        {{ title }}
      </h3>

      <p
        v-if="description"
        class="mt-2 text-sm font-medium leading-normal text-(--color-subtext-0)"
      >
        {{ description }}
      </p>
    </div>

  </div>
</template>
