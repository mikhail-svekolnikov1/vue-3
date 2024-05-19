<template>
  <div class="ui-card p-2 rounded-2xl transition">
    <img class="image rounded-2xl mb-2" :src="imageUrl" :alt="title" />

    <div class="font-bold">{{ title }}</div>
    <!--    <slots></slots>-->
  </div>
</template>

<script setup lang="ts">
interface Props {
  imageUrl: string;
  title: string;
}

defineProps<Props>();
</script>

<style scoped lang="scss">
.ui-card {
  &:hover {
    box-shadow: 0 0 30px 0 rgb(0 0 0 / 0.25);
  }

  .image {
    aspect-ratio: 1.4 / 1;
  }
}
</style>
