<template>
  <label :for="label" class="checkbox-label">
    <input
      :id="label"
      type="checkbox"
      v-model="model"
      :value="value"
      class="checkbox-input"
    />

    <span class="label-text">{{ label }} </span>
  </label>
</template>

<script setup>
import { computed, defineEmits } from "vue";
const props = defineProps({
  modelValue: { type: [Array, Boolean] },
  value: { type: [Boolean, Object] },
  label: { type: String },
});
const emit = defineEmits(["update:modelValue"]);
const model = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});
</script>

<style scoped>
label {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  cursor: pointer;
}

.checkbox-input {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 20px;
  height: 20px;
  border: 2px solid #333;
  border-radius: 4px;
  margin-right: 10px;
  cursor: pointer;
}

.checkbox-input:checked {
  background-color: #007bff;
  border: 2px solid #007bff;
}

.label-text {
  font-size: 16px;
}
</style>
