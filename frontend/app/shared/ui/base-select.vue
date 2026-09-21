<script setup lang="ts">
interface SelectOption {
  label: string;
  value: string | number;
}

interface Props {
  modelValue?: string | number;
  label?: string;
  placeholder?: string;
  options: SelectOption[];
  disabled?: boolean;
  error?: string;
}

withDefaults(defineProps<Props>(), {
  modelValue: "",
  label: "",
  placeholder: "Выберите значение",
  disabled: false,
  error: "",
});

const emit = defineEmits<{
  "update:modelValue": [value: string];
}>();
</script>

<template>
  <div class="w-full font-(--font-sans)">
    <!-- Label -->
    <label
      v-if="label"
      class="mb-1.5 block text-sm font-medium text-(--color-text)"
    >
      {{ label }}
    </label>

    <!-- Select -->
    <div class="relative">
      <select
        :value="modelValue"
        :disabled="disabled"
        class="h-11 w-full appearance-none rounded-md border border-(--color-border) bg-(--color-surface-0) px-3.5 pr-10 text-sm font-medium text-(--color-text) outline-none transition duration-150 focus:border-(--color-primary) focus:ring-2 focus:ring-(--color-primary)/10 disabled:cursor-not-allowed disabled:opacity-50"
        @change="
          emit('update:modelValue', ($event.target as HTMLSelectElement).value)
        "
      >
        <option value="" disabled>
          {{ placeholder }}
        </option>

        <option
          v-for="option in options"
          :key="option.value"
          :value="option.value"
        >
          {{ option.label }}
        </option>
      </select>

      <!-- Arrow -->
      <svg
        class="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-(--color-subtext-0)"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="m6 9 6 6 6-6" />
      </svg>
    </div>

    <!-- Error -->
    <p v-if="error" class="mt-1.5 text-xs font-medium text-(--color-danger)">
      {{ error }}
    </p>
  </div>
</template>
