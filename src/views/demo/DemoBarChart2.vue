<template>
  <div ref="demoBarChart2" class="chart-container" />
</template>

<script>
import * as echarts from 'echarts'
import 'echarts/theme/macarons' // 正确引入主题

export default {
  name: 'DemoBarChart2',
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
          text: '项目分摊设备租金',
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
          data: ['山东碧桂园工程第二期', '龙美三村三拆新项目', '厦门特尔工厂项目'],
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
        yAxis: [
          {
            type: 'value',
            name: '',
            min: 0,
            max: 140,
            interval: 20,
            axisLabel: {
              formatter: '{value}',
              color: '#4CC9F0',
              backgroundColor: 'transparent'
            },
            axisLine: {
              lineStyle: {
                color: '#4CC9F0'
              }
            },
            splitLine: {
              show: false
            },
            nameTextStyle: {
              color: '#4CC9F0'
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
              color: '#4CC9F0'
            },
            axisLine: {
              lineStyle: {
                color: '#4CC9F0'
              }
            },
            splitLine: {
              show: false
            },
            nameTextStyle: {
              color: '#4CC9F0'
            }
          }
        ],
        series: [
          {
            name: '分摊额(万元)',
            type: 'bar',
            data: [130, 55, 90],
            itemStyle: {
              color: '#4CC9F0'
            },
            barWidth: 15
          },
          {
            name: '分摊折旧额(万元)',
            type: 'bar',
            data: [80, 100, 20],
            itemStyle: {
              color: '#4361EE'
            },
            barWidth: 15
          },
          {
            name: '分摊比例(%)',
            type: 'line',
            smooth: false,
            yAxisIndex: 1,
            data: [20, 80, 60], // 修正数据值
            itemStyle: {
              color: '#FF6B35'
            },
            lineStyle: {
              width: 2
            },
            symbol: 'circle',
            symbolSize: 8
          }
        ],
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
      if (!this.$refs.demoBarChart2) return
      // 初始化图表实例
      this.chartInstance = echarts.init(this.$refs.demoBarChart2, theme)
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
