<template>
  <div class="">
    <div class="inline-flex flex-col mb-10">
      <router-link v-for="(route, index) in routes" :to="route.value">
        {{ `${index}. ${route.label}` }}</router-link
      >
    </div>

    <div>Content below:</div>
    <router-view></router-view>
    <!--    <TodoListWrapperView />-->
  </div>
</template>

<script setup lang="ts">
import TodoListWrapperView from "./views/TodoListWrapperView.vue";
import { RouteNames } from "./consts.ts";

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
];
</script>
