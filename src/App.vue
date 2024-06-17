<template>
  <div class="">
    <!--    <router-view></router-view>-->

    <div class="container-test">
      <IconDynamicBG mainColor="#4E004A" secondColor="#6E326B" />
      <!-- Остальное содержимое страницы -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";

import "primeicons/primeicons.css";
import IconDynamicBG from "./IconDynamicBG.vue";

onMounted(async () => {
  const result = await import(`./themes/${import.meta.env.VITE_THEME}.ts`);

  const root = document.documentElement;

  root.style.setProperty("--primary-color", result.colors.primary);
  root.style.setProperty("--secondary-color", result.colors.primary);
});
</script>

<style scoped>
.container-test {
  position: relative;
  width: 100vw;
  height: 100vh;
}
</style>
