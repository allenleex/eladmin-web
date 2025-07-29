<template>
  <div ref="demoBarChart3" class="chart-container" />
</template>

<script>
import * as echarts from 'echarts'
import 'echarts/theme/macarons' // 正确引入主题

export default {
  name: 'DemoBarChart3',
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
          text: '证书状态',
          left: 'left',
          textStyle: {
            fontSize: 12,
            color: '#AABAE3' // 添加文本颜色
          },
          padding: 2
        },
        grid: {
          left: '0px',
          right: '10px',
          top: '30px',
          bottom: '20px',
          containLabel: true
        },
        tooltip: {
          trigger: 'axis',
          formatter: '{b}<br/>{a}: {c}'
        },
        xAxis: [
          {
            type: 'value',
            name: '',
            min: 0,
            max: 200,
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
          }
        ],
        yAxis: {
          type: 'category',
          data: ['一级建造师证书', '注册电气工程师', '注册结构工程师', '注册岩土工程师'],
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
        series: [
          {
            name: '有效证书',
            type: 'bar',
            data: [160, 160, 160, 160],
            itemStyle: {
              color: '#4CC9F0'
            },
            barWidth: 8
          },
          {
            name: '过期证书',
            type: 'bar',
            data: [120, 120, 120, 120],
            itemStyle: {
              color: '#4361EE'
            },
            barWidth: 8
          },
          {
            name: '吊销证书',
            type: 'bar',
            data: [75, 75, 75, 75],
            itemStyle: {
              color: '#FF6B35'
            },
            barWidth: 8
          }
        ],
        legend: {
          type: 'plain',
          orient: 'horizontal',
          x: 'center',
          y: 'bottom',
          padding: [0, 0, 0, 0],
          itemGap: 20,
          itemHeight: 9,
          itemWidth: 9,
          textStyle: {
            fontSize: 9,
            color: '#ffffff' // 添加文本颜色
          }
        }
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
      if (!this.$refs.demoBarChart3) return
      // 初始化图表实例
      this.chartInstance = echarts.init(this.$refs.demoBarChart3, theme)
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
