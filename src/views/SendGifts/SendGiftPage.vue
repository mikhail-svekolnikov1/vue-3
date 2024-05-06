<template>
  <div>
    <h1 class="font-bold text-xl my-10">Send gifts page</h1>
    <div class="grid grid-cols-4 gap-4 mb-10">
      <div
        v-for="gift in gifts"
        :key="gift.id"
        class="border border-blue-200 p-5"
      >
        {{ gift.title }}
      </div>
    </div>

    <button
      @click="redirectToForm"
      class="border border-blue-200 p-5 rounded-2xl"
    >
      Redirect to form
    </button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { RouteNames } from "../../consts.ts";

const gifts = [
  {
    id: 1,
    title: "Gift name 1",
  },

  {
    id: 2,
    title: "Gift name 2",
  },
  {
    id: 3,
    title: "Gift name 3",
  },
  {
    id: 4,
    title: "Gift name 4",
  },
  {
    id: 5,
    title: "Gift name 5",
  },
];

const router = useRouter();

const redirectToForm = () => {
  router.push({
    name: RouteNames.STEP_1,
  });
};
</script>

<style scoped></style>
