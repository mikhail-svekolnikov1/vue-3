<template>
  <div class="">
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";

import "primeicons/primeicons.css";

onMounted(async () => {
  const result = await import(`./themes/${import.meta.env.VITE_THEME}.ts`);

  const root = document.documentElement;

  root.style.setProperty("--primary-color", result.colors.primary);
  root.style.setProperty("--secondary-color", result.colors.primary);
});
</script>
