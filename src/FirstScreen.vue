<template>
  <div>
    <MainHeader />

    <section class="p-10 pt-0">
      <!--      <TestEmptyStates />-->
      <!--      <TestFlex />-->
      <!--      <InputWithTags3 />-->
      <UiSelect
        with-search
        v-model="selectValue"
        :options="[
          { key: 'misha', value: 'Misha' },
          { key: 'john', value: 'John' },
          { key: 'susan', value: 'Susan' },
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

const selectValue = ref("");
</script>

<style scoped lang="scss"></style>
