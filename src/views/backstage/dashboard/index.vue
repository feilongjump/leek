<script setup lang="ts">
import LineChart from './components/LineChart.vue'
import Ranking from './components/Ranking.vue'
import Calendar from './components/Calendar.vue'
</script>

<template>
  <span class="text-2xl font-bold">Dashboard</span>

  <div class="w-full mt-6 flex flex-wrap">
    <div class="line-chart-dom">
      <LineChart />
      <Ranking />
    </div>

    <div class="w-full 2xl:w-96 flex flex-wrap md:flex-nowrap 2xl:block">
      <div
        class="w-full md:w-1/2 2xl:w-full h-[28rem] p-6 mt-6 md:mr-6 2xl:mt-0 2xl:mr-0 bg-white rounded-xl shadow-xl"
      >
        <Calendar />
      </div>
      <div class="w-full md:w-1/2 2xl:w-full h-80 bg-white mt-6 rounded-xl shadow-xl">
        <div class="w-full h-full flex justify-center items-center text-2xl">
          <span>reserve</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.line-chart-dom {
  @apply w-full 2xl:mr-6 flex flex-col rounded-xl shadow-xl bg-white;
}

@screen 2xl {
  .line-chart-dom {
    width: calc(theme('width.full') - theme('width.96') - theme('margin.6'));
  }
}
</style>
