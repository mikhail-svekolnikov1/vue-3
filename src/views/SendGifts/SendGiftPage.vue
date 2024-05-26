<template>
  <div class="px-10">
    <div class="flex justify-between items-center">
      <h1 class="font-bold text-xl my-10">Send gifts page</h1>
      <UiButton @click="redirectToForm">Send a new gift</UiButton>
    </div>
    <div class="grid grid-cols-4 gap-4 mb-10">
      <UiCard
        v-for="gift in gifts"
        :key="gift.id"
        :title="gift.title"
        :image-url="gift.imageUrl"
      >
        <template #footer>
          <div class="flex justify-between">
            <div class="cursor-pointer">view</div>
            <div class="cursor-pointer">edit</div>
            <div class="cursor-pointer">delete</div>
          </div>
        </template>
      </UiCard>
    </div>

    <UiButton @click="redirectToForm"> Redirect to form </UiButton>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { RouteNames } from "../../consts.ts";
import UiCard from "../../components/shared/UiCard.vue";
import UiButton from "../../components/shared/UiButton.vue";

const gifts = [
  {
    id: 1,
    title: "Gift name 1",
    imageUrl:
      "https://www.cats.org.uk/uploads/images/featurebox_sidebar_kids/grief-and-loss.jpg",
  },

  {
    id: 2,
    title: "Gift name 2",
    imageUrl:
      "https://www.cats.org.uk/media/9682/ginger-kitten-min-1.png?width=300&v=1d9e57b21bec9b0&format=webp",
  },
  {
    id: 3,
    title: "Gift name 3",
    imageUrl:
      "https://www.cats.org.uk/uploads/images/featurebox_sidebar_kids/grief-and-loss.jpg",
  },
  {
    id: 4,
    title: "Gift name 4",
    imageUrl:
      "https://www.cats.org.uk/uploads/images/featurebox_sidebar_kids/grief-and-loss.jpg",
  },
  {
    id: 5,
    title: "Gift name 5",
    imageUrl:
      "https://www.cats.org.uk/uploads/images/featurebox_sidebar_kids/grief-and-loss.jpg",
  },
];

const router = useRouter();

const redirectToForm = () => {
  router.push({
    name: RouteNames.STEP_1,
  });
};

const onChangeSelect = (event) => {
  console.log("event", event.target.value);
};
</script>

<style scoped></style>
