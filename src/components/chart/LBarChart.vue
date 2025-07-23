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
      show: seriesData.showlegend,
      data: seriesData.legend,
      itemGap: 15,
      //对图形的解释部分
      orient: 'vertical',
      right: '0',
      y: 'center',
      icon: 'circle'
    },
    grid: {
      left: seriesData.grid.left,
      top: seriesData.grid.top,
      right: seriesData.grid.right,
      bottom: seriesData.grid.bottom
    },
    xAxis: {
      type: 'value',
      max: seriesData.max,
      axisLine: {
        show: seriesData.showxAxis // 隐藏Y轴轴线
      },
      axisTick: {
        show: seriesData.showxAxis // 隐藏Y轴刻度线
      },
      axisLabel: {
        show: seriesData.showxAxis // 隐藏Y轴刻度值
      },
      splitLine: {
        show: seriesData.showxAxis
      }
    },
    yAxis: {
      type: 'category',

      inverse: seriesData.inverse, // 排序,
      data: seriesData.yAxisData,
      boundaryGap: seriesData.showyAxis,
      axisLine: {
        show: seriesData.showyAxis // 隐藏X轴轴线
      },
      axisTick: {
        show: seriesData.showyAxis // 隐藏X轴刻度线
      },
      axisLabel: {
        show: seriesData.showyAxis // 隐藏X轴刻度值
      },
      splitLine: {
        show: seriesData.showyAxis // 隐藏网格线
      }
    },
    color: seriesData.color,

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
