<template>
  <div
    class="w-full flex justify-between items-center p-6 pb-4 border-b mb-6 dark:border-slate-700"
  >
    <span class="tracking-wide font-semibold dark:text-gray-300">Trend</span>
    <div class="w-44 h-10 bg-gray-50 dark:bg-slate-900 rounded-md flex justify-center items-center">
      <button
        class="h-8 bg-white dark:bg-slate-800 dark:text-gray-300 text-xs px-2 py-1 rounded-md mr-2 shadow-xl"
      >
        This Week
      </button>
      <button
        class="h-8 text-xs px-2 py-1 rounded-md text-gray-500 dark:text-gray-400 hover:text-indigo-300 dark:hover:text-indigo-300"
      >
        This Month
      </button>
    </div>
  </div>
  <LineChart class="w-full h-96 px-6" :options="options" />
</template>

<script setup lang="ts">
import LineChart from '@/components/Charts/LineChart.vue'
import type { ECLineOption } from '@/components/Charts/types'

const options = <ECLineOption>{
  backgroundColor: 'transparent',
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross'
    },
    padding: [5, 10]
  },
  legend: {
    top: '0%',
    right: '2%',
    data: ['expected', 'actual'],
    containLabel: true
  },
  grid: {
    left: '2%',
    right: '2%',
    bottom: '0%',
    containLabel: true
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
