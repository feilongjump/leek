<template>
  <div
    class="
      h-screen
      w-96
      fixed
      top-0
      right-0
      bg-transparent
      pt-8
      px-4
      transition-all
      duration-500
      ease-in-out
      border-l border-gray-500
      flex
      items-center
      flex-col
    "
  >
    <div class="w-full text-white mb-8 cursor-pointer">
      <XCircleIcon class="w-6 h-6 float-right" />
    </div>
    <div class="w-full h-64 mb-8">
      <DoughnutChart />
    </div>
    <div class="w-full h-64">
      <LineChart />
    </div>
  </div>
</template>

<script lang="ts" setup>
import XCircleIcon from '@heroicons/vue/outline/esm/XCircleIcon'
import LineChart from './LineChart.vue'
import DoughnutChart from './DoughnutChart.vue'
</script>
