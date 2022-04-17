<script setup lang="ts">
import { onMounted, ref } from 'vue'

import * as echarts from 'echarts/core'
import { GridComponent } from 'echarts/components'
import { LineChart, LineSeriesOption } from 'echarts/charts'
import { UniversalTransition } from 'echarts/features'
import { CanvasRenderer } from 'echarts/renderers'

echarts.use([GridComponent, LineChart, CanvasRenderer, UniversalTransition])

type ECOption = echarts.ComposeOption<LineSeriesOption>

interface Props {
  options: LineSeriesOption
}

const lineChart = ref<HTMLElement>()
const props = defineProps<Props>()

onMounted(() => {
  // 创建图表
  const chartInstance = echarts.init(lineChart.value as HTMLElement)
  chartInstance.setOption(props.options as ECOption)
})
</script>

<template>
  <div ref="lineChart"></div>
</template>
