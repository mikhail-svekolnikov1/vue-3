<template>
  <div class="ui-text-editor">
    <div class="ui-text-editor__tool-bar">
      <button
        type="button"
        @click="modify('bold')"
        class="ui-text-editor__modify-btn"
      >
        <IconBold />
      </button>

      <button
        type="button"
        @click="modify('italic')"
        class="ui-text-editor__modify-btn"
      >
        <IconItalic />
      </button>

      <button
        type="button"
        @click="modify('underline')"
        class="ui-text-editor__modify-btn"
      >
        <IconUnderline class="fill-black" />
      </button>

      <button
        type="button"
        @click="modify('insertUnorderedList')"
        class="ui-text-editor__modify-btn ui-text-editor__modify-btn--ms"
      >
        <IconUnorderedList />
      </button>

      <button
        type="button"
        @click="modify('insertOrderedList')"
        class="ui-text-editor__modify-btn"
      >
        <IconOrderedList />
      </button>

      <button
        type="button"
        @click="modify('justifyLeft')"
        class="ui-text-editor__modify-btn ui-text-editor__modify-btn--ms"
      >
        <IconAlignLeft />
      </button>

      <button
        type="button"
        @click="modify('justifyRight')"
        class="ui-text-editor__modify-btn"
      >
        <IconAlignRight />
      </button>
    </div>

    <!--    <div class="tag-dropdown" v-if="showDropdown">cat misha</div>-->
    <!--    <teleport to="body" v-if="showDropdown">-->
    <!--      <div-->
    <!--        class="tag-dropdown"-->
    <!--        v-bind:style="{ top: cursorPosition.top, left: cursorPosition.left }"-->
    <!--      >-->
    <!--        <div-->
    <!--          class="tag-dropdown-item"-->
    <!--          v-for="option in optionsForTags"-->
    <!--          @click="onChooseTag(option)"-->
    <!--        >-->
    <!--          {{ option }}-->
    <!--        </div>-->
    <!--      </div>-->
    <!--    </teleport>-->

    <Mentionable
      :keys="['@', '#']"
      :items="items"
      offset="6"
      insert-space
      @open="onOpen"
    >
      <!--      <textarea v-model="text" />-->

      <div
        id="editable"
        class="ui-text-editor__content"
        contenteditable="true"
        ref="contentEl"
        :placeholder="placeholder"
        tabindex="0"
        @keyup="emitUpdate"
      ></div>

      <template #no-result>
        <div class="dim">No result</div>
      </template>

      <template #item-@="{ item }">
        <div class="user">
          {{ item.value }}
          <span class="dim"> ({{ item.firstName }}) </span>
        </div>
      </template>

      <template #item-#="{ item }">
        <div class="issue">
          <span class="number"> #{{ item.value }} </span>
          <span class="dim">
            {{ item.label }}
          </span>
        </div>
      </template>
    </Mentionable>
  </div>
</template>

<script setup lang="ts">
import { ref, watchEffect } from "vue";

import { Mentionable } from "vue-mention";

import IconBold from "./text-editor/IconBold.vue";
import IconItalic from "./text-editor/IconItalic.vue";
import IconUnderline from "./text-editor/IconUnderline.vue";
import IconOrderedList from "./text-editor/IconOrderedList.vue";
import IconUnorderedList from "./text-editor/IconUnorderedList.vue";
import IconAlignLeft from "./text-editor/IconAlignLeft.vue";
import IconAlignRight from "./text-editor/IconAlignRight.vue";
import type { Ref } from "vue";
import "floating-vue/dist/style.css";

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

const users = [
  {
    value: "akryum",
    firstName: "Guillaume",
  },
  {
    value: "posva",
    firstName: "Eduardo",
  },
  {
    value: "atinux",
    firstName: "Sébastien",
  },
];

const issues = [
  {
    value: 123,
    label: "Error with foo bar",
    searchText: "foo bar",
  },
  {
    value: 42,
    label: "Cannot read line",
    searchText: "foo bar line",
  },
  {
    value: 77,
    label: "I have a feature suggestion",
    searchText: "feature",
  },
];

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
  emit("update:modelValue", contentEl.value?.innerHTML || "");
};

const modify = (commandName: string): void => {
  document.execCommand(commandName);

  emitUpdate();
};

const onChooseTag = (tagText: string) => {
  showDropdown.value = false;
  isDropdownInTyping.value = false;
};

const text = ref("");
const items = ref([]);

const onOpen = (key) => {
  items.value = key === "@" ? users : issues;
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
