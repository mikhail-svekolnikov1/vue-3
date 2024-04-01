<template>
  <div>
    <router-link to="/">Go to Home</router-link>
    <router-link to="/about">Go to About </router-link>
    <router-view></router-view>
    <!--    <TodoListWrapperView />-->
  </div>
</template>

<script setup lang="ts">
import TodoListWrapperView from "./views/TodoListWrapperView.vue";
</script>
