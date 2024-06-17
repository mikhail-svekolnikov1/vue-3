<template>
  <div class="ui-select relative w-[150px]" ref="target">
    <div
      @click="isShowList = !isShowList"
      class="ui-select__selected-value font-bold p-2 border border-primary rounded-xl cursor-pointer hover:border-secondary"
    >
      {{ modelValue }}
    </div>

    <div
      v-if="isShowList"
      class="ui-select__list absolute w-full bg-gray-100 rounded-xl"
    >
      <ul class="p-2">
        <li
          v-for="option in options"
          @click="onSelectOption(option.value)"
          class="ui-select__option p-2 rounded-xl cursor-pointer hover:bg-gray-300"
          :class="{
            '!bg-primary': option.value === modelValue,
          }"
          :key="option.key"
        >
          {{ option.key }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { onClickOutside } from "@vueuse/core";

interface Props {
  options: any[];
  modelValue: string;
}

interface Emits {
  (e: "update:modelValue", value: string): void;
}

const props = defineProps<Props>();
const emits = defineEmits<Emits>();

const model = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emits("update:modelValue", value);
  },
});

const isShowList = ref(false);
const target = ref(null);

onClickOutside(target, (event) => (isShowList.value = false));

const onSelectOption = (value: string) => {
  console.log(value);
  isShowList.value = false;

  model.value = value;
};
</script>

<style scoped></style>
