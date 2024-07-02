<template>
  <Carousel :items-to-show="1" :wrap-around="true">
    <Slide v-for="slide in 10" :key="slide">
      <div class="carousel__item">
        <div class="rounded-xl">
          <div class="">
            <!--        <img :src="gift.coverUrl" alt="gift" />-->
            <img src="../assets/mock-gift.png" alt="gift" />
          </div>
          <div
            class="pt-5 text-start px-[15px] pb-[15px] border border-gray-02 border-t-transparent rounded-b-xl"
          >
            <div class="mb-1 font-semibold text-lg">cat cat cat</div>
            <div class="mb-[16px] font-normal text-sm">from cat</div>
            <div class="h-[1px] bg-gray-02 mb-[21px]" />
            <div class="flex justify-between items-center">
              <div class="font-medium">Balance 100$</div>
              <button class="!min-w-[90px]">View</button>
            </div>
          </div>
        </div>
      </div>
    </Slide>

    <!--    <template #addons>-->
    <!--      <Navigation />-->
    <!--    </template>-->
  </Carousel>
</template>

<script setup lang="ts">
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
</script>

<style scoped></style>
