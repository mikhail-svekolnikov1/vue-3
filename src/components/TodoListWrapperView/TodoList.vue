<template>
  <div>
    <h1>TodoList</h1>
    <TodoFilter @applyFilter="onApplyFilter" />
    <div v-for="todo in copyOfTodos" :key="todo.id">
      {{ todo.title }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import type { Todos } from "../../types.ts";
import TodoFilter from "./TodoFilter.vue";

interface Props {
  todos: Todos[];
}

const props = defineProps<Props>();

const copyOfTodos = ref(props.todos);

watch(
  () => props.todos,
  () => {
    copyOfTodos.value = props.todos;
  }
);

const onApplyFilter = (value: string) => {
  copyOfTodos.value = props.todos.filter((t) => t.title.includes(value));
};
</script>

<style scoped></style>
