<template>
  <div ref="demoPieChart1" class="chart-container" />
</template>

<script>
import * as echarts from 'echarts'
import 'echarts/theme/macarons' // 正确引入主题

export default {
  name: 'DemoPieChart1',
  props: {
    options: {
      type: Object,
      required: true,
      default: () => ({
        backgroundColor: 'transparent',
        title: {
          text: '项目资产折旧',
          left: 'left',
          textStyle: {
            fontSize: 12,
            color: '#ffffff' // 添加文本颜色
          },
          padding: 0
        },
        tooltip: {
          trigger: 'item',
          formatter: '{b}<br/>{a}: {c}万 ({d}%)'
        },
        legend: {
          orient: 'vertical',
          right: 10,
          top: 'center',
          textStyle: {
            color: '#ffffff'
          }
        },
        series: [
          {
            name: '折旧情况',
            type: 'pie',
            radius: ['0%', '60%'],
            center: ['35%', '50%'],
            avoidLabelOverlap: false,
            itemStyle: {
              borderColor: '#1A1C2F',
              borderWidth: 2
            },
            label: {
              show: true,
              formatter: '{b}\n折旧:{c}万\n{d}%',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderRadius: 0,
              padding: [5, 5],
              color: '#ffffff',
              fontSize: 9
            },
            labelLine: {
              show: true,
              length: 15,
              length2: 10
            },
            emphasis: {
              label: {
                show: true,
                fontSize: 14,
                fontWeight: 'bold'
              }
            },
            data: [
              {
                value: 8.4,
                name: 'SB-2025827',
                itemStyle: {
                  color: '#FFD166'
                }
              },
              {
                value: 27,
                name: 'SB-2025231',
                itemStyle: {
                  color: '#FF6B35'
                }
              },
              {
                value: 68.4,
                name: 'SB-2025416',
                itemStyle: {
                  color: '#7209B7'
                }
              },
              {
                value: 38,
                name: 'SB-2025611',
                itemStyle: {
                  color: '#4CC9F0'
                }
              }
            ]
          }
        ]
      })
    },
    theme: {
      type: String,
      default: 'macarons' // 使用正确的主题名称
    }
  },
  data() {
    return {
      chartInstance: null
    }
  },
  watch: {
    options: {
      deep: true,
      handler() {
        this.updateChart()
      }
    },
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
      // 修复DOM引用错误
      if (!this.$refs.demoPieChart1) return
      // 初始化图表实例
      this.chartInstance = echarts.init(this.$refs.demoPieChart1, theme)
      // 设置初始配置
      this.updateChart()
    },
    updateChart() {
      if (this.chartInstance) {
        try {
          // 应用配置
          this.chartInstance.setOption(this.options, true)
        } catch (error) {
          console.error('ECharts配置错误:', error)
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
  width: 100%;
  height: 100%;
}
</style>
