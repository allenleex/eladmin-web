<template>
  <div :class="className" :style="{ height: height, width: width }" />
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
import { debounce } from '@/utils'

export default {
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '300px'
    },
    autoResize: {
      type: Boolean,
      default: true
    },
    chartData: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      chart: null
    }
  },
  watch: {
    chartData: {
      deep: true,
      handler(val) {
        this.setOptions(val)
      }
    }
  },
  mounted() {
    this.initChart()
    this.__resizeHandler = debounce(() => {
      if (this.chart) {
        this.chart.resize()
      }
    }, 100)
    window.addEventListener('resize', this.__resizeHandler)
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$el, 'macarons')
      this.setOptions(this.chartData)
    },
    setOptions({ xAxisData, legend, a, b, c } = {}) {
      this.chart.setOption({
        xAxis: {
          data: xAxisData || [],
          boundaryGap: false,
          axisTick: {
            show: false
          },
          nameRotate: 45
        },
        grid: {
          left: 10,
          right: 10,
          bottom: 20,
          top: 30,
          containLabel: true
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          },
          padding: [5, 10],
          formatter: function (params) {
            return params.map(item =>
              `${item.seriesName}: ${item.value}<br/>`
            ).join('')
          }
        },
        yAxis: {
          axisTick: {
            show: false
          },
          min: 'dataMin',
          max: 'dataMax'
        },
        legend: {
          data: legend
        },
        series: [
          {
            name: legend[0],
            itemStyle: {
              normal: {
                color: '#FF005A',
                lineStyle: {
                  color: '#FF005A',
                  width: 2
                }
              }
            },
            smooth: true,
            type: 'line',
            data: a || [],
            animationDuration: 2800,
            animationEasing: 'cubicInOut'
          },
          {
            name: legend[1],
            smooth: true,
            type: 'line',
            itemStyle: {
              normal: {
                color: '#3888fa',
                lineStyle: {
                  color: '#3888fa',
                  width: 2
                },
                areaStyle: {
                  color: '#f3f8ff'
                }
              }
            },
            data: b || [],
            animationDuration: 2800,
            animationEasing: 'quadraticOut'
          },
          {
            name: legend[2],
            smooth: true,
            type: 'line',
            itemStyle: {
              normal: {
                color: '#fa8838',
                lineStyle: {
                  color: '#fa8838',
                  width: 2
                },
                areaStyle: {
                  color: '#f3f8ff'
                }
              }
            },
            data: c || [],
            animationDuration: 2800,
            animationEasing: 'quadraticOut'
          }
        ]
      })
    }
  }
}
</script>