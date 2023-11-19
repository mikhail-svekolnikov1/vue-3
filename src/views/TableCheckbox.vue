<template>
  <div>
    <div v-for="category in categories" key="person.value">
      <MyCheckbox
        v-model="selectedCategories"
        :value="category.value"
        :label="category.label"
      />
    </div>

    <p>Using the custom checkbox with an array</p>
    <p>{{ selectedCategories }}</p>

    <MyCheckbox v-model="isSelected" label="One checkbox" />
    <div>{{ isSelected }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import MyCheckbox from "../components/MyCheckbox.vue";

const categories = ref([
  { value: 1, label: "Technology" },
  { value: 2, label: "Movies" },
  { value: 3, label: "Food" },
  { value: 4, label: "Animals" },
]);

const selectedCategories = ref([]);
const isSelected = ref(false);
</script>
