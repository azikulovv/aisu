<script setup lang="ts">
interface Props {
  type?: string;
  label?: string;
  error?: string;
  disabled?: boolean;
  modelValue?: string;
  placeholder?: string;
}

withDefaults(defineProps<Props>(), {
  type: "text",
  error: "",
  disabled: false,
  modelValue: "",
  placeholder: "",
});

const emit = defineEmits<{
  "update:modelValue": [value: string];
}>();
</script>

<template>
  <div class="w-full font-(--font-sans)">
    <label
      v-if="label"
      class="mb-1.5 block text-sm font-medium text-(--color-text)"
    >
      {{ label }}
    </label>

    <input
      :type="type"
      :value="modelValue"
      :disabled="disabled"
      :placeholder="placeholder"
      class="h-11 w-full rounded-md border border-(--color-border) bg-(--color-surface-0) px-3.5 text-sm font-medium text-(--color-text) outline-none placeholder:text-(--color-subtext-0) transition duration-150 focus:border-(--color-primary) focus:ring-2 focus:ring-(--color-primary)/10 disabled:cursor-not-allowed disabled:opacity-50"
      @input="
        emit('update:modelValue', ($event.target as HTMLInputElement).value)
      "
    />

    <p v-if="error" class="mt-1.5 text-xs font-medium text-(--color-danger)">
      {{ error }}
    </p>
  </div>
</template>
