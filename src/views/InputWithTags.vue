<template>
  <div>
    <textarea
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
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import UiButton from "../components/shared/UiButton.vue";

const input = ref<HTMLInputElement>(null);
const showDropdown = ref(false);
const dropdownStyle = ref({});

const onInput = (event: Event) => {};

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

/**
 * @param {HTMLTextAreaElement} element
 * @param {number} position
 */
function getCaretCoordinates(element, position) {
  const div = document.createElement("div");
  document.body.appendChild(div);

  const style = div.style;
  const computed = getComputedStyle(element);

  style.whiteSpace = "pre-wrap";
  style.wordWrap = "break-word";
  style.position = "absolute";
  style.visibility = "hidden";

  const properties = [
    "direction",
    "boxSizing",
    "width",
    "height",
    "overflowX",
    "overflowY",

    "borderTopWidth",
    "borderRightWidth",
    "borderBottomWidth",
    "borderLeftWidth",
    "borderStyle",

    "paddingTop",
    "paddingRight",
    "paddingBottom",
    "paddingLeft",

    "fontStyle",
    "fontVariant",
    "fontWeight",
    "fontStretch",
    "fontSize",
    "fontSizeAdjust",
    "lineHeight",
    "fontFamily",

    "textAlign",
    "textTransform",
    "textIndent",
    "textDecoration",

    "letterSpacing",
    "wordSpacing",

    "tabSize",
    "MozTabSize",
  ];

  properties.forEach((prop) => {
    style[prop] = computed[prop];
  });

  div.textContent = element.value.substring(0, position);

  const span = document.createElement("span");
  span.textContent = element.value.substring(position) || ".";
  div.appendChild(span);

  const coordinates = {
    top: span.offsetTop + parseInt(computed["borderTopWidth"]),
    left: span.offsetLeft + parseInt(computed["borderLeftWidth"]),
    // height: parseInt(computed['lineHeight'])
    height: span.offsetHeight,
  };

  div.remove();

  return coordinates;
}

const onKeyDown = (event: KeyboardEvent) => {
  const target = event.target as HTMLInputElement;

  // Проверить символ перед текущей позицией курсора
  if (event.key === "@") {
    const selection = window.getSelection();
    const range = selection.getRangeAt(0);
    const rect = range.getBoundingClientRect();

    console.log("rect", rect);

    const coords = getCaretCoordinates(input.value, input.value.selectionStart);
    console.log("coords", coords);
    showDropdown.value = true;
  } else {
    showDropdown.value = false;
  }
};
</script>

<style scoped></style>
