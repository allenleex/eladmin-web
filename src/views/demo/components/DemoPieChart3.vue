<template>
  <div ref="demoPieChart3" class="chart-container" />
</template>

<script>
import * as echarts from 'echarts'
import 'echarts/theme/macarons' // 正确引入主题

export default {
  name: 'DemoPieChart3',
  props: {
    options: {
      type: Object,
      required: true,
      default: () => ({
        backgroundColor: 'transparent',
        title: {
          text: '报废率',
          left: 'left',
          textStyle: {
            fontSize: 12,
            color: '#AABAE3' // 添加文本颜色
          },
          padding: 2
        },
        tooltip: {
          trigger: 'item',
          formatter: '{b}<br/>{a}: {c}万 ({d}%)'
        },
        legend: {
          orient: 'vertical',
          right: 10,
          top: 'center',
          itemHeight: 9,
          itemWidth: 9,
          textStyle: {
            color: '#ffffff',
            fontSize: 9
          }
        },
        series: [
          {
            name: '折旧情况',
            type: 'pie',
            radius: ['0%', '60%'],
            center: ['40%', '50%'],
            startAngle: 20,
            avoidLabelOverlap: false,
            itemStyle: {
              borderColor: '#1A1C2F',
              borderWidth: 0
            },
            label: {
              show: true,
              formatter: '{b}\n数量:{c} {d}%',
              lineHeight: 15,
              backgroundColor: 'transparent',
              borderRadius: 0,
              padding: [5, 5],
              color: '#AABAE3',
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
                value: 14,
                name: '刚管',
                itemStyle: {
                  color: '#4CC9F0'
                }
              },
              {
                value: 36,
                name: '扣件',
                itemStyle: {
                  color: '#7209B7'
                }
              },
              {
                value: 50,
                name: '胶布',
                itemStyle: {
                  color: '#FF6B35'
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
      if (!this.$refs.demoPieChart3) return
      // 初始化图表实例
      this.chartInstance = echarts.init(this.$refs.demoPieChart3, theme)
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
