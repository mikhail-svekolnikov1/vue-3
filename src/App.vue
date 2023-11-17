<script setup lang="ts">
import Component1 from './Component1.vue'
</script>

<template>

<div>

    <Component1 >
      <template v-slot:buttonSlot="slotProps">
        <Button @click="console.log(slotProps.text)">Click {{slotProps.text}}</Button>
      </template>

      <template v-slot:buttonHeaderSlot="slotProps">
        <h1>Headeer is  {{slotProps.text}}</h1>
      </template>
    </Component1>


</div>
</template>
