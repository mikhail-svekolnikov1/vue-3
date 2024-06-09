<template>
  <div class="p-5 my-10 mt-0 bg-emerald-600">
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
</template>

<script setup lang="ts">
import { RouteNames } from "../consts.ts";
</script>

<style scoped></style>
