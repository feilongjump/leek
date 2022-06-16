<script setup lang="ts">
import { onMounted, ref } from 'vue'

import * as echarts from 'echarts/core'
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent
} from 'echarts/components'
import { LineChart } from 'echarts/charts'
import { UniversalTransition } from 'echarts/features'
import { CanvasRenderer } from 'echarts/renderers'
import type { ECLineOption } from './types'

echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  LineChart,
  CanvasRenderer,
  UniversalTransition
])

interface Props {
  options: ECLineOption
}

const lineChart = ref<HTMLElement>()
const props = defineProps<Props>()

onMounted(() => {
  // 创建图表
  const chartInstance = echarts.init(lineChart.value as HTMLElement, 'dark')
  chartInstance.setOption(props.options)
})
</script>

<template>
  <div ref="lineChart"></div>
</template>
