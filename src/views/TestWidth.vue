<template>
  <div class="p-10 my-10 bg-emerald-600 rounded-xl">
    <div>
      <div
        class="bg-amber-300 inline-block p-5 rounded-2xl cursor-pointer hover:bg-amber-400 transition mr-10"
      >
        <router-link :to="RouteNames.SEND_GIFTS"
          >To {{ RouteNames.SEND_GIFTS }}</router-link
        >
      </div>

      <div
        class="bg-amber-300 inline-block p-5 rounded-2xl cursor-pointer hover:bg-amber-400 transition"
      >
        <router-link :to="RouteNames.MENTIONS"
          >To {{ RouteNames.MENTIONS }}</router-link
        >
      </div>
    </div>
  </div>

  <div>
    <MultiInput />
  </div>
</template>

<script setup lang="ts">
import MyInput from "../components/shared/MyInput.vue";
import { ref } from "vue";
import { RouteNames } from "../consts.ts";
import MultiInput from "../components/shared/MultiInput.vue";

const testValue = ref("cat");
</script>

<style scoped></style>
