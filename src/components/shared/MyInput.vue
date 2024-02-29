<template>
  <div>
    <div>My input</div>
    <input
      type="text"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target?.value)"
    />
  </div>
</template>

<script setup lang="ts">
interface Props {
  modelValue: string;
}

defineProps<Props>();
defineEmits<{ (e: "update:modelValue", value: string): void }>();
</script>

<style scoped></style>
