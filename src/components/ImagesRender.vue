<template>
  <div
    class="test grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5 gap-10"
  >
    <div v-for="(dat, index) in data">
      <!--      <img src="../assets/img-1.png" class="img" />-->

      <!--      <img-->
      <!--        v-if="index % 2 !== 0"-->
      <!--        src="https://www.argospetinsurance.co.uk/assets/uploads/2017/12/cat-pet-animal-domestic-104827.jpeg"-->
      <!--        class="img"-->
      <!--      />-->
      <!--      <img-->
      <!--        v-else-->
      <!--        src="https://images.unsplash.com/photo-1699566382987-99a5ad8f0786?q=80&w=2576&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"-->
      <!--        class="img"-->
      <!--      />-->
      <!--      <img-->
      <!--        v-else-->
      <!--        src="https://www.cats.org.uk/uploads/images/featurebox_sidebar_kids/grief-and-loss.jpg"-->
      <!--        class="img"-->
      <!--      />-->
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const data = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
</script>

<style scoped>
.img {
  width: 100%;
  height: 100%;
}
</style>

//.test { // grid-template-columns: repeat(auto-fill, 258px); //}
