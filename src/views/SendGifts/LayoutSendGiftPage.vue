<template>
  <div class="layout flex flex-col min-h-screen">
    <div class="flex justify-between px-10 border border-b-black py-5">
      <div>Logo</div>
      <div class="cursor-pointer">Close</div>
    </div>
    <div class="p-10">
      <router-view />
    </div>

    <div
      class="layout-footer flex items-center justify-center mt-auto px-10 mb-5"
    >
      <button class="border border-blue-200 p-5 px-10 rounded-2xl mr-10">
        Back
      </button>
      <button class="border border-blue-200 p-5 px-10 rounded-2xl">Next</button>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
