/* eslint-disable */
<!-- DemoLineChart.vue -->
<template>
  <div ref="demoLineChart2" class="chart-container" />
</template>

<script>
import * as echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
import resize from '@/views/dashboard/mixins/resize'
export default {
  name: 'DemoLineChart2',
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
          text: '平均使用次数',
          left: 'left',
          textStyle: {
            fontSize: 12,
            color: '#AABAE3' // 添加文本颜色
          },
          padding: 2
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
            color: '#AABAE3' // 添加文本颜色
          },
          axisLine: {
            lineStyle: {
              color: '#AABAE3' // 坐标轴颜色
            }
          }
        },
        yAxis: [
          {
            type: 'value',
            name: '',
            min: 0,
            max: 160,
            interval: 20,
            axisLabel: {
              formatter: '{value}',
              color: '#AABAE3',
              backgroundColor: 'transparent'
            },
            axisLine: {
              lineStyle: {
                color: '#AABAE3'
              }
            },
            splitLine: {
              show: false
            },
            nameTextStyle: {
              color: '#AABAE3'
            }
          },
          {
            type: 'value',
            name: '',
            min: 0,
            max: 100, // 修正最大值
            interval: 20,
            axisLabel: {
              formatter: '{value}%',
              color: '#AABAE3'
            },
            axisLine: {
              lineStyle: {
                color: '#AABAE3'
              }
            },
            splitLine: {
              show: false
            },
            nameTextStyle: {
              color: '#AABAE3'
            }
          }],
        series: [{
          'name': '刚管',
          'type': 'line',
          'data': [80, 70, 60, 50, 40, 30, 20, 10, 5, 20, 40, 60],
          'itemStyle': { 'color': '#4361EE' },
          'lineStyle': { 'width': 2 },
          'areaStyle': { 'color': '#4361EE', 'opacity': '0.1' }
        },
        {
          'name': '扣件',
          'type': 'line',
          'data': [20, 22, 24, 26, 28, 35, 45, 60, 65, 70, 75, 80],
          'itemStyle': { 'color': '#FFD166' },
          'lineStyle': { 'width': 2 },
          'areaStyle': { 'color': '#FFD166', 'opacity': '0.1' }
        },
        {
          'name': '胶布',
          'type': 'line',
          'data': [0, 10, 20, 30, 40, 50, 60, 50, 40, 30, 20, 10],
          'itemStyle': { 'color': '#FF6B35' },
          'lineStyle': { 'width': 2 },
          'areaStyle': { 'color': '#4361EE', 'opacity': '0.1' }
        }],
        legend: {
          type: 'plain',
          orient: 'horizontal',
          x: 'center',
          y: 'bottom',
          padding: [0, 0, 0, 0],
          itemGap: 30,
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
      if (!this.$refs.demoLineChart2) return
      // 初始化图表实例
      this.chartInstance = echarts.init(this.$refs.demoLineChart2, theme)
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
