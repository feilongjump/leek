<template>
  <div ref="lineDom" class="w-full h-64"></div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import * as echarts from 'echarts/core'
import { LineChart } from 'echarts/charts'
import { GridComponent } from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'

echarts.use([GridComponent, LineChart, CanvasRenderer])

const lineDom = ref<HTMLElement>()

onMounted(() => {
  const lineChart = echarts.init(lineDom.value!)

  const options = {
    title: {
      show: true,
      text: '成长值',
      textStyle: {
        color: '#ccc'
      }
    },
    grid: {
      left: '15%',
      right: '8%'
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value',
      splitLine: {
        show: false
      }
    },
    series: [
      {
        type: 'line',
        symbol: 'none',
        lineStyle: {
          color: '#F87171',
          cap: 'round'
        },
        areaStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: '#F87171' // 0% 处的颜色
              },
              {
                offset: 1,
                color: '#F9FAFB' // 100% 处的颜色
              }
            ]
          },
          opacity: 0.3
        },
        data: [8200, 9320, 9010, 9340, 12900, 13300, 13200]
      }
    ]
  }
  lineChart.setOption(options)
})
</script>
