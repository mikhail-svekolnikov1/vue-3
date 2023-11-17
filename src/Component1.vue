<script setup lang="ts">
import Component2 from "./Component2.vue";
</script>

<template>
<div>
  <div>Component child =></div>




  <Component2>
    <template v-slot:buttonSlot="slotProps">
      <slot name="buttonSlot" :text="slotProps.text" />
    </template>

    <template v-slot:buttonHeaderSlot="slotProps">
      <slot name="buttonHeaderSlot" :text="slotProps.text" />
    </template>
  </Component2>
</div>
</template>
