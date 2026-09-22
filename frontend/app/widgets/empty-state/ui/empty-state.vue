<script setup lang="ts">
import { Inbox } from "lucide-vue-next";

interface Props {
  title: string;
  description?: string;
  actionLabel?: string;
}

withDefaults(defineProps<Props>(), {
  description: undefined,
  actionLabel: undefined,
});

const emit = defineEmits<{
  action: [];
}>();
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

    <!-- Action -->
    <button
      v-if="actionLabel"
      type="button"
      class="mt-6 inline-flex min-h-11 items-center justify-center rounded-md bg-(--color-primary) px-4.5 text-sm font-bold text-white transition-all duration-150 hover:shadow-(--shadow-md) active:translate-y-px focus-visible:outline-3 focus-visible:outline-[rgb(30_102_245/0.2)] focus-visible:outline-offset-2"
      @click="emit('action')"
    >
      {{ actionLabel }}
    </button>
  </div>
</template>
