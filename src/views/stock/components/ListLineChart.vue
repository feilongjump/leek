<template>
  <div ref="lineDom" class="w-full h-16"></div>
</template>

<script lang="ts" setup>
import { onMounted, ref, defineProps } from 'vue'
import * as echarts from 'echarts/core'
import { LineChart } from 'echarts/charts'
import { GridComponent } from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'

echarts.use([GridComponent, LineChart, CanvasRenderer])

const prpos = defineProps({
  color: {
    type: String,
    required: true
  },
  data: {
    type: Array,
    required: true
  }
})

const lineDom = ref<HTMLElement>()

onMounted(() => {
  const lineChart = echarts.init(lineDom.value!)

  const options = {
    grid: {
      left: '1%',
      right: '1%',
      top: '1%',
      bottom: '1%'
    },
    xAxis: {
      show: false,
      type: 'category'
    },
    yAxis: {
      show: false
    },
    series: [
      {
        type: 'line',
        symbol: 'none',
        lineStyle: {
          width: 1,
          color: prpos.color
        },
        areaStyle: {
          color: prpos.color,
          opacity: 0.3
        },
        data: prpos.data
      }
    ]
  }

  lineChart.setOption(options)
})
</script>
