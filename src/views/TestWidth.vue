<template>
  <!--  <div class="max-w-[1140px] h bg-emerald-600 f">-->
  <!--    <div class="w-full bg-amber-300 p-20">Inside div</div>-->
  <!--  </div>-->

  <div>
    <MyInput v-model="testValue" />
    <div>{{ testValue }}</div>
  </div>
</template>

<script setup lang="ts">
import MyInput from "../components/shared/MyInput.vue";
import { ref } from "vue";

const testValue = ref("cat");
</script>

<style scoped></style>
