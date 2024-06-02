<template>
  <div
    class="w-full flex gap-1 flex-wrap p-3 border border-black max-w-[500px]"
  >
    <div
      v-for="tip in tips"
      class="p-2 inline-flex flex-0 bg-amber-100 rounded-2xl"
    >
      {{ tip }}
      <span class="ml-2">X</span>
    </div>
    <input
      v-model="inputValue"
      placeholder="Enter name"
      class="inline-flex flex-auto outline-0"
      type="text"
      @keydown.enter="onAddTip"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const inputValue = ref<string>("");
const tips = ref<string[]>(["John Smith", "Smith"]);

const onAddTip = () => {
  tips.value.push(inputValue.value);
  inputValue.value = "";
};
</script>

<style scoped></style>
