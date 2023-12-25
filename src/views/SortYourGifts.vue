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
  <div>
    <draggable
      v-model="gifts"
      item-key="id"
      class="flex justify-between flex-wrap flex-row-reverse"
    >
      <template #item="{ element, index }">
        <div class="w-[20%] bg-black px-5 py-12 m-5">
          <div @click="onSelectCard(element, index)">{{ element.name }}</div>
          <div>
            <strong>id: {{ element.id }}</strong>
          </div>
        </div>
      </template>
    </draggable>
  </div>
</template>

<script setup>
import draggable from "vuedraggable";
import { ref } from "vue";

const gifts = ref([
  { name: "misha", id: 1 },
  { name: "ivan", id: 2 },
  { name: "stas", id: 3 },
  { name: "john", id: 4 },
  { name: "misha2", id: 5 },
  { name: "ivan2", id: 6 },
  { name: "stas2", id: 7 },
  { name: "john2s", id: 8 },
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
