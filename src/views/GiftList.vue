<template>
  <div>gift list</div>
  <div v-if="loading">loading.....</div>
  <div v-for="gift in gifts" :key="gift.id">
    {{ gift.title }}
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { createPromiseExecutor } from "../helpers.ts";
import { mockGifts } from "../mocks/gifts.ts";

const gifts = ref<{ id: number; title: string }[]>([]);
const loading = ref(false);
onMounted(async () => {
  loading.value = true;

  const fetchGiftsFn = createPromiseExecutor((resolve, reject) => {
    resolve(mockGifts);
  });

  try {
    const result = await fetchGiftsFn();
    gifts.value = result;
  } catch (error) {
    console.error("Error fetching data:", error);
  }

  loading.value = false;
});
</script>

<style scoped></style>
