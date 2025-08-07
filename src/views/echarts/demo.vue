<template>
  <div class="md-container">
    <div class="md-content">
      <div class="md-layout">
        <div class="md-layout-item"><line-chart :chart-data="lineChartData" /></div>
        <div class="md-layout-item"><bar-chart /></div>
        <div class="md-layout-item"><pie-chart /></div>
      </div>
      <div class="md-layout">
        <div class="md-layout-item md-size-100"><heat-map /></div>
      </div>
      <div class="md-layout">
        <div class="md-layout-item"><scatter /></div>
      </div>
      <div class="md-layout">
        <div class="md-layout-item"><radar-chart /></div>
      </div>
    </div>
  </div>
</template>

<script>
import LineChart from '@/components/Echarts/LineChart'
import RadarChart from '@/components/Echarts/RadarChart'
import PieChart from '@/components/Echarts/PieChart'
import BarChart from '@/components/Echarts/BarChart'
import HeatMap from '@/components/Echarts/HeatMap'
import Scatter from '@/components/Echarts/Scatter'

const chartData = {
  line: {
    expectedData: [100, 120, 161, 134, 105, 160, 165],
    actualData: [120, 82, 91, 154, 162, 140, 145]
  }
}

export default {
  name: 'EChartDemo',
  components: {
    LineChart,
    RadarChart,
    PieChart,
    BarChart,
    HeatMap,
    Scatter
  },
  data() {
    return {
      lineChartData: chartData.line
    }
  },
  methods: {
    handleSetLineChartData(type) {
      this.chartData = chartData[type]
    }
  }
}
</script>
