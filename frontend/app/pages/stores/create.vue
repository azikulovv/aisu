<script setup lang="ts">
import { CreateStoreForm } from "~/features/store-form";
import { CreateStoreHeader } from "~/widgets/store";

definePageMeta({
  middleware: "auth",
});
</script>

<template>
  <CreateStoreHeader />
  <CreateStoreForm />
</template>
