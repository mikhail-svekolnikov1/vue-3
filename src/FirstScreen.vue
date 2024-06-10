<template>
  <div>
    <MainHeader />

    <section class="p-10 pt-0">
      <!--      <TestEmptyStates />-->
      <TestFlex />
    </section>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { RouteNames } from "./consts.ts";
import MainHeader from "./components/MainHeader.vue";
import UiTable from "./components/shared/UiTable/UiTable.vue";
import TestEmptyStates from "./views/TestEmptyStates/TestEmptyStates.vue";
import TestFlex from "./views/TestFlex.vue";
</script>

<style scoped lang="scss"></style>
