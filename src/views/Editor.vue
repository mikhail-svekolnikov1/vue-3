<template>
  <div class="ui-text-editor">
    <div class="ui-text-editor__tool-bar">
      <button
        type="button"
        @click="modify('bold')"
        class="ui-text-editor__modify-btn"
      >
        bold
      </button>

      <button
        type="button"
        @click="modify('italic')"
        class="ui-text-editor__modify-btn"
      >
        italic
      </button>
    </div>

    <div
      id="editable"
      class="ui-text-editor__content"
      contenteditable="true"
      ref="contentEl"
      :placeholder="placeholder"
      tabindex="0"
      @keyup="emitUpdate"
    ></div>
    <!--    <div class="tag-dropdown" v-if="showDropdown">cat misha</div>-->
    <teleport to="body" v-if="showDropdown">
      <div
        class="tag-dropdown"
        v-bind:style="{ top: cursorPosition.top, left: cursorPosition.left }"
      >
        <div
          class="tag-dropdown-item"
          v-for="option in optionsForTags"
          @click="onChooseTag(option)"
        >
          {{ option }}
        </div>
      </div>
    </teleport>
  </div>
</template>

<script setup lang="ts">
import { ref, watchEffect } from "vue";

import type { Ref } from "vue";

const props = withDefaults(
  defineProps<{
    modelValue: string;
    placeholder?: string;
    optionsForTags?: string[];
  }>(),
  {
    placeholder: "",
    optionsForTags: ["@firstName", "@lastName", "@companyName"],
  }
);

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();

const contentEl: Ref<HTMLElement | null> = ref(null);
const showDropdown = ref<boolean>(false);
const isDropdownInTyping = ref<boolean>(false);
const cursorPositionForInsertTag = ref<number>(0);
const cursorPosition = ref({
  left: "0px",
  top: "0px",
});

watchEffect(() => {
  if (contentEl.value && contentEl.value.innerHTML !== props.modelValue) {
    contentEl.value.innerHTML = props.modelValue || "";
  }
});

const emitUpdate = (event) => {
  const selection = window.getSelection();
  const range = selection.getRangeAt(0);

  const rect = range.getBoundingClientRect();

  // const text = event.target.textContent;
  // const lastChar = text.charAt(text.length - 1);
  // console.log("event", event);
  // console.log("all lettes", contentEl.value?.innerHTML.length);
  // console.log("selection focusOffset:", selection.focusOffset);
  cursorPositionForInsertTag.value = selection.focusOffset;
  console.log("selection.focusOffset", selection.focusOffset);
  if (event.key === "@") {
    const t = rect.top + window.scrollY + 20;
    const l = rect.left + window.scrollX - 10;

    const top = `${t}px`;
    const left = `${l}px`;

    cursorPosition.value = {
      top,
      left,
    };

    showDropdown.value = true;
    isDropdownInTyping.value = true;
  }

  if (isDropdownInTyping.value && event.key === " ") {
    showDropdown.value = false;
    isDropdownInTyping.value = false;
  } else if (!isDropdownInTyping.value) {
    showDropdown.value = false;
  }

  emit("update:modelValue", contentEl.value?.innerHTML || "");
};

const modify = (commandName: string): void => {
  document.execCommand(commandName);

  emitUpdate();
};

const onChooseTag = (tagText: string) => {
  showDropdown.value = false;
  isDropdownInTyping.value = false;

  // contentEl.value.innerHTML = `${contentEl.value?.innerHTML}${tagText}`;

  // Получаем текущее значение элемента contenteditable
  const currentValue = contentEl.value.innerHTML;

  // Получаем позицию вставки
  const position = cursorPositionForInsertTag.value;

  // -1 to remove double '@'
  const textBeforeTag = currentValue.slice(0, position - 1);
  const textAfterTag = currentValue.slice(position);

  const newText = `${textBeforeTag}${tagText}${textAfterTag}`;

  contentEl.value.innerHTML = newText;

  contentEl.value.focus();

  let sel = window.getSelection();
  let focus = sel.focusNode;

  let range = document.createRange();
  range.selectNode(focus);

  // console.log("length of text", contentEl.value?.innerHTML.length);
  // console.log("tagText.length", tagText.length);
  // console.log("position", position);

  range.setStart(focus, position + tagText.length - 1);

  // if (contentEl.value?.innerHTML.length > position + tagText.length) {
  //   range.setStart(focus, contentEl.value?.innerHTML.length);
  // } else {
  //   range.setStart(focus, position + tagText.length);
  // }

  range.collapse(true);
  sel.removeAllRanges();
  sel.addRange(range);
};
</script>

<style lang="scss">
@import "./_variables.scss";

.tag-dropdown {
  position: absolute;
  border: 1px solid $color-gray-02;
  border-radius: 5px;
  background-color: white;

  .tag-dropdown-item {
    border: 5px;
    padding: 16px 14px;
    font-weight: 500;
    border-bottom: 1px solid $color-gray-02;
    cursor: pointer;

    &:hover {
      background: $color-gray-01;
    }

    &:last-child {
      border-bottom: none;
    }
  }
}

.ui-text-editor {
  position: relative;

  width: 100%;
  border-radius: 12px;
  border: solid 2px $color-gray-02;

  &__tool-bar {
    height: 52px;
    display: flex;
    align-items: center;
    border-bottom: solid 2px $color-gray-02;
    padding: 0 24px;

    button:focus {
      outline: solid 1px #ddd;
    }
  }

  &__modify-btn {
    padding: 8px;

    &:hover {
      background: $color-gray-01;
    }

    svg {
      fill: #000;
    }

    &--ms {
      margin-inline-start: 30px;
    }
  }

  &__content {
    height: 220px;
    overflow-y: auto;
    padding: 18px 20px;
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    color: $color-gray-07;
    text-align: start;
  }
}

@media screen and (max-width: 340px) {
  .ui-text-editor__tool-bar {
    height: auto;
    min-height: 52px;
    flex-wrap: wrap;
    padding: 0 10px;
  }
}

.ui-text-editor ul {
  list-style-type: disc !important;
  padding: 10px 25px;
}

.ui-text-editor ol {
  list-style-type: decimal !important;
  padding: 10px 25px;
}

[placeholder]:empty::before {
  content: attr(placeholder);
  font-size: 16px;
  font-weight: 400;
  color: $color-gray-07;
}
</style>
