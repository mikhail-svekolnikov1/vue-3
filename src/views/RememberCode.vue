<template>
  <div>
    <h1>RememberCode</h1>
    <div class="flex">
      <div
        v-for="item in items"
        :key="item.id"
        class="bg-amber-100 px-5 py-2 m-5"
      >
        {{ item.title }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const items = [
  { id: 1, title: "misha-1" },
  { id: 2, title: "misha-2" },
  { id: 3, title: "misha-3" },
  { id: 4, title: "misha-4" },
];
</script>

<style scoped></style>
