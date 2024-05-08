<template>
  <div
    class="inline-block border border-blue-200 p-2 px-6 rounded-2xl cursor-pointer hover:bg-blue-800 hover:text-white active:bg-blue-950 transition ease-in-out duration-300"
  >
    <button>
      <slot />
    </button>
  </div>
</template>

<script setup lang="ts">
interface Props {
  type: "primary" | "secondary";
}
const props = withDefaults(defineProps<Props>(), {
  type: "primary",
});
</script>

<style scoped></style>
