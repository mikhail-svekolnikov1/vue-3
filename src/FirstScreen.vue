<template>
  <div>
    <MainHeader />

    <section class="p-10 pt-0">
      <!--      <TestEmptyStates />-->
      <!--      <TestFlex />-->
      <!--      <InputWithTags3 />-->
      <UiSelect
        v-model="selectValue"
        :options="[
          { key: 'key-1', value: 'key-1' },
          { key: 'key-2', value: 'key-2' },
          { key: 'key-3', value: 'key-3' },
        ]"
      />
      <div>some text long text some some</div>
    </section>
  </div>
</template>

<script setup lang="ts">
import MainHeader from "./components/MainHeader.vue";

import UiSelect from "./components/shared/UiSelect.vue";
import { ref } from "vue";

const selectValue = ref("key-1");
</script>

<style scoped lang="scss"></style>
