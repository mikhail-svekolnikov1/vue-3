<template>
  <thead>
    <tr>
      <th
        :class="`w-[${column?.width || 'auto'}]`"
        :style="column.randomWidth ? { width: column?.width } : null"
        v-for="column in columns"
        :key="column.title"
      >
        {{ column.title }}
      </th>
    </tr>
  </thead>
</template>

<script setup lang="ts" generic="ColumnsType extends Columns">
import type { Columns } from "../../../types/table.ts";

interface Props {
  columns: ColumnsType[];
}

defineProps<Props>();
</script>
