<template>
  <div>
    <div>My input</div>
    <input
      type="text"
      v-model="model"
      :placeholder="placeholder"
      class="p-2 my-4 rounded-lg text-black"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

interface Props {
  modelValue: string;
  placeholder: string;
}

interface Emits {
  (e: "update:modelValue", value: string): void;
}

const props = defineProps<Props>();
const emits = defineEmits<Emits>();

const model = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emits("update:modelValue", value);
  },
});
</script>

<style scoped></style>
