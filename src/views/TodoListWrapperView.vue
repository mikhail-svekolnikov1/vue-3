<template>
  <div>
    <div>TodoListWrapperView</div>
    <TodoList :todos="todos" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import TodoList from "../components/TodoListWrapperView/TodoList.vue";
import { Todos } from "../types.ts";

const todos = ref<Todos[]>([]);
const fetchTodoData = (): Promise<Todos[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const todoData: Todos[] = [
        { id: 1, title: "Task 1", completed: false },
        { id: 2, title: "Task 2", completed: true },
        { id: 3, title: "Task 3", completed: false },
        { id: 4, title: "Task 4", completed: true },
        { id: 5, title: "Task 5", completed: false },
      ];
      resolve(todoData);
    }, 1000); // Задержка в 1 секунду
  });
};

onMounted(async () => {
  const res = await fetchTodoData();
  todos.value = res;
});
</script>

<style scoped></style>
