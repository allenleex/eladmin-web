<!-- 组件命名 -->
<script lang="ts">
export default {
  name: 'ZtCake'
}
</script>
<!-- 业务代码 -->
<script setup lang="ts">
import * as echarts from 'echarts'
import { onMounted, defineProps } from 'vue'
const { id, seriesData } = defineProps(['id', 'seriesData'])
// watch(
//   () => lineData,
//   (newData) => {
//     console.log(newData, 'line')

//     initChart()
//   },
//   { immediate: false, deep: true }
// )
onMounted(() => {
  setTimeout(() => {
    initChart()
  }, 0)
})
const initChart = () => {
  console.log(id)

  let myChart = echarts.init(document.getElementById(id))
  // 绘制图表
  myChart.setOption({
    tooltip: {
      trigger: 'item'
    },
    legend: {
      //对图形的解释部分
      orient: 'vertical',
      right: 0,
      y: 'center',
      icon: 'circle'
    },
    color: ['#a10000', '#fe8081', '#d6a2a4'],
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: ['50%', '90%'],
        center: ['35%', '50%'],
        avoidLabelOverlap: false,
        itemStyle: {
          //   borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2
        },
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 10,
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: seriesData
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
