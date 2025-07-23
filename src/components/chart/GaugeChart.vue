<!-- 组件命名 -->
<script lang="ts">
export default {
  name: 'ZtGauge'
}
</script>
<!-- 业务代码 -->
<script setup lang="ts">
import * as echarts from 'echarts'
import { onMounted, defineProps } from 'vue'
const { id, seriesData } = defineProps(['id', 'seriesData'])
onMounted(() => {
  setTimeout(() => {
    initChart()
  }, 0)
})
const initChart = () => {
  let myChart = echarts.init(document.getElementById(id))
  // 绘制图表
  myChart.setOption({
    series: [
      {
        type: 'gauge',
        axisLine: {
          lineStyle: {
            width: 15,
            color: [
              [0.1, '#92c7b1'],
              [0.2, '#92c7b1'],
              [0.8, '#5c87a5'],
              [1, '#cd3e3e']
            ]
          }
        },
        pointer: {
          itemStyle: {
            color: 'auto'
          }
        },
        axisTick: {
          distance: -14,
          length: 10,
          lineStyle: {
            color: '#fff',
            width: 0.5
          }
        },
        splitLine: {
          distance: -30,
          length: 10,
          lineStyle: {
            color: '#fff',
            width: 4
          }
        },
        axisLabel: {
          color: 'inherit',
          distance: 40,
          fontSize: 10
        },
        detail: {
          valueAnimation: true,
          formatter: '{value}%',
          color: 'inherit',
          fontSize: 15
        },
        data: [
          {
            value: 97
          }
        ]
      }
    ]
  })
  window.onresize = function () {
    //自适应大小
    myChart.resize()
  }
}
</script>

<template>
  <div :id="id" style="width: 100%; height: 100%" />
</template>
<style lang="scss" scoped></style>
