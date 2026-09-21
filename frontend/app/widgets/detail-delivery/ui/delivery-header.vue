<script setup lang="ts">
import { ArrowLeft } from "lucide-vue-next";
import { BaseButton } from "~/shared/ui";
</script>

<template>
  <header class="flex items-center justify-between">
    <BaseButton
      aria-label="Назад"
      :variant="'ghost'"
      :size="'sm'"
      @click="navigateTo('/deliveries')"
    >
      <ArrowLeft :size="20" />
    </BaseButton>

    <!-- <div class="flex items-center gap-1">
      <BaseButton variant="ghost" size="sm" aria-label="Редактировать">
        <Pencil :size="17" />
      </BaseButton>

      <BaseButton variant="ghost" size="sm" aria-label="Удалить">
        <Trash2 :size="17" />
      </BaseButton>
    </div> -->
  </header>
</template>
