<template>
  <div class="stepper">
    <div
      v-for="(step, index) in steps"
      :key="index"
      class="step"
      :class="{
        active: index + 1 === activeStep,
        completed: index + 1 < activeStep,
      }"
    >
      <div @click="onChangeStep(index + 1)" class="circle">{{ index + 1 }}</div>
      <div @click="onChangeStep(index + 1)" class="label">{{ step }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  steps: string[];
  activeStep: number;
}

interface Emits {
  (e: "changeActiveStep", activeStep: number): void;
}
defineProps<Props>();
const emits = defineEmits<Emits>();

const onChangeStep = (activeStep: number) => {
  emits("changeActiveStep", activeStep);
};
</script>

<style scoped>
.stepper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.step {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin: 0 10px;
}

.circle {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  color: #fff;
  z-index: 3;
  cursor: pointer;
  overflow: hidden;
}

.label {
  margin-top: 5px;
  text-align: center;
  cursor: pointer;
}

.active .circle {
  background-color: #42b983;
}

.step:not(:last-child)::after {
  content: "";
  position: absolute;
  top: 25%;
  left: 40px;
  width: 130%;
  height: 2px;
  background-color: #ccc;
  transform: translateY(-50%);
  z-index: 1;
}

.completed.step .circle {
  background-color: #42b983;
}

.active.step .label,
.completed.step .label {
  color: #42b983;
}

.completed.step::after {
  background-color: #42b983;
}
</style>
