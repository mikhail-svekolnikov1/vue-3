<template>
  <div class="ui-text-editor">
    <QuillEditor
      ref="myEditor"
      v-model:content="model"
      theme="snow"
      :modules="modules"
      contentType="html"
      @update:content="textChange"
      toolbar="#my-toolbar"
    >
      <template #toolbar>
        <div id="my-toolbar">
          <!-- Add buttons as you would before -->
          <button class="ql-bold"></button>
          <button class="ql-italic"></button>
          <button class="ql-underline"></button>

          <button class="ql-list" value="bullet"></button>
          <button class="ql-list" value="ordered"></button>

          <button class="ql-align" value="left"></button>
          <button class="ql-align" value="right"></button>

          <!-- But you can also add your own -->
          <button id="custom-button"></button>
        </div>
      </template>

      <!--      <template #toolbar>-->
      <!--        <div class="ui-text-editor__tool-bar">-->
      <!--          <button type="button" class="ql-bold ui-text-editor__modify-btn">-->
      <!--            <IconBold />-->
      <!--          </button>-->

      <!--          <button-->
      <!--            type="button"-->
      <!--            @click="modify('italic')"-->
      <!--            class="ui-text-editor__modify-btn"-->
      <!--          >-->
      <!--            <IconItalic />-->
      <!--          </button>-->

      <!--          <button-->
      <!--            type="button"-->
      <!--            @click="modify('underline')"-->
      <!--            class="ui-text-editor__modify-btn"-->
      <!--          >-->
      <!--            <IconUnderline class="fill-black" />-->
      <!--          </button>-->

      <!--          <button-->
      <!--            type="button"-->
      <!--            class="ui-text-editor__modify-btn ui-text-editor__modify-btn&#45;&#45;ms"-->
      <!--          >-->
      <!--            <IconUnorderedList />-->
      <!--          </button>-->

      <!--          <button type="button" class="ui-text-editor__modify-btn">-->
      <!--            <IconOrderedList />-->
      <!--          </button>-->

      <!--          <button-->
      <!--            type="button"-->
      <!--            class="ui-text-editor__modify-btn ui-text-editor__modify-btn&#45;&#45;ms"-->
      <!--          >-->
      <!--            <IconAlignLeft />-->
      <!--          </button>-->

      <!--          <button type="button" class="ui-text-editor__modify-btn">-->
      <!--            <IconAlignRight />-->
      <!--          </button>-->
      <!--        </div>-->
      <!--      </template>-->
    </QuillEditor>
  </div>
</template>

<script setup lang="ts">
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";
import QuillMention from "quill-mention";
import "quill-mention/dist/quill.mention.css";
import { ref, watch } from "vue";

import IconBold from "./text-editor/IconBold.vue";
import IconItalic from "./text-editor/IconItalic.vue";
import IconUnderline from "./text-editor/IconUnderline.vue";
import IconOrderedList from "./text-editor/IconOrderedList.vue";
import IconUnorderedList from "./text-editor/IconUnorderedList.vue";
import IconAlignLeft from "./text-editor/IconAlignLeft.vue";
import IconAlignRight from "./text-editor/IconAlignRight.vue";

// var icons = QuillEditor.import("ui/icons");
// icons["bold"] = IconBold;

const model = ref("hello");
const myEditor = ref();

const atValues = [
  { id: 1, value: "firstName" },
  { id: 2, value: "lastName" },
  { id: 3, value: "companyName" },
];

const textChange = (value) => {
  function stripHtmlTags(htmlString) {
    // Регулярное выражение для поиска и замены HTML-тегов
    const regex = /(<([^>]+)>)/gi;

    // Замена всех HTML-тегов на пустую строку
    const plainText = htmlString.replace(regex, "");

    return plainText;
  }

  const content = myEditor.value.getContents();

  console.log("result", stripHtmlTags(content));
};

const toolbar = [
  {
    bold: IconBold,
  },
  "italic",
  "underline",
];

const modules = {
  name: "QuillMention",
  module: QuillMention,
  formats: ["bold", "italic", "mention"],
  options: {
    allowedChars: /^[A-Za-z\sÅÄÖåäö]*$/,
    mentionDenotationChars: ["@", "#"],
    source: function (searchTerm, renderList, mentionChar) {
      let values;

      if (mentionChar === "@") {
        values = atValues;
      } else {
        // values = hashValues;
      }

      if (searchTerm.length === 0) {
        renderList(values, searchTerm);
      } else {
        const matches = [];
        for (let i = 0; i < values.length; i++)
          if (~values[i].value.toLowerCase().indexOf(searchTerm.toLowerCase()))
            matches.push(values[i]);

        console.log("matches", matches);
        console.log("searchTerm", searchTerm);

        renderList(matches, searchTerm);
      }
    },
    renderItem: (value) => {
      console.log(value);
      return `@${value.value}`;
    },
  },
};
</script>
