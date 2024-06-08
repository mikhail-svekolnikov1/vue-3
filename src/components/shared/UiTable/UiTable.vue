<template>
  <table class="styled-table">
    <TableHead :columns="columns" />
    <tbody>
      <tr v-for="item in dataSource" :key="item.id">
        <td v-for="(column, index) in columns" :key="column.title">
          {{ item[columns[index].dataIndex] }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script
  setup
  lang="ts"
  generic="ColumnsType extends Columns, DataSourceType extends DataSource"
>
import type { Columns, DataSource } from "../../../types/table.ts";
import TableHead from "./TableHead.vue";
import { onMounted } from "vue";

interface Props {
  columns: ColumnsType[];
  dataSource: DataSourceType[];
}

const props = defineProps<Props>();

onMounted(() => {
  console.log(props.dataSource);
  console.log(props.columns);
});
</script>

<style lang="scss">
.styled-table {
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
</style>
