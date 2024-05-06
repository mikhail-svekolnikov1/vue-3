<template>
  <div class="">
    <!--    <div class="inline-flex flex-col mb-10">-->
    <!--      <router-link v-for="(route, index) in routes" :to="route.value">-->
    <!--        {{ `${index}. ${route.label}` }}</router-link-->
    <!--      >-->
    <!--    </div>-->

    <!--    <div v-if="isEdit">-->
    <!--      <input-->
    <!--        autofocus-->
    <!--        ref="root"-->
    <!--        v-model="vmodel"-->
    <!--        @focus="$event.target?.select()"-->
    <!--      />-->
    <!--      <button @click="isEdit = false">save</button>-->
    <!--    </div>-->
    <!--    <div v-else @click="clickHand">{{ vmodel }}</div>-->
    <router-view></router-view>
    <!--    <TodoListWrapperView />-->
  </div>
</template>

<script setup lang="ts">
import TodoListWrapperView from "./views/TodoListWrapperView.vue";
import { RouteNames } from "./consts.ts";
import { ref, watchEffect } from "vue";

const isEdit = ref<boolean>(false);
const vmodel = ref<string>("content below: ");

const root = ref<HTMLDivElement | null>(null);

const clickHand = () => {
  isEdit.value = true;
};

watchEffect(() => {
  if (root.value) {
    root.value.focus();
  }
});

const routes = [
  {
    value: "/",
    label: "Home",
  },
  {
    value: "/about",
    label: "About",
  },
  {
    value: RouteNames.GIFT_LIST,
    label: "Gift list with predefined data",
  },

  {
    value: RouteNames.DATE_PICKER,
    label: "Date picker",
  },

  {
    value: RouteNames.INPUT_CURRENCY,
    label: "Input currency",
  },

  {
    value: RouteNames.SEND_GIFTS,
    label: "Layout TEST",
  },
];
</script>
