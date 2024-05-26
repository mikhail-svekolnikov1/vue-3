<template>
  <div
    class="ui-card p-2 rounded-2xl transition"
    @mouseover="isCardHovered = true"
    @mouseleave="isCardHovered = false"
  >
    <img
      class="image rounded-2xl mb-2 cursor-pointer"
      :src="imageUrl"
      :alt="title"
    />

    <div class="font-bold">{{ title }}</div>
    <div v-if="isCardHovered">
      <slot name="footer"></slot>
    </div>
    <div v-else-if="$slots.footer && !isCardHovered" class="min-h-[24px]"></div>
  </div>
</template>

<script setup lang="ts" generic="T extends { id: number }">
import { ref } from "vue";

interface Props {
  imageUrl: string;
  title: string;
  item: T;
}

defineProps<Props>();

const isCardHovered = ref(false);
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
