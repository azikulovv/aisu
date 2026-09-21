<script setup lang="ts">
import { BaseButton } from "~/shared/ui";
import StoreList from "~/widgets/store/ui/store-list.vue";
</script>

<template>
  <div class="space-y-3">
    <NuxtLink to="/stores/create">
      <BaseButton class="w-full cursor-pointer" variant="primary">
        Добавить магазин
      </BaseButton>
    </NuxtLink>

    <StoreList class="mt-4" />
  </div>
</template>
