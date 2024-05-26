<template>
  <div class="layout flex flex-col min-h-screen">
    <div class="flex justify-between px-10 border border-b-black py-5">
      <div>Logo</div>
      <div class="cursor-pointer" @click="router.push(RouteNames.SEND_GIFTS)">
        Close
      </div>
    </div>
    <div class="m-auto my-0">
      <div class="mt-10">
        <UiStepper
          :activeStep="activeStep"
          :steps="steps"
          @changeActiveStep="onChangeActiveStep"
        />
      </div>
    </div>
    <div class="p-10">
      <router-view />
    </div>

    <div
      class="layout-footer flex items-center justify-center mt-auto px-10 mb-5"
    >
      <UiButton class="mr-10"> Back </UiButton>
      <UiButton>Next</UiButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { RouteNames } from "../../consts.ts";
import UiStepper from "../../components/shared/UiStepper.vue";
import { ref } from "vue";
import UiButton from "../../components/shared/UiButton.vue";

const router = useRouter();

const activeStep = ref(1);

const onChangeActiveStep = (step: number) => {
  activeStep.value = step;
};

const steps = ["Gift type", "Gift amount", "Gift collections", "Gift design"];
</script>

<style scoped></style>
