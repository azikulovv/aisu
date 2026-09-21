<script setup lang="ts">
import type { ButtonHTMLAttributes } from "vue";

type ButtonVariant = "primary" | "secondary" | "danger" | "ghost";

type ButtonSize = "sm" | "md" | "lg";

interface Props {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  disabled?: boolean;
  type?: ButtonHTMLAttributes["type"];
}

withDefaults(defineProps<Props>(), {
  variant: "primary",
  size: "md",
  loading: false,
  disabled: false,
  type: "button",
});
</script>

<template>
  <button
    :type="type"
    :disabled="disabled || loading"
    class="inline-flex items-center justify-center gap-2 rounded-[var(--radius-md)] font-[var(--font-sans)] font-semibold outline-none transition-all duration-150 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50 focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]/20"
    :class="[
      {
        /* Sizes */
        'h-9 px-3 text-xs': size === 'sm',
        'h-11 px-4 text-sm': size === 'md',
        'h-12 px-5 text-sm': size === 'lg',

        /* Primary */
        'bg-[var(--color-primary)] text-white hover:brightness-95':
          variant === 'primary',

        /* Secondary */
        'border border-[var(--color-border)] bg-[var(--color-surface-0)] text-[var(--color-text)] hover:bg-[var(--color-base)]':
          variant === 'secondary',

        /* Danger */
        'bg-[var(--color-danger)] text-white hover:brightness-95':
          variant === 'danger',

        /* Ghost */
        'bg-transparent text-[var(--color-subtext-1)] hover:bg-[var(--color-mantle)] hover:text-[var(--color-text)]':
          variant === 'ghost',
      },
    ]"
  >
    <!-- Loading -->
    <svg
      v-if="loading"
      class="h-4 w-4 animate-spin"
      viewBox="0 0 24 24"
      fill="none"
    >
      <circle
        class="opacity-25"
        cx="12"
        cy="12"
        r="9"
        stroke="currentColor"
        stroke-width="3"
      />

      <path
        class="opacity-75"
        d="M21 12a9 9 0 0 1-9 9"
        stroke="currentColor"
        stroke-width="3"
        stroke-linecap="round"
      />
    </svg>

    <!-- Content -->
    <span>
      <slot />
    </span>
  </button>
</template>
