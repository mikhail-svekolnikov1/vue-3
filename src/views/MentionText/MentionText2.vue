<template>
  <div class="container">
    <textarea
      v-model="text"
      @input="onInput"
      @keydown="onKeyDown"
      placeholder="@mention someone"
      ref="textarea"
    ></textarea>
    <div v-if="showMenu" :style="menuStyles" class="menu">
      <div
        v-for="(user, index) in filteredUsers"
        :key="user.username"
        class="menu-item"
        :class="{ selected: index === activeIndex }"
        @mousedown.prevent="selectUser(index)"
      >
        {{ user.username }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "",
      users: [{ username: "john_doe" }, { username: "jane_doe" }],
      filteredUsers: [],
      activeIndex: 0,
      showMenu: false,
      menuStyles: {
        top: "0px",
        left: "0px",
      },
    };
  },
  methods: {
    onInput(event) {
      const textarea = this.$refs.textarea;
      const position = textarea.selectionStart;
      const textBeforeCaret = this.text.slice(0, position);
      const triggerIndex = textBeforeCaret.lastIndexOf("@");

      if (triggerIndex === -1) {
        this.showMenu = false;
        return;
      }

      const query = textBeforeCaret.slice(triggerIndex + 1);
      this.filteredUsers = this.users.filter((user) =>
        user.username.startsWith(query)
      );

      if (this.filteredUsers.length > 0) {
        this.showMenu = true;
        this.activeIndex = 0;
        this.setMenuPosition(textarea, triggerIndex);
      } else {
        this.showMenu = false;
      }
    },
    onKeyDown(event) {
      if (!this.showMenu) return;

      switch (event.key) {
        case "ArrowDown":
          this.activeIndex = (this.activeIndex + 1) % this.filteredUsers.length;
          break;
        case "ArrowUp":
          this.activeIndex =
            (this.activeIndex - 1 + this.filteredUsers.length) %
            this.filteredUsers.length;
          break;
        case "Enter":
        case "Tab":
          event.preventDefault();
          this.selectUser(this.activeIndex);
          break;
        case "Escape":
          this.showMenu = false;
          break;
      }
    },
    selectUser(index) {
      const textarea = this.$refs.textarea;
      const position = textarea.selectionStart;
      const textBeforeCaret = this.text.slice(0, position);
      const triggerIndex = textBeforeCaret.lastIndexOf("@");
      const preMention = textBeforeCaret.slice(0, triggerIndex);
      const mention = `@${this.filteredUsers[index].username} `;
      const postMention = this.text.slice(position);

      this.text = `${preMention}${mention}${postMention}`;
      this.showMenu = false;
      this.$nextTick(() => {
        const newCaretPosition = preMention.length + mention.length;
        textarea.setSelectionRange(newCaretPosition, newCaretPosition);
        textarea.focus();
      });
    },
    setMenuPosition(textarea, triggerIndex) {
      const coordinates = this.getCaretCoordinates(textarea, triggerIndex);
      const { top, left } = textarea.getBoundingClientRect();

      this.menuStyles.top = `${window.scrollY + top + coordinates.top}px`;
      this.menuStyles.left = `${window.scrollX + left + coordinates.left}px`;
    },
    getCaretCoordinates(element, position) {
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
        height: span.offsetHeight,
      };

      div.remove();

      return coordinates;
    },
  },
};
</script>

<style>
.container {
  position: relative;
  width: 300px;
  margin: 20px;
}

textarea {
  width: 100%;
  height: 100px;
}

.menu {
  position: absolute;
  background: white;
  border: 1px solid #ccc;
  z-index: 1000;
}

.menu-item {
  padding: 5px;
  cursor: pointer;
}

.menu-item.selected {
  background: #007bff;
  color: white;
}
</style>
