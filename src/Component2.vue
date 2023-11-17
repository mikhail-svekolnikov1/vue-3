<script setup lang="ts">
</script>

<template>
<div>
  <div>Component super child</div>
  <slot name="buttonHeaderSlot" :text="'Headeeer'"></slot>
  <slot name="buttonSlot" :text="'text'"></slot>
</div>
</template>
