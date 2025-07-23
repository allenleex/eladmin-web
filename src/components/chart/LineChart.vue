<!-- 组件命名 -->
<script lang="ts">
export default {
  name: 'ZtLine'
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
  const lineData = [97.1, 97.8, 98.2, 98.4]
  const markPointData = lineData.map((item, index) => {
    return { coord: [index, item], value: item + '%' }
  })
  let myChart = echarts.init(document.getElementById(id))
  // 绘制图表
  myChart.setOption({
    grid: {
      left: '20%',
      top: '20%',
      right: '5%',
      bottom: '30%'
    },

    xAxis: {
      type: 'category',
      data: ['1', '2', '3', '4'],
      axisLine: {
        show: true // 隐藏X轴轴线
      },
      axisTick: {
        show: true // 隐藏X轴刻度线
      },
      axisLabel: {
        show: false // 隐藏X轴刻度值
      },
      splitLine: {
        show: true // 隐藏网格线
      }
    },
    yAxis: {
      type: 'value',
      min: 96,
      max: 100,
      axisLabel: {
        show: true,
        interval: 'auto',
        formatter: '{value} %'
      },
      axisLine: {
        show: true // 隐藏X轴轴线
      },
      axisTick: {
        show: true // 隐藏X轴刻度线
      },
      //   axisLabel: {
      //     show: true // 隐藏X轴刻度值
      //   },
      splitLine: {
        show: true // 隐藏网格线
      }
    },
    series: [
      {
        data: [97.1, 97.8, 98.2, 98.4],
        type: 'line',
        smooth: true,
        symbol: 'triangle',
        // symbolSize: 20,
        lineStyle: {
          color: '#bb2b28'
        },
        itemStyle: {
          color: '#bb2b28'
        },
        markPoint: {
          //   symbol: '#fff',
          symbolSize: [85, 41],
          symbolOffset: [0, -10],
          label: {
            color: '#fff'
          },
          data: markPointData
        }
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
