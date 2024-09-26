<template>
  <div class="w-screen h-screen relative overflow-hidden bg-gray-200 p-10">
    <div class="flex justify-between gap-10">
      <div
        v-for="item in arr"
        :key="item.src"
        class="flex justify-center items-center flex-1 bg-white py-5"
      >
        <div class="w-1/3 min-w-[65px]">
          <img :src="item.src" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { DotLottieVue } from "@lottiefiles/dotlottie-vue";

import "primeicons/primeicons.css";

const arr = [
  { src: new URL("./assets/birthday.png", import.meta.url).href },
  { src: new URL("./assets/holiday.png", import.meta.url).href },
  { src: new URL("./assets/anniversary.png", import.meta.url).href },
  { src: new URL("./assets/send-gift.png", import.meta.url).href },
];

onMounted(async () => {
  const result = await import(`./themes/${import.meta.env.VITE_THEME}.ts`);

  const root = document.documentElement;

  root.style.setProperty("--primary-color", result.colors.primary);
  root.style.setProperty("--secondary-color", result.colors.primary);
});
</script>

<style scoped>
.animation-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  transform: scale(1.2);
}
</style>
