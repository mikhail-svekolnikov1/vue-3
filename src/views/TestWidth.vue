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
      <div class="text-primary">Test</div>
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
  <div class="mt-10">
    <EmptyUiTable
      v-if="loadingTable"
      :columns="columns"
      :dataSource="dataSource"
    />
    <UiTable v-else :columns="columns" :dataSource="dataSource" />
  </div>
</template>

<script setup lang="ts">
import MyInput from "../components/shared/MyInput.vue";
import { onMounted, ref } from "vue";
import { RouteNames } from "../consts.ts";
import MultiInput from "../components/shared/MultiInput.vue";
import UiTable from "../components/shared/UiTable/UiTable.vue";
import EmptyUiTable from "../components/shared/UiTable/EmptyUiTable.vue";

const loadingTable = ref(true);

onMounted(() => {
  setTimeout(() => {
    loadingTable.value = false;
  }, 2000);
});

const testValue = ref("cat");

const columns = [
  {
    title: "Recipient",
    dataIndex: "recipient",
    randomWidth: true,
    width: "300px",
  },
  {
    title: "Email",
    dataIndex: "email",
    randomWidth: true,
    width: "300px",
  },
  {
    title: "Campaign/Gift",
    dataIndex: "campaignGift",
  },
  {
    title: "Value",
    dataIndex: "value",
  },
  {
    title: "Timed Gifts",
    dataIndex: "timedGifts",
  },
  {
    title: "Date Scheduled",
    dataIndex: "dateScheduled",
  },
];

const dataSource = [
  {
    id: 1,
    recipient: "John Doe",
    email: "john.doe@example.com",
    campaignGift: "Campaign A",
    value: "$100",
    timedGifts: "5",
    dateScheduled: "2024-06-01",
  },
  {
    id: 2,
    recipient: "Jane Smith",
    email: "jane.smith@example.com",
    campaignGift: "Gift B",
    value: "$200",
    timedGifts: "10",
    dateScheduled: "2024-06-05",
  },
  {
    id: 3,
    recipient: "Mike Johnson",
    email: "mike.johnson@example.com",
    campaignGift: "Campaign C",
    value: "$150",
    timedGifts: "8",
    dateScheduled: "2024-06-10",
  },
  {
    id: 4,
    recipient: "Emily Davis",
    email: "emily.davis@example.com",
    campaignGift: "Gift D",
    value: "$120",
    timedGifts: "6",
    dateScheduled: "2024-06-15",
  },
  {
    id: 5,
    recipient: "James Brown",
    email: "james.brown@example.com",
    campaignGift: "Campaign E",
    value: "$180",
    timedGifts: "12",
    dateScheduled: "2024-06-20",
  },
];
</script>

<style scoped></style>
