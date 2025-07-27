/* eslint-disable */
<!-- DemoGDMap.vue -->
<template>
  <div ref="gdMapContainer" class="chart-container" />
</template>

<script>
import * as echarts from 'echarts'
import gdGeoJSON from '@/assets/json/440000.json' // 广东省的GeoJSON文件
import { onMounted, onBeforeUnmount, ref, watch } from 'vue'
require('echarts/theme/macarons') // echarts theme
export default {
  name: 'DemoGDMap',
  props: {
    options: {
      type: Object,
      default: () => ({
        backgroundColor: 'transparent',
        tooltip: {
          trigger: 'item',
          fontSize: 10,
          formatter: function(params) {
            return `${params.name}市闲置设备: ${params.value || 0}`
          }
        },
        visualMap: {
          min: 0,
          max: 100,
          calculable: true,
          inRange: {
            color: ['#4361EE', '#4CC9F0', '#7209B7', '#FFD166', '#FF6B35'] // 从紫色色到橙色的渐变
          },
          textStyle: {
            color: '#fff'
          },
          orient: 'vertical', // 添加视觉映射组件位置和方向
          right: '3%',
          bottom: '15%'
        },
        series: [{
          type: 'map',
          map: 'gd',
          roam: true,
          zoom: 1.2,
          nameMap: {
            '广州市': '广州',
            '深圳市': '深圳',
            '珠海市': '珠海',
            '汕头市': '汕头',
            '佛山市': '佛山',
            '韶关市': '韶关',
            '湛江市': '湛江',
            '肇庆市': '肇庆',
            '江门市': '江门',
            '茂名市': '茂名',
            '惠州市': '惠州',
            '梅州市': '梅州',
            '汕尾市': '汕尾',
            '河源市': '河源',
            '阳江市': '阳江',
            '清远市': '清远',
            '东莞市': '东莞',
            '中山市': '中山',
            '潮州市': '潮州',
            '揭阳市': '揭阳',
            '云浮市': '云浮'
          },
          label: {
            show: true,
            fontSize: 14,
            fontWeight: 'bold',
            color: '#ffffff'
          },
          itemStyle: {
            areaColor: '#4CC9F0',
            borderColor: 'rgba(0,0,0,0.5)',
            borderWidth: 1
          },
          emphasis: {
            label: {
              color: '#ffffff',
              fontSize: 16
            }
          },
          data: [
            { name: '广州', value: 100 },
            { name: '深圳', value: 95 },
            { name: '珠海', value: 85 },
            { name: '佛山', value: 80 },
            { name: '东莞', value: 75 },
            { name: '中山', value: 70 },
            { name: '惠州', value: 65 },
            { name: '汕头', value: 60 },
            { name: '江门', value: 55 },
            { name: '湛江', value: 50 },
            { name: '肇庆', value: 45 },
            { name: '茂名', value: 40 },
            { name: '揭阳', value: 35 },
            { name: '清远', value: 30 },
            { name: '阳江', value: 25 },
            { name: '韶关', value: 20 },
            { name: '梅州', value: 15 },
            { name: '汕尾', value: 10 },
            { name: '河源', value: 8 },
            { name: '潮州', value: 5 },
            { name: '云浮', value: 3 }
          ]
        }]
      })
    },
    theme: {
      type: String,
      default: 'dark'
    }
  },
  setup(props) {
    const gdMapContainer = ref(null)
    let chartInstance = null

    // 注册广东地图
    echarts.registerMap('gd', gdGeoJSON)

    const initChart = () => {
      if (!gdMapContainer.value) return
      // 销毁现有实例
      if (chartInstance) {
        chartInstance.dispose()
      }
      // 创建新实例
      chartInstance = echarts.init(gdMapContainer.value, props.theme)
      updateChart()
      // 添加窗口大小调整监听
      window.addEventListener('resize', handleResize)
    }

    const updateChart = () => {
      if (chartInstance) {
        try {
          const fullOptions = {
            ...props.options,
            // 添加标题配置
            title: props.options.title || {
              show: false,
              text: '广东省地图',
              left: 'center',
              top: 10,
              textStyle: {
                color: '#fff',
                fontSize: 16
              }
            },
            // 添加提示框配置
            tooltip: props.options.tooltip || {
              trigger: 'item',
              formatter: function(params) {
                return `${params.name}: ${params.value || 0}`
              }
            }
          }
          chartInstance.setOption(fullOptions, true)
        } catch (error) {
          console.error('ECharts error:', error)
        }
      }
    }

    const handleResize = () => {
      if (chartInstance) {
        chartInstance.resize()
      }
    }

    const destroyChart = () => {
      if (chartInstance) {
        window.removeEventListener('resize', handleResize)
        chartInstance.dispose()
        chartInstance = null
      }
    }

    // 监听选项变化
    watch(() => props.options, () => {
      updateChart()
    }, { deep: true })

    // 监听主题变化
    watch(() => props.theme, () => {
      initChart()
    })

    // 生命周期钩子
    onMounted(() => {
      initChart()
    })

    onBeforeUnmount(() => {
      destroyChart()
    })

    return {
      gdMapContainer
    }
  }
}
</script>

<style scoped>
.chart-container {
  width: 100% !important;
  height: 100% !important;
  min-height: 500px;
  background-color: transparent;
}
</style>
