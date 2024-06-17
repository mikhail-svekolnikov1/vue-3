<template>
  <div>
    <MainHeader />

    <section class="p-10 pt-0">
      <!--      <TestEmptyStates />-->
      <!--      <TestFlex />-->
      <InputWithTags3 />
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
import InputWithTags from "./views/InputWithTags.vue";
import InputWithTags2 from "./views/InputWithTags2.vue";
import InputWithTags3 from "./views/InputWithTags3.vue";
</script>

<style scoped lang="scss"></style>
