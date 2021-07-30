<template>
  <div ref="doughnutDom" class="w-full h-full"></div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import * as echarts from 'echarts/core'
import { PieChart } from 'echarts/charts'
import { CanvasRenderer } from 'echarts/renderers'
import { LegendComponent, TitleComponent, TooltipComponent } from 'echarts/components'

echarts.use([TitleComponent, TooltipComponent, LegendComponent, PieChart, CanvasRenderer])

const doughnutDom = ref<HTMLElement>()

onMounted(() => {
  const doughnutChart = echarts.init(doughnutDom.value!)

  const options = {
    title: {
      show: true,
      text: '某站点用户访问来源',
      textStyle: {
        color: '#ccc'
      }
    },
    tooltip: {
      trigger: 'item'
    },
    series: [
      {
        name: '访问来源',
        type: 'pie',
        radius: '65%',
        center: ['50%', '60%'],
        label: {
          show: true,
          color: '#aaa'
        },
        data: [
          { value: 1048, name: '搜索引擎' },
          { value: 735, name: '直接访问' },
          { value: 580, name: '邮件营销' },
          { value: 484, name: '联盟广告' },
          { value: 300, name: '视频广告' }
        ]
      }
    ]
  }
  doughnutChart.setOption(options)
})
</script>
