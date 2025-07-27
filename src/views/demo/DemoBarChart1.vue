/* eslint-disable */
<!-- DemoLineChart.vue -->
<template>
  <div ref="demoLineChart" class="chart-container" />
</template>

<script>
import * as echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
import resize from '@/views/dashboard/mixins/resize'
import mockData from '@/assets/json/demo_line_chart.json'
export default {
  name: 'DemoLineChart',
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
          text: '设备创收',
          left: 'left',
          textStyle: {
            fontSize: 12
          },
          padding: 0
        },
        grid: {
          left: '0px',
          right: '0px',
          top: '50px',
          bottom: '20px',
          containLabel: true
        },
        tooltip: {
          trigger: 'axis',
          formatter: '{b}<br/>{a}: {c}'
        },
        xAxis: {
          type: 'category',
          data: mockData.xAxis,
          axisLabel: {
            interval: 0
          }
        },
        yAxis: {
          type: 'value',
          name: '销售额(万)'
        },
        series: [{
          name: '2023年',
          type: 'bar',
          smooth: true,
          data: mockData.series,
          itemStyle: {
            color: '#5470C6'
          },
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: 'rgba(84, 112, 198, 0.5)' },
              { offset: 1, color: 'rgba(84, 112, 198, 0.1)' }
            ])
          }
        }],
        legend: {
          type: 'plain',
          orient: 'horizontal',
          x: 'center',
          y: 'bottom',
          padding: [0, 0, 0, 0]
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
      if (!this.$refs.demoLineChart) return
      // 初始化图表实例
      this.chartInstance = echarts.init(this.$refs.demoLineChart, theme)
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
