<script setup lang="ts">
import BottomNavigation from "~/widgets/navigation/ui/BottomNavigation.vue";
</script>

<template>
  <div class="min-h-screen bg-(--color-base) pt-4 px-4 pb-24 mx-auto max-w-md">
    <slot />
  </div>

  <BottomNavigation />
</template>
