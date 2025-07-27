/* eslint-disable */
<!-- DemoPaiChart1.vue -->
<template>
  <div ref="demoPieChart1" class="chart-container" />
</template>

<script>
import * as echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
import resize from '@/views/dashboard/mixins/resize'
export default {
  name: 'DemoPieChart1',
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
          text: '项目资产折旧',
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
        series: [
          {
            name: '折旧情况',
            type: 'pie',
            radius: ['40%', '70%'],
            center: ['50%', '50%'],
            avoidLabelOverlap: false,
            itemStyle: {
              borderColor: '#1A1C2F',
              borderWidth: 2
            },
            label: {
              show: true,
              formatter: '{b}\n折旧:{c}万\n{d}%',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderRadius: 4,
              padding: [5, 10],
              color: '#ffffff',
              fontSize: 12
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
                },
                label: {
                  formatter: 'SB-2025827\n折旧:8.4万\n10%'
                }
              },
              {
                value: 27,
                name: 'SB-2025231',
                itemStyle: {
                  color: '#FF6B35'
                },
                label: {
                  formatter: 'SB-2025231\n折旧:27万\n20%'
                }
              },
              {
                value: 68.4,
                name: 'SB-2025416',
                itemStyle: {
                  color: '#7209B7'
                },
                label: {
                  formatter: 'SB-2025416\n折旧:68.4万\n50%'
                }
              },
              {
                value: 38,
                name: 'SB-2025611',
                itemStyle: {
                  color: '#4CC9F0'
                },
                label: {
                  formatter: 'SB-2025611\n折旧:38万\n20%'
                }
              }
            ]
          }
        ],
        legend: {
          orient: 'vertical',
          right: 10,
          top: 'center',
          textStyle: {
            color: '#ffffff'
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
