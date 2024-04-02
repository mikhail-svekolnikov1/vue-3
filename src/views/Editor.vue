<template>
  <div class="ui-text-editor">
    <QuillEditor
      ref="myEditor"
      v-model:content="model"
      theme="snow"
      :modules="modules"
      contentType="html"
      @input="onInput"
      @update:content="textChange"
      @select="select"
    />
  </div>
</template>

<script setup lang="ts">
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";
import QuillMention from "quill-mention";
import "quill-mention/dist/quill.mention.css";
import { ref, watch } from "vue";

const model = ref("hello");
const myEditor = ref();

const atValues = [
  { id: 1, value: "firstName" },
  { id: 2, value: "lastName" },
  { id: 3, value: "companyName" },
];

// const hashValues = [
//   { id: 3, value: "Fredrik Sundqvist 2" },
//   { id: 4, value: "Patrik Sjölin 2" },
// ];
const select = (value) => {
  console.log(value);
  // console.log("contents", myEditor.value.getContents());
};

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
