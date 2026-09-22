<script setup lang="ts">
import { CreateStoreForm } from "~/features/store-form";
import auth from '~/midlleware/auth';
import { CreateDeliveryHeader } from "~/widgets/delivery";

definePageMeta({
  middleware: auth,
});
</script>

<template>
  <CreateDeliveryHeader />
  <CreateStoreForm />
</template>
