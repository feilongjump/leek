<script setup lang="ts">
import LineChartVue from '@/components/charts/LineChart.vue'

const options = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross'
    },
    padding: [5, 10]
  },
  grid: {
    top: '2%',
    left: '2%',
    right: '2%',
    bottom: '8%',
    containLabel: true
  },
  legend: {
    bottom: '0%',
    data: ['expected', 'actual']
  },
  xAxis: {
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    boundaryGap: false
  },
  yAxis: {},
  series: [
    {
      name: 'expected',
      smooth: true,
      type: 'line',
      itemStyle: {
        normal: {
          color: '#FF005A',
          lineStyle: {
            color: '#FF005A',
            width: 3
          }
        }
      },
      data: [556, 725, 424, 356, 586, 756, 616],
      animationDuration: 2800,
      animationEasing: 'cubicInOut'
    },
    {
      name: 'actual',
      smooth: true,
      type: 'line',
      itemStyle: {
        normal: {
          color: '#3888fa',
          lineStyle: {
            color: '#3888fa',
            width: 3
          },
          areaStyle: {
            color: '#f3f8ff'
          }
        }
      },
      data: [356, 218, 156, 526, 356, 256, 56],
      animationDuration: 2800,
      animationEasing: 'quadraticOut'
    }
  ]
}
</script>

<template>
  <span class="text-2xl font-bold">Dashboard</span>

  <div class="w-full xl:w-2/3 mt-6 p-6 flex flex-col rounded-xl shadow-xl bg-white">
    <span class="w-full mb-4 text-2xl">Title</span>
    <LineChartVue class="w-full h-96" :options="options" />
    <div class="w-full mt-4 pt-6 border-t border-gray-200 flex justify-between">
      <span class="text-gray-400 cursor-pointer">Options</span>
      <span class="text-indigo-400 cursor-pointer">Link</span>
    </div>
  </div>
</template>
