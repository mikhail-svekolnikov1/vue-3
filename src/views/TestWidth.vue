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
    <input
      contenteditable="true"
      ref="input"
      class="m-10 p-3 border border-primary"
      type="text"
      placeholder="tags type @"
      @keydown="onKeyDown"
      @input="onInput"
    />

    <div v-if="showDropdown" :style="dropdownStyle" class="dropdown">
      <!-- Содержимое дропдауна -->
      <p>Dropdown Content</p>
      <UiButton @click="handleButtonClick">Add cat</UiButton>
    </div>

    <!--    <UiTable-->
    <!--      v-if="dataSource.length"-->
    <!--      :columns="columns"-->
    <!--      :dataSource="dataSource"-->
    <!--    />-->
    <!--    <UiTable v-else :columns="columns" :dataSource="emptyDataSource">-->
    <!--      <template #recipient>-->
    <!--        <div class="skeleton" :style="{ width: getRandomWidthPercentage() }" />-->
    <!--      </template>-->

    <!--      <template #email>-->
    <!--        <div class="skeleton" :style="{ width: getRandomWidthPercentage() }" />-->
    <!--      </template>-->
    <!--      <template #campaignGift>-->
    <!--        <div class="skeleton" :style="{ width: getRandomWidthPercentage() }" />-->
    <!--      </template>-->
    <!--      <template #value>-->
    <!--        <div class="skeleton" :style="{ width: getRandomWidthPercentage() }" />-->
    <!--      </template>-->
    <!--      <template #timedGifts>-->
    <!--        <div class="skeleton" />-->
    <!--      </template>-->
    <!--      <template #dateScheduled>-->
    <!--        <div class="skeleton" />-->
    <!--      </template>-->
    <!--    </UiTable>-->
  </div>
</template>

<script setup lang="ts">
import MyInput from "../components/shared/MyInput.vue";
import { onMounted, ref } from "vue";
import { RouteNames } from "../consts.ts";
import MultiInput from "../components/shared/MultiInput.vue";
import UiTable from "../components/shared/UiTable/UiTable.vue";
import UiButton from "../components/shared/UiButton.vue";

const loadingTable = ref(true);

const input = ref<HTMLInputElement>(null);
const showDropdown = ref(false);
const dropdownStyle = ref({});

const onInput = (event: Event) => {
  // console.log(event.target.value);
  // if(event.target.value) {
  // }
};

const handleButtonClick = () => {
  const inputValue = input.value.value;
  const insertToken = "cat";

  const insertTokenAt = input.value.selectionEnd;
  // After we insert the text, we're going to want to re-focus the input.
  // However, we're going to want to advance the selection such that it starts
  // just after the inserted text.
  const nextSelectionEnd = insertTokenAt + 1 + insertToken.length;

  // Insert the text at the given location within the input.
  input.value.value =
    inputValue.slice(0, insertTokenAt) +
    insertToken +
    " " +
    inputValue.slice(insertTokenAt);

  // Advance the text selection to just after the inserted text.
  input.value.selectionStart = nextSelectionEnd;
  input.value.selectionEnd = nextSelectionEnd;

  input.value.focus();
};

const onKeyDown = (event: KeyboardEvent) => {
  const target = event.target as HTMLInputElement;

  // Проверить символ перед текущей позицией курсора
  if (event.key === "@") {
    const selection = window.getSelection();
    const range = selection.getRangeAt(0);
    const rect = range.getClientRects()[0];
    console.log("range", range);
    console.log("rect", rect);

    // tagsMenuPos.left = rect.left;
    // tagsMenuPos.top = rect.top;

    showDropdown.value = true;
  } else {
    showDropdown.value = false;
  }
};

const getRandomWidthPercentage = () => {
  const min = 60;
  const max = 100;

  return Math.floor(Math.random() * (max - min + 1)) + min + "%";
};

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
    slotName: "recipient",
  },
  {
    title: "Email",
    dataIndex: "email",
    randomWidth: true,
    width: "300px",
    slotName: "email",
  },
  {
    title: "Campaign/Gift",
    dataIndex: "campaignGift",
    slotName: "campaignGift",
  },
  {
    title: "Value",
    dataIndex: "value",
    slotName: "value",
  },
  {
    title: "Timed Gifts",
    dataIndex: "timedGifts",
    slotName: "timedGifts",
  },
  {
    title: "Date Scheduled",
    dataIndex: "dateScheduled",
    slotName: "dateScheduled",
  },
];

const emptyDataSource = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
  {
    id: 4,
  },
  {
    id: 4,
  },
];

// const dataSource = [
//   {
//     id: 1,
//     recipient: "John Doe",
//     email: "john.doe@example.com",
//     campaignGift: "Campaign A",
//     value: "$100",
//     timedGifts: "5",
//     dateScheduled: "2024-06-01",
//   },
//   {
//     id: 2,
//     recipient: "Jane Smith",
//     email: "jane.smith@example.com",
//     campaignGift: "Gift B",
//     value: "$200",
//     timedGifts: "10",
//     dateScheduled: "2024-06-05",
//   },
//   {
//     id: 3,
//     recipient: "Mike Johnson",
//     email: "mike.johnson@example.com",
//     campaignGift: "Campaign C",
//     value: "$150",
//     timedGifts: "8",
//     dateScheduled: "2024-06-10",
//   },
//   {
//     id: 4,
//     recipient: "Emily Davis",
//     email: "emily.davis@example.com",
//     campaignGift: "Gift D",
//     value: "$120",
//     timedGifts: "6",
//     dateScheduled: "2024-06-15",
//   },
//   {
//     id: 5,
//     recipient: "James Brown",
//     email: "james.brown@example.com",
//     campaignGift: "Campaign E",
//     value: "$180",
//     timedGifts: "12",
//     dateScheduled: "2024-06-20",
//   },
// ];

const dataSource = [];
</script>

<style scoped lang="scss">
/* Skeleton loading styles */
.skeleton {
  background-color: #ddd;
  height: 14px;
  width: 80%; /* Ширина полоски */
  margin: 6px auto; /* Отступы сверху и снизу */
  border-radius: 4px; /* Радиус */
  position: relative;
  overflow: hidden;
}

.skeleton::after {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.2),
    transparent
  );
  animation: loading 1.5s infinite;
}

@keyframes loading {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}
</style>
