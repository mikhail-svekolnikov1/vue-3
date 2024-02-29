<template>
  <div>
    <input
      type="text"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script setup lang="ts">
interface Props {
  modelValue: string;
}

defineProps<Props>();
</script>

<style scoped></style>
