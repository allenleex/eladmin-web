<!-- 组件命名 -->
<script lang="ts">
export default {
  name: 'ZtBar'
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
    legend: {
      data: seriesData.legendData,
      //对图形的解释部分
      orient: 'vertical',
      right: '10%',
      y: 'center',
      icon: 'circle'
    },
    xAxis: {
      type: 'category',
      data: seriesData.xAxisData,
      boundaryGap: false,
      axisLine: {
        show: false // 隐藏X轴轴线
      },
      axisTick: {
        show: false // 隐藏X轴刻度线
      },
      axisLabel: {
        show: false // 隐藏X轴刻度值
      },
      splitLine: {
        show: false // 隐藏网格线
      }
    },
    grid: {
      left: '30%',
      top: 0,
      right: 0,
      bottom: 0
    },
    yAxis: {
      type: 'value',
      min: 0,
      max: 100,

      axisLine: {
        show: false // 隐藏Y轴轴线
      },
      axisTick: {
        show: false // 隐藏Y轴刻度线
      },
      axisLabel: {
        show: false // 隐藏Y轴刻度值
      },
      splitLine: {
        show: false
      }
    },
    color: ['#004cca', '#c10003', '#01b051'],
    series: seriesData.series
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
