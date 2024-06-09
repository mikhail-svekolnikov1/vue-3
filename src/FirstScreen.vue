<template>
  <div>
    <MainHeader />

    <UiTable columns="" data-source=""
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { RouteNames } from "./consts.ts";
import MainHeader from "./components/MainHeader.vue";
import UiTable from "./components/shared/UiTable/UiTable.vue";
</script>

<style scoped lang="scss"></style>
