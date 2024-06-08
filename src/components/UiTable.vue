<template>
  <table class="styled-table">
    <thead>
      <tr>
        <th v-for="column in columns" :key="column.title">
          {{ column.title }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-if="loading">
        <td class="skeleton"></td>
        <td class="skeleton"></td>
        <td class="skeleton"></td>
      </tr>
      <tr v-else v-for="(item, index) in dataSource" :key="item.id">
        <td>{{ item[columns[index].dataIndex] }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script
  setup
  lang="ts"
  generic="ColumnsType extends Columns, DataSourceType extends DataSource"
>
import { onMounted, ref } from "vue";

export interface Columns {
  title: string;
  dataIndex: string;
}

export interface DataSource {
  id: number;
}

interface Props {
  columns: ColumnsType[];
  dataSource: DataSourceType[];
}

defineProps<Props>();

const loading = ref(true);

onMounted(() => {
  setTimeout(() => {
    // loading.value = false;
  }, 1000); // Симулируем загрузку данных
});
</script>

<style lang="scss" scoped>
table {
  border-collapse: separate;
  border-spacing: 0;
  min-width: 350px;
}

table tr th,
table tr td {
  border-right: 1px solid #bbb;
  border-bottom: 1px solid #bbb;
  padding: 10px 20px;
}

table tr th:first-child,
table tr td:first-child {
  border-left: 1px solid #bbb;
}
table tr th {
  background: #eee;
  text-align: left;
  border-top: solid 1px #bbb;
}

/* top-left border-radius */
table tr:first-child th:first-child {
  border-top-left-radius: 6px;
}

/* top-right border-radius */
table tr:first-child th:last-child {
  border-top-right-radius: 6px;
}

/* bottom-left border-radius */
table tr:last-child td:first-child {
  border-bottom-left-radius: 6px;
}

/* bottom-right border-radius */
table tr:last-child td:last-child {
  border-bottom-right-radius: 6px;
}

/* Skeleton loading styles */
.skeleton {
  background-color: #ddd;
  height: 20px;
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
