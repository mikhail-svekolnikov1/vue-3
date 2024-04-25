<template>
  <div>
    <button @click="isModalOpen = true">Open modal</button>

    <div v-if="isModalOpen">
      <div
        @click.stop="isModalOpen = false"
        class="w-screen h-screen flex justify-center items-center absolute bg-blue-950 top-0 left-0"
      >
        <div @click.stop="" class="bg-white w-[500px] h-[300px] z-20">
          <div @click="isModalOpen = false">close</div>
          <div class="mt-40">
            <datepicker v-model="picked" :clearable="true" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Datepicker from "vue3-datepicker";
import { ref } from "vue";

const picked = ref(new Date());
const isModalOpen = ref(false);
</script>

<style scoped></style>
