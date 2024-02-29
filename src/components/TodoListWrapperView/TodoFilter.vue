<template>
  <div class="p-10">
    <h1 class="text-2xl">Filter</h1>
    <MyInput2 v-model="search" :placeholder="'search'" />
    <button
      class="p-3 border border-e-red-50 rounded-lg bg-amber-300 text-fuchsia-700"
      @click="$emit('applyFilter', search)"
    >
      submit
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import MyInput2 from "../shared/MyInput2.vue";

defineEmits<{ (e: "applyFilter", value: string): void }>();

const search = ref("");
</script>

<style scoped></style>
