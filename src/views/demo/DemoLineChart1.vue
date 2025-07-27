/* eslint-disable */
<!-- DemoLineChart.vue -->
<template>
  <div ref="demoLineChart1" class="chart-container" />
</template>

<script>
import * as echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
import resize from '@/views/dashboard/mixins/resize'
export default {
  name: 'DemoLineChart1',
  mixins: [resize],
  props: {
    options: {
      type: Object,
      required: true,
      default: () => ({
        backgroundColor: 'transparent',
        itemStyle: {
          areaColor: 'transparent'
        },
        title: {
          text: '设备故障时长',
          left: 'left',
          textStyle: {
            fontSize: 12,
            color: '#4CC9F0' // 添加文本颜色
          },
          padding: 0
        },
        grid: {
          left: '0px',
          right: '0px',
          top: '30px',
          bottom: '20px',
          containLabel: true
        },
        tooltip: {
          trigger: 'axis',
          formatter: '{b}<br/>{a}: {c}'
        },
        xAxis: {
          type: 'category',
          data: [
            '1月',
            '2月',
            '3月',
            '4月',
            '5月',
            '6月',
            '7月',
            '8月',
            '9月',
            '10月',
            '11月',
            '12月'
          ],
          axisLabel: {
            interval: 0,
            fontSize: 10,
            color: '#4CC9F0' // 添加文本颜色
          },
          axisLine: {
            lineStyle: {
              color: '#4CC9F0' // 坐标轴颜色
            }
          }
        },
        yAxis: {
          type: 'value',
          name: '',
          max: 100,
          min: 0,
          interval: 20,
          axisLabel: {
            formatter: '{value}h',
            color: '#4CC9F0'
          },
          axisLine: {
            lineStyle: {
              color: '#4CC9F0' // 坐标轴颜色
            }
          },
          splitLine: {
            show: false
          }
        },
        series: [{
          'name': 'SB-2025411',
          'type': 'line',
          'data': [65, 60, 40, 50, 38, 5, 35, 5, 55, 30, 60, 50],
          'itemStyle': { 'color': '#FF6B35' },
          'lineStyle': { 'width': 1 }
        },
        {
          'name': 'SB-202541',
          'type': 'line',
          'data': [10, 5, 50, 10, 60, 30, 60, 25, 5, 18, 5, 1],
          'itemStyle': { 'color': '#4361EE' },
          'lineStyle': { 'width': 1 }
        },
        {
          'name': 'SB-2025611',
          'type': 'line',
          'data': [5, 18, 22, 40, 25, 40, 38, 15, 25, 18, 38, 10],
          'itemStyle': { 'color': '#4CC9F0' },
          'lineStyle': { 'width': 1 }
        },
        {
          'name': 'SB-2025226',
          'type': 'line',
          'data': [0, 0, 10, 12, 15, 16, 30, 8, 7, 6, 20, 18],
          'itemStyle': { 'color': '#FFD166' },
          'lineStyle': { 'width': 1 }
        },
        {
          'name': 'SB-2025226',
          'type': 'line',
          'data': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          'itemStyle': { 'color': '#7209B7' },
          'lineStyle': { 'width': 1 }
        }],
        legend: {
          type: 'plain',
          orient: 'horizontal',
          x: 'center',
          y: 'bottom',
          padding: [0, 0, 0, 0],
          itemGap: 10,
          itemHeight: 9,
          itemWidth: 9,
          textStyle: {
            fontSize: 9
          }
        }
      })
    },
    theme: {
      type: String,
      default: 'dark'
    }
  },
  data() {
    return {
      chartInstance: null
    }
  },
  watch: {
    // 深度监听 options 变化
    options: {
      deep: true,
      handler() {
        this.updateChart()
      }
    },
    // 监听主题变化
    theme(newTheme) {
      this.destroyChart()
      this.initChart(newTheme)
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initChart()
      window.addEventListener('resize', this.handleResize)
    })
  },
  beforeDestroy() {
    this.destroyChart()
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    initChart(theme = this.theme) {
      if (!this.$refs.demoLineChart1) return
      // 初始化图表实例
      this.chartInstance = echarts.init(this.$refs.demoLineChart1, theme)
      // 设置初始配置
      this.updateChart()
    },
    updateChart() {
      if (this.chartInstance) {
        try {
          this.chartInstance.setOption(this.options, true) // true 表示不合并旧配置
        } catch (error) {
          console.error('echarts error:', error)
        }
      }
    },
    handleResize() {
      if (this.chartInstance) {
        this.chartInstance.resize()
      }
    },
    destroyChart() {
      if (this.chartInstance) {
        this.chartInstance.dispose()
        this.chartInstance = null
      }
    }
  }
}
</script>

<style scoped>
.chart-container {
  width: 100% !important;
  height: 100% !important;
}
</style>
