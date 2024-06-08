<template>
  <table class="styled-empty-table">
    <TableHead :columns="columns" />
    <tbody>
      <tr v-for="n in 5" :key="'skeleton-' + n">
        <td v-for="column in columns" :key="column.title">
          <div
            class="skeleton"
            :style="
              column.randomWidth ? { width: getRandomWidthPercentage() } : null
            "
          />
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts" generic="ColumnsType extends Columns">
import type { Columns } from "../../../types/table.ts";
import TableHead from "./TableHead.vue";

interface Props {
  columns: ColumnsType[];
}

defineProps<Props>();

const getRandomWidthPercentage = () => {
  const min = 60;
  const max = 100;

  const result = Math.floor(Math.random() * (max - min + 1)) + min + "%";

  return result;
};
</script>

<style lang="scss">
.styled-empty-table {
  border-collapse: separate;
  border-spacing: 0;
  min-width: 350px;

  th,
  td {
    border-right: 1px solid #bbb;
    border-bottom: 1px solid #bbb;
    padding: 10px 20px;
  }

  th:first-child,
  td:first-child {
    border-left: 1px solid #bbb;
  }

  th {
    background: #eee;
    text-align: left;
    border-top: solid 1px #bbb;
  }

  /* top-left border-radius */
  tr:first-child th:first-child {
    border-top-left-radius: 6px;
  }

  /* top-right border-radius */
  tr:first-child th:last-child {
    border-top-right-radius: 6px;
  }

  /* bottom-left border-radius */
  tr:last-child td:first-child {
    border-bottom-left-radius: 6px;
  }

  /* bottom-right border-radius */
  tr:last-child td:last-child {
    border-bottom-right-radius: 6px;
  }
}

/* Skeleton loading styles */
.skeleton {
  background-color: #ddd;
  height: 14px;
  width: 80%; /* Ширина полоски */
  margin: 6px auto; /* Отступы сверху и снизу */
  border-radius: 4px; /* Радиус */
  position: relative;
  overflow: hidden;
}

.skeleton::after {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.2),
    transparent
  );
  animation: loading 1.5s infinite;
}

@keyframes loading {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}
</style>
