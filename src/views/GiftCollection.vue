<template>
  <div class="flex gap-10">
    <div
      v-for="gift in aggregatedGiftsBySupplier"
      :key="gift.id"
      class="p-10 border border-black"
    >
      <div>
        <input type="checkbox" v-model="selectedGiftIds" :value="gift.id" />
        <div>
          supplierName: <b>{{ gift.supplierName }}</b>
        </div>
        <div>
          giftCardName: <b>{{ gift.giftCardName }}</b>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from "vue";
import { getAggregetedGiftsBySuppplier } from "../helpers/general.ts";

const defaultGifts = [
  { id: 1, supplierName: "nike", giftCardName: "gift-1" },
  { id: 2, supplierName: "nike", giftCardName: "gift-2" },
  { id: 3, supplierName: "nike", giftCardName: "gift-3" },
  { id: 4, supplierName: "dell", giftCardName: "gift-4" },
  { id: 5, supplierName: "samsung", giftCardName: "gift-5" },
  { id: 6, supplierName: "philips", giftCardName: "gift-6" },
];

const defaultSelectedGifts = [
  { id: 3, supplierName: "nike", giftCardName: "gift-3" },
  { id: 4, supplierName: "dell", giftCardName: "gift-4" },
];

const allGifts = ref(defaultGifts);
const selectedGifts = ref(defaultSelectedGifts);
const selectedGiftIds = ref<number[]>([]);

watch(
  selectedGifts,
  () => {
    selectedGiftIds.value = selectedGifts.value.map((gift) => gift.id);
  },
  {
    immediate: true,
  }
);

const aggregatedGiftsBySupplier = computed(() => {
  return getAggregetedGiftsBySuppplier({ allGifts: allGifts.value });
});

console.log("aggregatedGiftsBySupplier", aggregatedGiftsBySupplier.value);
</script>

<style scoped></style>
