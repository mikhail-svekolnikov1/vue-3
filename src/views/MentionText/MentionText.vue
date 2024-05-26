<template>
  <div class="p-10">
    <textarea
      ref="textarea"
      @input="handleInput"
      @keydown="handleKeydown"
      @click="updateCursorCoordinates"
      @mousemove="updateCursorCoordinates"
    ></textarea>
    <div
      ref="dropdown"
      class="dropdown"
      v-show="showDropdown"
      :style="{ top: `${cursorPosition.y}px`, left: `${cursorPosition.x}px` }"
    >
      <!-- Содержимое дропдауна -->
      <ul>
        <li>Option 1</li>
        <li>Option 2</li>
        <li>Option 3</li>
      </ul>
    </div>
    <div>
      Cursor Position: X: {{ cursorPosition.x }}, Y: {{ cursorPosition.y }}
    </div>
  </div>
</template>

<script>
import { ref, reactive, onMounted, watch } from "vue";

export default {
  setup() {
    const textarea = ref(null);
    const dropdown = ref(null);
    const cursorPosition = reactive({ x: 0, y: 0 });
    const showDropdown = ref(true);

    const handleInput = (event) => {
      updateCursorCoordinates(event);
    };

    const handleKeydown = (event) => {
      setTimeout(() => updateCursorCoordinates(event), 0);
    };

    const updateCursorCoordinates = (event) => {
      if (!textarea.value) return;

      const { offsetTop, offsetLeft } = textarea.value;
      const { scrollTop, scrollLeft } = textarea.value;

      const coordinates = getCursorCoordinates(
        textarea.value,
        textarea.value.selectionEnd
      );

      cursorPosition.x = coordinates.left + offsetLeft - scrollLeft;
      cursorPosition.y = coordinates.top + offsetTop - scrollTop + 20; // Смещение для дропдауна
    };

    const getCursorCoordinates = (element, position) => {
      const dummyDiv = document.createElement("div");
      dummyDiv.style.position = "absolute";
      dummyDiv.style.visibility = "hidden";
      dummyDiv.style.whiteSpace = "pre-wrap";
      dummyDiv.style.font = window.getComputedStyle(element).font;
      dummyDiv.style.padding = window.getComputedStyle(element).padding;
      dummyDiv.style.border = window.getComputedStyle(element).border;
      dummyDiv.style.wordWrap = window.getComputedStyle(element).wordWrap;
      dummyDiv.style.width = `${element.offsetWidth}px`;

      const text = element.value.substring(0, position);
      const span = document.createElement("span");
      span.appendChild(document.createTextNode("."));
      dummyDiv.appendChild(document.createTextNode(text));
      dummyDiv.appendChild(span);

      document.body.appendChild(dummyDiv);
      const { offsetTop, offsetLeft } = span;
      document.body.removeChild(dummyDiv);

      return { top: offsetTop, left: offsetLeft };
    };

    onMounted(() => {
      if (textarea.value) {
        textarea.value.addEventListener("input", handleInput);
        textarea.value.addEventListener("keydown", handleKeydown);
        textarea.value.addEventListener("click", updateCursorCoordinates);
        textarea.value.addEventListener("mousemove", updateCursorCoordinates);
      }
    });

    watch(cursorPosition, () => {
      if (dropdown.value) {
        dropdown.value.style.top = `${cursorPosition.y}px`;
        dropdown.value.style.left = `${cursorPosition.x}px`;
      }
    });

    return {
      textarea,
      dropdown,
      cursorPosition,
      showDropdown,
      handleInput,
      handleKeydown,
      updateCursorCoordinates,
    };
  },
};
</script>

<style scoped>
textarea {
  width: 300px;
  height: 200px;
}

.dropdown {
  position: absolute;
  border: 1px solid #ccc;
  background-color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 10px;
  z-index: 1000;
}
</style>
