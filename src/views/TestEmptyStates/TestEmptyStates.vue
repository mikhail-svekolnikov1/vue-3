<template>
  <div>
    <div class="flex gap-5 mb-5">
      <UiButton @click="onSetNoDataAfterFilter"
        >Set no data according filter</UiButton
      >
      <UiButton @click="onSetNoDataAtAll">Set no data at all</UiButton>

      <UiButton @click="onSetData">Set data</UiButton>
      <UiButton @click="onApplyFilter">Apply filter</UiButton>
    </div>
    <div v-if="loading" class="flex justify-center items-center">
      <div class="loader" />
    </div>
    <UiTable v-else-if="data.length" :columns="columns" :data-source="data" />
    <div v-else-if="isFilterApplied">No data according to your filter</div>
    <div v-else>No data at all</div>
  </div>
</template>

<script setup lang="ts">
import UiTable from "../../components/shared/UiTable/UiTable.vue";
import { columns, dataSource } from "./consts.ts";
import UiButton from "../../components/shared/UiButton.vue";
import { onMounted, ref } from "vue";

const loading = ref(false);
const isFilterApplied = ref(false);
const data = ref([]);

onMounted(() => {
  loading.value = true;
  setTimeout(() => {
    data.value = dataSource;
    loading.value = false;
  }, 1000);
});

const onSetNoDataAfterFilter = () => {
  loading.value = true;
  isFilterApplied.value = true;

  setTimeout(() => {
    data.value = [];
    loading.value = false;
  }, 1000);
};

const onSetNoDataAtAll = () => {
  loading.value = true;
  isFilterApplied.value = false;

  setTimeout(() => {
    data.value = [];
    loading.value = false;
  }, 1000);
};

const onSetData = () => {
  loading.value = true;
  isFilterApplied.value = false;

  setTimeout(() => {
    data.value = dataSource;
    loading.value = false;
  }, 1000);
};

const onApplyFilter = () => {
  loading.value = true;
  isFilterApplied.value = true;

  setTimeout(() => {
    data.value = dataSource.slice(2);
    loading.value = false;
  }, 1000);
};
</script>

<style scoped>
.loader {
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: #22a6b3;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
