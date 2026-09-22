<script setup lang="ts">
import auth from "~/midlleware/auth";
import { CreateDeliveryForm } from "~/features/delivery-form";
import { CreateDeliveryHeader } from "~/widgets/delivery";

definePageMeta({
  middleware: auth,
});
</script>

<template>
  <CreateDeliveryHeader />
  <CreateDeliveryForm />
</template>
