<script setup lang="ts">
import Component2 from "./Component2.vue";
</script>

<template>
<div>
  <div>Component child =></div>

  <slot name="buttonHeaderSlot" :text="'Headeeer'"></slot>
  <slot name="buttonSlot" :text="'text'"></slot>


<!--  <Component2 />-->
</div>
</template>
