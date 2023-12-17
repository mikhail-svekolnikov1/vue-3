<template>
  <div>
    <button
      class="mt-5 mr-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      @click="changeOrderOfGifts('top')"
    >
      Move to top
    </button>
    <button
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      @click="changeOrderOfGifts('bottom')"
    >
      Move to bottom
    </button>
  </div>
  <div class="flex justify-between flex-wrap">
    <div
      class="w-[20%] bg-black px-5 py-12 m-5"
      v-for="(gift, index) in gifts"
      :key="gift.name"
      @click="onSelectCard(gift, index)"
      :class="{
        isSelected: selectedCards.find(
          (selectedGift) => selectedGift.name === gift.name
        ),
      }"
    >
      {{ gift.name }}
      <div>index: {{ index }}</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const gifts = ref([
  { name: "misha" },
  { name: "ivan" },
  { name: "stas" },
  { name: "john" },
  { name: "misha2" },
  { name: "ivan2" },
  { name: "stas2" },
  { name: "john2s" },
]);

const selectedCards = ref([]);

const onSelectCard = (gift, index) => {
  const alreadyExistedGift = selectedCards.value.find(
    (selectedGift) => selectedGift.name === gift.name
  );

  if (alreadyExistedGift) {
    selectedCards.value = selectedCards.value.filter(
      (card) => card.name !== gift.name
    );
    return;
  }

  selectedCards.value = [
    ...selectedCards.value,
    { ...gift, initialIndex: index },
  ].sort((a, b) => a.initialIndex - b.initialIndex);
};

const changeOrderOfGifts = (direction) => {
  const filteredGifts = gifts.value.filter((gift) => {
    return !selectedCards.value.find(
      (selectedGift) => selectedGift.name === gift.name
    );
  });

  const newSortedGifts =
    direction === "top"
      ? [...selectedCards.value, ...filteredGifts]
      : [...filteredGifts, ...selectedCards.value];

  gifts.value = newSortedGifts;
};
</script>

<style scoped>
.isSelected {
  border: 2px solid pink;
}
</style>
