<template>
  <div class="w-screen h-screen relative overflow-hidden">
    <DotLottieVue
      class="animation-container w-[150%] h-[150%]"
      autoplay
      :src="'/src/anime.json'"
      ref="playerRef"
    />

    <button
      class="border border-black px-5 py-2 m-10 hover:bg-amber-100 cursor-pointer"
      @click="alert('test')"
      ref="buttonRef"
    >
      click
    </button>
    <!--    src="/src/video.mp4"-->
    <!--    <video controls autoplay>-->
    <!--      <source src="/src/video.mp4" type="video/mp4" />-->
    <!--    </video>-->
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { DotLottieVue } from "@lottiefiles/dotlottie-vue";

import "primeicons/primeicons.css";

const playerRef = ref(null);
const buttonRef = ref(null);

onMounted(async () => {
  ////////////////////////////////////
  if (playerRef.value) {
    const dotLottie = playerRef.value.getDotLottieInstance();

    dotLottie.addEventListener("complete", () => {
      const element = document.querySelector(".animation-container");
      element.remove();
    });
  }
  ////////////////////////////////////

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
