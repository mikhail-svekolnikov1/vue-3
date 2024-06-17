<template>
  <div>
    <input
      ref="input"
      class="mb-0 p-3 w-[300px] border border-primary"
      type="text"
      placeholder="tags type @"
      @keydown="onKeyDown"
      v-model="inputValue"
    />
    <div
      class="ml-10 p-3 w-[300px] hidden-div border border-primary"
      contentEditable="true"
      ref="editableDiv"
    >
      {{ inputValue }}
    </div>

    <div
      v-if="showDropdown"
      class="absolute dropdown border-2 border-primary p-2"
      :style="{ left: `${coordinates.x}px`, top: `${coordinates.y}px` }"
    >
      <p>Dropdown Content</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import UiButton from "../components/shared/UiButton.vue";

const input = ref<HTMLInputElement | null>(null);
const showDropdown = ref(false);
const inputValue = ref("");
const editableDiv = ref<HTMLInputElement | null>(null);

const coordinates = ref({
  x: 0,
  y: 0,
});

const onKeyDown = (event: KeyboardEvent) => {
  const target = event.target as HTMLInputElement;

  if (event.key === "@") {
    const position = getCaretCoordinates(target.selectionStart!);
    coordinates.value = {
      x: position.left,
      y: position.top + target.offsetHeight,
    };
    showDropdown.value = true;
  } else {
    showDropdown.value = false;
  }
};

const getCaretCoordinates = (startIndexPosition: number) => {
  const selection = window.getSelection();
  const range = document.createRange();

  const textNode = editableDiv.value.firstChild;
  console.log(textNode);
  range.setStart(textNode, startIndexPosition);
  range.collapse(true); // Устанавливаем курсор в начало диапазона

  selection.removeAllRanges();
  selection.addRange(range);

  editableDiv.value.focus(); // Устанавливаем фокус на редактируемый элемент
};
</script>

<style scoped>
.hidden-div {
  position: absolute;
  white-space: pre;
  font: inherit;
  margin: 10px;
  padding: 3px;
  width: 300px;
  border: 2px solid black;
}
</style>
