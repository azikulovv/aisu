<script setup lang="ts">
import auth from "~/midlleware/auth";

definePageMeta({
  middleware: auth,
});
</script>

<template>
  <h1
    class="mt-6 tracking-widest font-black font-mono text-(--color-primary) text-3xl text-center"
  >
    AISU
  </h1>

  <p class="text-center text-xl">Welcome!</p>
</template>
