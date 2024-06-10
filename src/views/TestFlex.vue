<template>
  <div class="flex justify-between">
    <div class="border border-primary w-1/2" />
    <div class="border border-primary w-1/2">
      <div class="block w-full my-10">
        <div class="flex justify-between">
          <div class="pie-chart">
            <img
              src="../assets/present.png"
              alt="Center Image"
              class="center-image"
            />
          </div>

          <div class="flex-container ms-12">
            <div v-for="item in emptyData" :key="item" class="item">
              <div class="w-[118px] mb-2 skeleton" />
              <div class="w-[33px] skeleton" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const emptyData = [...Array(6).keys()];
</script>

<style lang="scss" scoped>
.flex-container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}

.item {
  width: 50%;
}

.skeleton {
  background-color: gray;
  height: 9px;
  max-width: 118px;
  border-radius: 30px;
  position: relative;
  overflow: hidden;
}

.pie-chart {
  position: relative;
  width: 250px;
  height: 250px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
}

.pie-chart::before {
  content: "";
  position: absolute;
  width: 250px;
  height: 250px;
  border-radius: 50%;
  border: 40px solid transparent;
  border-top-color: #f2f4f7;
  border-right-color: #e4eaf4;
  border-bottom-color: #dae0eb;
  border-left-color: #dae0eb;
  transform: rotate(45deg);
  box-sizing: border-box;
}

.center-image {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90px;
  height: 77px;
}
</style>
