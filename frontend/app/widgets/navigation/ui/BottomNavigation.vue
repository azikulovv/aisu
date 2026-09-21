<script setup lang="ts">
import { Home, Package } from "lucide-vue-next";

const items = [
  {
    icon: Home,
    to: "/",
    label: "Главная",
  },
  {
    icon: Package,
    to: "/deliveries",
    label: "Поставки",
  },
  // {
  //   icon: Boxes,
  //   to: "/products",
  //   label: "Товары",
  // },
  // {
  //   icon: UserRound,
  //   to: "/profile",
  //   label: "Профиль",
  // },
];
</script>

<template>
  <nav
    class="fixed bottom-4 left-1/2 z-50 -translate-x-1/2 rounded-[20px] border border-(--color-border) bg-(--color-surface-0) p-1.5 font-(--font-sans) shadow-(--shadow-md) w-[calc(100%-(--spacing(4)*2))]"
    aria-label="Основная навигация"
  >
    <div class="flex items-center gap-1 w-full">
      <NuxtLink
        v-for="item in items"
        :key="item.to"
        :to="item.to"
        :aria-label="item.label"
        class="flex h-11 w-full items-center justify-center rounded-[14px] text-(--color-subtext-0) transition-all duration-150 hover:bg-(--color-base) hover:text-(--color-text) active:scale-95"
        active-class="
          bg-[var(--color-base)]
          text-[var(--color-primary)]
        "
      >
        <component :is="item.icon" :size="20" :stroke-width="2" />
      </NuxtLink>
    </div>
  </nav>
</template>
