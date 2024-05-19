<template>
  <div
    class="inline-block border border-blue-200 p-2 px-6 rounded-2xl cursor-pointer hover:bg-blue-800 hover:text-white active:bg-blue-950 transition ease-in-out duration-300"
    :class="`btn btn--size-${size}`"
  >
    <button>
      <slot />
    </button>
  </div>
</template>

<script setup lang="ts">
interface Props {
  type: "primary" | "secondary";
  size: "small" | "medium" | "big";
}
const props = withDefaults(defineProps<Props>(), {
  type: "primary",
  size: "medium",
});
</script>

<style scoped lang="scss">
.btn {
  &--size-small {
    padding: 10px 20px;
  }

  &--size-medium {
    padding: 20px 40px;
  }

  &--size-big {
    padding: 30px 60px;
  }
}
</style>
