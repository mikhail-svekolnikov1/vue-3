<template>
  <div>
    <button
      class="mt-5 mr-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Move to top
    </button>
    <button
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Move to bottom
    </button>
  </div>
  <div class="flex justify-between flex-wrap">
    <div
      class="w-[20%] bg-black px-5 py-12 m-5"
      v-for="gift in gifts"
      :key="gift.name"
      @click="onSelectCard(gift)"
      :class="{
        isSelected: selectedCards.includes(gift.name),
      }"
    >
      {{ gift.name }}
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

const onSelectCard = (gift) => {
  if (selectedCards.value.includes(gift.name)) {
    selectedCards.value = selectedCards.value.filter(
      (card) => card !== gift.name
    );
    return;
  }

  selectedCards.value.push(gift.name);
};
</script>

<style scoped>
.isSelected {
  border: 2px solid pink;
}
</style>
