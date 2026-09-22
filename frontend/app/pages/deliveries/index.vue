<script setup lang="ts">
import BaseButton from "~/shared/ui/base-button.vue";
import { Deliveries } from "~/widgets/delivery";

definePageMeta({
  middleware: "auth",
});
</script>

<template>
  <div class="space-y-3">
    <NuxtLink to="/deliveries/create">
      <BaseButton class="w-full cursor-pointer" variant="primary">
        Создать доставку
      </BaseButton>
    </NuxtLink>

    <Deliveries class="mt-4" />
  </div>
</template>
